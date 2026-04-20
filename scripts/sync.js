// ── Cloud Sync (Firebase) ─────────────────────────────────────────────────────
// Paste your Firebase config below to enable cloud sync.
// Leave apiKey empty (or as the placeholder) to run in localStorage-only mode.

const FIREBASE_CONFIG = {
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_PROJECT.firebaseapp.com",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_PROJECT.appspot.com",
    // messagingSenderId: "YOUR_SENDER_ID",
    // appId: "YOUR_APP_ID"
};

const SYNC_ENABLED = !!(FIREBASE_CONFIG.apiKey);

window.syncModule = (() => {
    if (!SYNC_ENABLED) {
        // Stub — app works normally with localStorage only
        return { init() {}, push() {}, toggleAuth() {} };
    }

    const COLLECTIONS = ['exercises', 'workoutHistory', 'routines'];
    let db, auth, uid = null;
    let pushQueue = new Set();
    let pushTimer = null;

    // ── UI helpers ────────────────────────────────────────────────────────────
    function setSyncUI(state, label) {
        const dot = document.getElementById('sync-dot');
        const lbl = document.getElementById('sync-label');
        const row = document.getElementById('sync-row');
        const btn = document.getElementById('sync-btn');
        if (!dot) return;
        row.style.display = 'flex';
        dot.className = `sync-dot sync-dot--${state}`;
        lbl.textContent = label;
        if (btn) btn.textContent = uid ? 'Sign out' : 'Sign in';
    }

    // ── Pull from Firestore → localStorage + dispatch events ─────────────────
    async function pullAll() {
        setSyncUI('syncing', 'Syncing…');
        try {
            for (const col of COLLECTIONS) {
                const snap = await db.collection('users').doc(uid).collection('data').doc(col).get();
                if (snap.exists) {
                    const items = snap.data().items || [];
                    localStorage.setItem(col, JSON.stringify(items));
                    document.dispatchEvent(new CustomEvent('sync:dataUpdated', { detail: { collection: col, items } }));
                }
            }
            setSyncUI('synced', 'Synced');
        } catch (err) {
            console.error('[sync] pull failed', err);
            setSyncUI('error', 'Sync error');
        }
    }

    // ── Push localStorage → Firestore (debounced) ─────────────────────────────
    function schedulePush() {
        clearTimeout(pushTimer);
        pushTimer = setTimeout(async () => {
            if (!uid || !pushQueue.size) return;
            setSyncUI('syncing', 'Saving…');
            try {
                const batch = db.batch();
                for (const col of pushQueue) {
                    const items = JSON.parse(localStorage.getItem(col) || '[]');
                    const ref = db.collection('users').doc(uid).collection('data').doc(col);
                    batch.set(ref, { items });
                }
                await batch.commit();
                pushQueue.clear();
                setSyncUI('synced', 'Saved');
            } catch (err) {
                console.error('[sync] push failed', err);
                setSyncUI('error', 'Save error');
            }
        }, 1500);
    }

    // ── Public API ────────────────────────────────────────────────────────────
    return {
        init() {
            firebase.initializeApp(FIREBASE_CONFIG);
            db   = firebase.firestore();
            auth = firebase.auth();

            // Offline persistence (works offline, syncs on reconnect)
            db.enablePersistence({ synchronizeTabs: true }).catch(() => {});

            auth.onAuthStateChanged(user => {
                if (user) {
                    uid = user.uid;
                    setSyncUI('syncing', 'Signing in…');
                    pullAll();
                } else {
                    uid = null;
                    setSyncUI('signed-out', 'Not signed in');
                    const row = document.getElementById('sync-row');
                    if (row) row.style.display = 'flex';
                    const btn = document.getElementById('sync-btn');
                    if (btn) btn.textContent = 'Sign in';
                }
            });
        },

        push(collection) {
            if (!uid) return;
            pushQueue.add(collection);
            schedulePush();
        },

        async toggleAuth() {
            if (!auth) return;
            if (uid) {
                await auth.signOut();
            } else {
                try {
                    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
                } catch (err) {
                    console.error('[sync] sign-in failed', err);
                    setSyncUI('error', 'Sign-in failed');
                }
            }
        }
    };
})();

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => syncModule.init());
} else {
    syncModule.init();
}
