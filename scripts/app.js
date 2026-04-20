const BODY_PARTS = [
    { id: 'chest',     name: 'Chest',     icon: `<svg width="24" height="24" viewBox="0 0 656 636" fill="currentColor"><path d="M0 0 C216.48 0 432.96 0 656 0 C656 209.88 656 419.76 656 636 C439.52 636 223.04 636 0 636 C0 426.12 0 216.24 0 0 Z"/></svg>` },
    { id: 'back',      name: 'Back',      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/><path d="M8 6l4-4 4 4M8 18l4 4 4-4"/></svg>` },
    { id: 'shoulders', name: 'Shoulders', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M4 12h4l2 8h4l2-8h4"/></svg>` },
    { id: 'biceps',    name: 'Biceps',    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16l4-8a4 4 0 0 1 6 0v8a4 4 0 0 1-6 0"/><path d="M20 16l-4-8a4 4 0 0 0-6 0v8a4 4 0 0 0 6 0"/></svg>` },
    { id: 'triceps',   name: 'Triceps',   icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8l-3 8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3l-3-8"/><path d="M12 4v4"/></svg>` },
    { id: 'legs',      name: 'Legs',      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v10l-3 10h2l2-6 2 6h2l-3-10V2"/></svg>` },
    { id: 'core',      name: 'Core',      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="16" rx="2"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="6" y1="16" x2="18" y2="16"/><line x1="12" y1="4" x2="12" y2="20"/></svg>` },
    { id: 'cardio',    name: 'Cardio',    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>` }
];

const EXERCISE_TYPES = [
    { id: 'strength',   name: 'Strength'   },
    { id: 'cardio',     name: 'Cardio'     },
    { id: 'bodyweight', name: 'Bodyweight' },
    { id: 'duration',   name: 'Duration'   },
];

const DEFAULT_EXERCISES = [
    { id: 'bench-press',         name: 'Bench Press',          bodyPart: 'chest',     type: 'strength'   },
    { id: 'incline-press',       name: 'Incline Press',        bodyPart: 'chest',     type: 'strength'   },
    { id: 'decline-press',       name: 'Decline Press',        bodyPart: 'chest',     type: 'strength'   },
    { id: 'pec-fly',             name: 'Pec Fly',              bodyPart: 'chest',     type: 'strength'   },
    { id: 'cable-press',         name: 'Cable Press',          bodyPart: 'chest',     type: 'strength'   },
    { id: 'cable-decline',       name: 'Cable Decline',        bodyPart: 'chest',     type: 'strength'   },
    { id: 'chest-press',         name: 'Chest Press',          bodyPart: 'chest',     type: 'strength'   },
    { id: 'push-up',             name: 'Push Up',              bodyPart: 'chest',     type: 'bodyweight' },
    { id: 'pull-up',             name: 'Pull Up',              bodyPart: 'back',      type: 'bodyweight' },
    { id: 'chin-up',             name: 'Chin Up',              bodyPart: 'back',      type: 'bodyweight' },
    { id: 'lat-pulldown',        name: 'Lat Pulldown',         bodyPart: 'back',      type: 'strength'   },
    { id: 'barbell-row',         name: 'Barbell Row',          bodyPart: 'back',      type: 'strength'   },
    { id: 'single-arm-row',      name: 'Single Arm Row',       bodyPart: 'back',      type: 'strength'   },
    { id: 'close-grip-pulldown', name: 'Close Grip Pulldown',  bodyPart: 'back',      type: 'strength'   },
    { id: 'cable-pulldown',      name: 'Cable Pulldown',       bodyPart: 'back',      type: 'strength'   },
    { id: 'lower-back',          name: 'Lower Back',           bodyPart: 'back',      type: 'strength'   },
    { id: 'rows',                name: 'Rows',                 bodyPart: 'back',      type: 'strength'   },
    { id: 'shoulder-press',      name: 'Shoulder Press',       bodyPart: 'shoulders', type: 'strength'   },
    { id: 'lateral-raise',       name: 'Lateral Raise',        bodyPart: 'shoulders', type: 'strength'   },
    { id: 'front-raise',         name: 'Front Raise',          bodyPart: 'shoulders', type: 'strength'   },
    { id: 'face-pull',           name: 'Face Pull',            bodyPart: 'shoulders', type: 'strength'   },
    { id: 'reverse-fly',         name: 'Reverse Fly',          bodyPart: 'shoulders', type: 'strength'   },
    { id: 'shrugs',              name: 'Shrugs',               bodyPart: 'shoulders', type: 'strength'   },
    { id: 'bicep-curl',          name: 'Bicep Curl',           bodyPart: 'biceps',    type: 'strength'   },
    { id: 'hammer-curl',         name: 'Hammer Curl',          bodyPart: 'biceps',    type: 'strength'   },
    { id: 'spider-curl',         name: 'Spider Curl',          bodyPart: 'biceps',    type: 'strength'   },
    { id: 'preacher-curl',       name: 'Preacher Curl',        bodyPart: 'biceps',    type: 'strength'   },
    { id: 'barbell-curl',        name: 'Barbell Curl',         bodyPart: 'biceps',    type: 'strength'   },
    { id: 'cable-curl',          name: 'Cable Curl',           bodyPart: 'biceps',    type: 'strength'   },
    { id: 'forearms',            name: 'Forearms',             bodyPart: 'biceps',    type: 'strength'   },
    { id: 'skull-crusher',       name: 'Skull Crusher',        bodyPart: 'triceps',   type: 'strength'   },
    { id: 'tricep-pushdown',     name: 'Tricep Pushdown',      bodyPart: 'triceps',   type: 'strength'   },
    { id: 'tricep-overhead',     name: 'Tricep Overhead',      bodyPart: 'triceps',   type: 'strength'   },
    { id: 'rope-pushdown',       name: 'Rope Pushdown',        bodyPart: 'triceps',   type: 'strength'   },
    { id: 'dip',                 name: 'Dip',                  bodyPart: 'triceps',   type: 'bodyweight' },
    { id: 'diamond-push-up',     name: 'Diamond Push Up',      bodyPart: 'triceps',   type: 'bodyweight' },
    { id: 'squat',               name: 'Squat',                bodyPart: 'legs',      type: 'strength'   },
    { id: 'machine-squat',       name: 'Machine Squat',        bodyPart: 'legs',      type: 'strength'   },
    { id: 'leg-press',           name: 'Leg Press',            bodyPart: 'legs',      type: 'strength'   },
    { id: 'leg-extension',       name: 'Leg Extension',        bodyPart: 'legs',      type: 'strength'   },
    { id: 'leg-curl',            name: 'Leg Curl',             bodyPart: 'legs',      type: 'strength'   },
    { id: 'calf-raise',          name: 'Calf Raise',           bodyPart: 'legs',      type: 'strength'   },
    { id: 'romanian-deadlift',   name: 'RDL',                  bodyPart: 'legs',      type: 'strength'   },
    { id: 'hip-thrust',          name: 'Hip Thrust',           bodyPart: 'legs',      type: 'strength'   },
    { id: 'hip-abduction',       name: 'Hip Abduction',        bodyPart: 'legs',      type: 'strength'   },
    { id: 'lunges',              name: 'Lunges',               bodyPart: 'legs',      type: 'bodyweight' },
    { id: 'split-squat',         name: 'Split Squat',          bodyPart: 'legs',      type: 'bodyweight' },
    { id: 'bulgarian-split',     name: 'Bulgarian Split Squat',bodyPart: 'legs',      type: 'bodyweight' },
    { id: 'glute-bridge',        name: 'Glute Bridge',         bodyPart: 'legs',      type: 'bodyweight' },
    { id: 'wall-sit',            name: 'Wall Sit',             bodyPart: 'legs',      type: 'duration'   },
    { id: 'crunch',              name: 'Crunch',               bodyPart: 'core',      type: 'bodyweight' },
    { id: 'cable-crunch',        name: 'Cable Crunch',         bodyPart: 'core',      type: 'strength'   },
    { id: 'decline-crunch',      name: 'Decline Crunch',       bodyPart: 'core',      type: 'bodyweight' },
    { id: 'plank',               name: 'Plank',                bodyPart: 'core',      type: 'duration'   },
    { id: 'side-plank',          name: 'Side Plank',           bodyPart: 'core',      type: 'duration'   },
    { id: 'hanging-leg-raise',   name: 'Hanging Leg Raise',    bodyPart: 'core',      type: 'bodyweight' },
    { id: 'mountain-climber',    name: 'Mountain Climber',     bodyPart: 'core',      type: 'bodyweight' },
    { id: 'running',             name: 'Running',              bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'cycling',             name: 'Cycling',              bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'rowing-machine',      name: 'Rowing Machine',       bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'jump-rope',           name: 'Jump Rope',            bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'elliptical',          name: 'Elliptical',           bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'swimming',            name: 'Swimming',             bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'walk',                name: 'Walk',                 bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'treadmill',           name: 'Treadmill',            bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'stair-climber',       name: 'Stair Climber',        bodyPart: 'cardio',    type: 'cardio'     },
    { id: 'burpee',              name: 'Burpee',               bodyPart: 'cardio',    type: 'bodyweight' },
];

// ── State ────────────────────────────────────────────────────────────────────
let exercises        = JSON.parse(localStorage.getItem('exercises'))      || [...DEFAULT_EXERCISES];
let workoutHistory   = JSON.parse(localStorage.getItem('workoutHistory')) || [];
let currentWorkout   = null;
let currentExerciseIndex = null;
let activeBodyPartFilter = 'all';
let selectedBodyParts    = new Set();
let workoutStartTime     = null;
let workoutTimerInterval = null;
let prToastTimeout       = null;

// ── Persistence ──────────────────────────────────────────────────────────────
function saveExercises()     { localStorage.setItem('exercises',      JSON.stringify(exercises));      }
function saveWorkoutHistory(){ localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory)); }
function generateId()        { return Date.now().toString(36) + Math.random().toString(36).substr(2);  }

// ── Migration ────────────────────────────────────────────────────────────────
function migrateData() {
    let changed = false;
    exercises = exercises.map(ex => {
        if (!ex.type) {
            changed = true;
            if (['pull-up','chin-up'].includes(ex.id))               return { ...ex, type: 'bodyweight' };
            if (['plank','side-plank','wall-sit'].includes(ex.id))    return { ...ex, type: 'duration'   };
            return { ...ex, type: 'strength' };
        }
        return ex;
    });
    if (changed) saveExercises();
}

// ── Type helpers ─────────────────────────────────────────────────────────────
function getExerciseType(exerciseId) {
    return exercises.find(e => e.id === exerciseId)?.type || 'strength';
}

function getDefaultSet(type) {
    switch (type) {
        case 'cardio':     return { duration: '', distance: '' };
        case 'bodyweight': return { reps: '' };
        case 'duration':   return { duration: '' };
        default:           return { weight: '', reps: '' };
    }
}

function getTypeBadge(type) {
    const labels = { strength: 'STR', cardio: 'CARDIO', bodyweight: 'BW', duration: 'TIME' };
    return `<span class="type-badge type-${type}">${labels[type] || 'STR'}</span>`;
}

function getExerciseQuickStat(ex, type) {
    switch (type) {
        case 'cardio': {
            const dist = ex.sets.reduce((s,r) => s + (parseFloat(r.distance)||0), 0);
            const time = ex.sets.reduce((s,r) => s + (parseFloat(r.duration)||0), 0);
            return `${dist.toFixed(1)}km / ${time}min`;
        }
        case 'bodyweight': {
            const max = Math.max(...ex.sets.map(r => parseInt(r.reps)||0), 0);
            return `${ex.sets.length} sets × ${max} reps`;
        }
        case 'duration': {
            const time = ex.sets.reduce((s,r) => s + (parseFloat(r.duration)||0), 0);
            return `${time} min`;
        }
        default: {
            const best = ex.sets.reduce((b,s) => { const w=parseFloat(s.weight)||0; return w>b.weight?{weight:w,reps:s.reps}:b; }, {weight:0,reps:0});
            return `${best.weight}kg × ${best.reps}`;
        }
    }
}

// ── Date helpers ─────────────────────────────────────────────────────────────
function formatDate(dateStr) {
    const date = new Date(dateStr), today = new Date(), yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (dateStr === today.toISOString().split('T')[0])     return 'Today';
    if (dateStr === yesterday.toISOString().split('T')[0]) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
function formatFullDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric', year:'numeric' });
}
function getDaysAgo(dateStr) {
    const d = new Date(dateStr), t = new Date();
    d.setHours(0,0,0,0); t.setHours(0,0,0,0);
    const diff = Math.floor((t - d) / 86400000);
    if (diff === 0) return 'Today'; if (diff === 1) return 'Yesterday'; return `${diff}d ago`;
}
function getLastTrainedDateByBodyPart(bodyPart) {
    const ws = workoutHistory.filter(w => w.bodyParts.includes(bodyPart));
    if (!ws.length) return null;
    return ws.sort((a,b) => new Date(b.date) - new Date(a.date))[0].date;
}
function getCurrentStreak() {
    if (!workoutHistory.length) return 0;
    const dates = [...new Set(workoutHistory.map(w => w.date))].sort().reverse();
    let streak = 0, cur = new Date(); cur.setHours(0,0,0,0);
    for (const ds of dates) {
        const d = new Date(ds); d.setHours(0,0,0,0);
        if (Math.floor((cur - d) / 86400000) <= 1) { streak++; cur = d; } else break;
    }
    return streak;
}

// ── Workout Timer ─────────────────────────────────────────────────────────────
function startWorkoutTimer() {
    workoutStartTime = Date.now();
    workoutTimerInterval = setInterval(updateWorkoutTimer, 1000);
    updateWorkoutTimer();
}
function updateWorkoutTimer() {
    const el = document.getElementById('workout-timer');
    if (!el || !workoutStartTime) return;
    const sec = Math.floor((Date.now() - workoutStartTime) / 1000);
    el.textContent = `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;
}
function stopWorkoutTimer() {
    if (workoutTimerInterval) { clearInterval(workoutTimerInterval); workoutTimerInterval = null; }
    return workoutStartTime ? Math.floor((Date.now() - workoutStartTime) / 1000) : 0;
}

// ── PR helpers ────────────────────────────────────────────────────────────────
function getAllTimePR(exerciseId, type) {
    const allSets = workoutHistory
        .filter(w => w.id !== currentWorkout?.id)
        .flatMap(w => { const ex = w.exercises.find(e => e.exerciseId === exerciseId); return ex ? ex.sets : []; });
    switch (type) {
        case 'strength': {
            const pr = allSets.reduce((b,s) => {
                const w = parseFloat(s.weight)||0, r = parseInt(s.reps)||0;
                if (w > b.weight) return {weight:w, reps:r};
                if (w === b.weight && r > b.reps) return {weight:w, reps:r};
                return b;
            }, {weight:0, reps:0});
            return pr.weight > 0 ? `${pr.weight}kg × ${pr.reps}` : null;
        }
        case 'bodyweight': { const m = Math.max(...allSets.map(s => parseInt(s.reps)||0), 0); return m > 0 ? `${m} reps` : null; }
        case 'cardio':     { const m = Math.max(...allSets.map(s => parseFloat(s.distance)||0), 0); return m > 0 ? `${m.toFixed(1)}km` : null; }
        case 'duration':   { const m = Math.max(...allSets.map(s => parseFloat(s.duration)||0), 0); return m > 0 ? `${m}min` : null; }
    }
    return null;
}

function getPreviousSession(exerciseId) {
    const hist = workoutHistory
        .filter(w => w.id !== currentWorkout?.id && w.exercises.some(e => e.exerciseId === exerciseId))
        .sort((a,b) => new Date(b.date) - new Date(a.date));
    if (!hist.length) return null;
    const w = hist[0];
    return { date: w.date, sets: w.exercises.find(e => e.exerciseId === exerciseId).sets };
}

function checkForNewPR(exerciseId, setObj, type) {
    const allPrev = workoutHistory
        .filter(w => w.id !== currentWorkout.id)
        .flatMap(w => { const ex = w.exercises.find(e => e.exerciseId === exerciseId); return ex ? ex.sets : []; });
    if (type === 'strength') {
        const nw = parseFloat(setObj.weight)||0;
        if (!nw) return;
        const old = Math.max(...allPrev.map(s => parseFloat(s.weight)||0), 0);
        if (nw > old) showPRToast(`${nw}kg${old > 0 ? ` (was ${old}kg)` : ' — first PR!'}`);
    } else if (type === 'bodyweight') {
        const nr = parseInt(setObj.reps)||0;
        if (!nr) return;
        const old = Math.max(...allPrev.map(s => parseInt(s.reps)||0), 0);
        if (nr > old) showPRToast(`${nr} reps${old > 0 ? ` (was ${old})` : ''}`);
    } else if (type === 'cardio') {
        const nd = parseFloat(setObj.distance)||0;
        if (!nd) return;
        const old = Math.max(...allPrev.map(s => parseFloat(s.distance)||0), 0);
        if (nd > old) showPRToast(`${nd}km${old > 0 ? ` (was ${old.toFixed(1)}km)` : ''}`);
    }
}

function showPRToast(detail) {
    const toast = document.getElementById('pr-toast');
    document.getElementById('pr-toast-detail').textContent = detail;
    toast.classList.remove('hidden', 'pr-toast-hide');
    toast.classList.add('pr-toast-show');
    if (prToastTimeout) clearTimeout(prToastTimeout);
    prToastTimeout = setTimeout(() => {
        toast.classList.remove('pr-toast-show');
        toast.classList.add('pr-toast-hide');
        setTimeout(() => { toast.classList.add('hidden'); toast.classList.remove('pr-toast-hide'); }, 400);
    }, 3000);
}

// ── Previous session card ──────────────────────────────────────────────────────
function renderPrevSessionCard(exerciseId, type) {
    const card = document.getElementById('prev-session-card');
    const prev = getPreviousSession(exerciseId);
    const pr   = getAllTimePR(exerciseId, type);
    if (!prev && !pr) { card.style.display = 'none'; return; }
    card.style.display = 'block';

    const chipFor = (s) => {
        let txt = '';
        if (type === 'strength')   txt = `${s.weight||'?'}kg×${s.reps||'?'}`;
        else if (type === 'bodyweight') txt = `${s.reps||'?'} reps`;
        else if (type === 'cardio')     txt = `${s.distance||'?'}km`;
        else if (type === 'duration')   txt = `${s.duration||'?'}min`;
        return `<span class="prev-chip">${txt}</span>`;
    };

    card.innerHTML = `
        <div class="prev-session-inner">
            ${prev ? `
            <div class="prev-row">
                <span class="prev-label">Last · ${getDaysAgo(prev.date)}</span>
                <div class="prev-chips">
                    ${prev.sets.slice(0,4).map(chipFor).join('')}
                    ${prev.sets.length > 4 ? `<span class="prev-chip prev-more">+${prev.sets.length - 4}</span>` : ''}
                </div>
            </div>` : ''}
            ${pr ? `
            <div class="pr-row">
                <span class="pr-badge-sm">🏆 PR</span>
                <span class="pr-val">${pr}</span>
            </div>` : ''}
        </div>`;
}

// ── Video link section ─────────────────────────────────────────────────────────
function renderVideoLinkSection(exerciseId) {
    const section = document.getElementById('video-link-section');
    const url = exercises.find(e => e.id === exerciseId)?.videoUrl || '';
    section.innerHTML = `
        <div class="vl-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            <span class="vl-label">Reference</span>
            ${url
                ? `<a href="${url}" target="_blank" rel="noopener" class="vl-url">${url.length>36 ? url.slice(0,36)+'…' : url}</a>`
                : `<span class="vl-empty">Add video link</span>`}
            <button class="vl-btn" id="vl-edit-btn">${url ? 'Edit' : '+'}</button>
        </div>`;
    document.getElementById('vl-edit-btn').addEventListener('click', () => {
        const cur = exercises.find(e => e.id === exerciseId)?.videoUrl || '';
        const val = prompt('Paste a YouTube or tutorial URL:', cur);
        if (val === null) return;
        const idx = exercises.findIndex(e => e.id === exerciseId);
        if (idx >= 0) { exercises[idx].videoUrl = val.trim(); saveExercises(); }
        renderVideoLinkSection(exerciseId);
    });
}

// ── Smart Workout Start ───────────────────────────────────────────────────────
function openWorkoutStartModal() {
    selectedBodyParts = new Set();
    renderBodyPartChips();
    renderStartSuggestions();
    document.getElementById('workout-start-modal').classList.remove('hidden');
}

function renderBodyPartChips() {
    const c = document.getElementById('start-bp-chips');
    c.innerHTML = BODY_PARTS.map(bp => `
        <button class="bp-chip ${selectedBodyParts.has(bp.id) ? 'bp-chip-sel' : ''}" data-bp="${bp.id}">
            <span class="bp-chip-icon">${bp.icon}</span>
            <span>${bp.name}</span>
        </button>`).join('');
    c.querySelectorAll('.bp-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const bp = btn.dataset.bp;
            selectedBodyParts.has(bp) ? selectedBodyParts.delete(bp) : selectedBodyParts.add(bp);
            renderBodyPartChips();
            renderStartSuggestions();
        });
    });
}

function renderStartSuggestions() {
    const section = document.getElementById('start-suggestion-section');
    const list    = document.getElementById('start-suggestion-list');
    const lbl     = document.getElementById('start-suggestion-label');
    if (!selectedBodyParts.size) { section.style.display = 'none'; return; }

    const bps = [...selectedBodyParts];
    const last = workoutHistory
        .filter(w => bps.some(bp => w.bodyParts.includes(bp)))
        .sort((a,b) => new Date(b.date) - new Date(a.date))[0];

    section.style.display = 'block';
    if (last) {
        lbl.textContent = `Based on last session · ${getDaysAgo(last.date)}`;
        const relevant = last.exercises.filter(ex => {
            const d = exercises.find(e => e.id === ex.exerciseId);
            return d && bps.includes(d.bodyPart);
        });
        list.innerHTML = relevant.length
            ? relevant.map(ex => {
                const d = exercises.find(e => e.id === ex.exerciseId);
                return `<div class="start-ex-row">
                    <span>${d?.name || 'Unknown'} ${getTypeBadge(d?.type||'strength')}</span>
                    <span class="start-ex-stat">${getExerciseQuickStat(ex, d?.type||'strength')}</span>
                </div>`;
            }).join('')
            : `<p class="start-no-history">No history for these muscles yet</p>`;
    } else {
        lbl.textContent = 'No previous sessions for these muscles';
        list.innerHTML = `<p class="start-no-history">Start fresh — exercises will be tracked from now on</p>`;
    }
}

function confirmWorkoutStart() {
    document.getElementById('workout-start-modal').classList.add('hidden');
    const today = new Date().toISOString().split('T')[0];
    const existing = workoutHistory.find(w => w.date === today);

    if (existing) {
        const cont = confirm('You already have a workout today. Continue it?');
        currentWorkout = cont
            ? { id: existing.id, date: today, bodyParts: [...existing.bodyParts], exercises: JSON.parse(JSON.stringify(existing.exercises)) }
            : { ...existing };
    } else {
        const bps = [...selectedBodyParts];
        currentWorkout = { id: generateId(), date: today, bodyParts: [], exercises: [], duration: 0 };

        if (bps.length) {
            const last = workoutHistory
                .filter(w => bps.some(bp => w.bodyParts.includes(bp)))
                .sort((a,b) => new Date(b.date) - new Date(a.date))[0];

            if (last) {
                last.exercises
                    .filter(ex => { const d = exercises.find(e => e.id === ex.exerciseId); return d && bps.includes(d.bodyPart); })
                    .forEach(ex => {
                        const d = exercises.find(e => e.id === ex.exerciseId);
                        if (!d) return;
                        if (!currentWorkout.bodyParts.includes(d.bodyPart)) currentWorkout.bodyParts.push(d.bodyPart);
                        currentWorkout.exercises.push({ exerciseId: ex.exerciseId, sets: [getDefaultSet(d.type||'strength')] });
                    });
            } else {
                bps.forEach(bp => { if (!currentWorkout.bodyParts.includes(bp)) currentWorkout.bodyParts.push(bp); });
            }
        }
    }

    startWorkoutTimer();
    showScreen('workout-screen');
    renderWorkoutScreen();
}

// ── Screen routing ────────────────────────────────────────────────────────────
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const nav = document.querySelector(`[data-screen="${screenId}"]`);
    if (nav) nav.classList.add('active');
    if (screenId === 'home-screen')     renderHome();
    if (screenId === 'history-screen')  renderHistory();
    if (screenId === 'progress-screen') renderProgress();
    if (screenId === 'library-screen')  renderLibrary();
    if (screenId === 'workout-screen' && currentWorkout) renderActiveExercises();
}

// ── Home ──────────────────────────────────────────────────────────────────────
function renderHome() {
    document.getElementById('today-date').textContent = formatFullDate(new Date().toISOString().split('T')[0]);
    document.getElementById('home-total').textContent = workoutHistory.length;
    document.getElementById('home-streak').textContent = getCurrentStreak();
    renderLastWorkout();
    renderBodyPartsStatus();
}

function renderLastWorkout() {
    const c = document.getElementById('last-workout');
    if (!workoutHistory.length) { c.classList.add('empty'); c.innerHTML = '<p>No workouts yet</p>'; return; }
    c.classList.remove('empty');
    const last = [...workoutHistory].sort((a,b) => new Date(b.date) - new Date(a.date))[0];
    const durationStr = last.duration ? ` · ${Math.round(last.duration/60)}min` : '';
    c.innerHTML = `
        <div class="last-workout-header">
            <div>
                <span class="last-workout-date">${formatDate(last.date)}</span>
                <span class="last-workout-meta">${durationStr}</span>
            </div>
            <div class="last-workout-body-parts">${last.bodyParts.map(bp => BODY_PARTS.find(b => b.id === bp)?.icon||'').join('')}</div>
        </div>
        <div class="last-workout-exercises">
            ${last.exercises.slice(0,5).map(ex => {
                const d = exercises.find(e => e.id === ex.exerciseId);
                const type = d?.type || 'strength';
                return `<div class="last-workout-exercise">
                    <span class="last-workout-exercise-name">${d?.name||'Unknown'}</span>
                    <span class="last-workout-exercise-details">${ex.sets.length} sets · ${getExerciseQuickStat(ex, type)}</span>
                </div>`;
            }).join('')}
            ${last.exercises.length > 5 ? `<p style="color:var(--text-muted);font-size:12px">+${last.exercises.length - 5} more</p>` : ''}
        </div>`;
}

function renderBodyPartsStatus() {
    const c = document.getElementById('body-parts-status');
    c.innerHTML = BODY_PARTS.map(bp => {
        const last = getLastTrainedDateByBodyPart(bp.id);
        const ago  = last ? getDaysAgo(last) : 'Never';
        const cls  = last === new Date().toISOString().split('T')[0] ? 'today'
                   : (last && getDaysAgo(last) === 'Yesterday' ? 'days-ago' : '');
        return `<div class="body-part-item" data-body-part="${bp.id}">
            <span class="icon">${bp.icon}</span>
            <span class="name">${bp.name}</span>
            <span class="last-trained ${cls}">${ago}</span>
        </div>`;
    }).join('');
}

// ── Workout screen ─────────────────────────────────────────────────────────────
function renderWorkoutScreen() {
    renderBodyPartTabs();
    renderWorkoutExercises();
    renderActiveExercises();
    updateActiveBodyParts();
}

function renderBodyPartTabs() {
    const c = document.getElementById('workout-body-part-tabs');
    c.innerHTML = `<button class="body-part-tab ${activeBodyPartFilter==='all'?'active':''}" data-filter="all">All</button>
        ${BODY_PARTS.map(bp => `<button class="body-part-tab ${activeBodyPartFilter===bp.id?'active':''}" data-filter="${bp.id}"><span class="tab-icon">${bp.icon}</span></button>`).join('')}`;
    c.querySelectorAll('.body-part-tab').forEach(t => t.addEventListener('click', () => {
        activeBodyPartFilter = t.dataset.filter; renderBodyPartTabs(); renderWorkoutExercises();
    }));
}

function renderWorkoutExercises() {
    const c = document.getElementById('workout-exercise-list');
    const filtered = activeBodyPartFilter === 'all' ? exercises : exercises.filter(e => e.bodyPart === activeBodyPartFilter);
    c.innerHTML = filtered.map(ex => {
        const bp = BODY_PARTS.find(b => b.id === ex.bodyPart);
        const added = currentWorkout?.exercises.some(e => e.exerciseId === ex.id);
        return `<div class="exercise-item" data-exercise-id="${ex.id}">
            <div>
                <div class="exercise-name-row"><span class="name">${ex.name}</span>${getTypeBadge(ex.type||'strength')}</div>
                <span class="body-part-tag">${bp?.icon} ${bp?.name}</span>
            </div>
            ${added
                ? `<span class="added-check"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20,6 9,17 4,12"/></svg></span>`
                : `<button class="add-btn exercise-add-btn" data-exercise-id="${ex.id}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg></button>`}
        </div>`;
    }).join('');
    c.querySelectorAll('.exercise-add-btn').forEach(btn =>
        btn.addEventListener('click', e => { e.stopPropagation(); addExerciseToWorkout(btn.dataset.exerciseId); }));
}

function addExerciseToWorkout(exerciseId) {
    if (currentWorkout.exercises.some(e => e.exerciseId === exerciseId)) return;
    const ex = exercises.find(e => e.id === exerciseId);
    if (ex && !currentWorkout.bodyParts.includes(ex.bodyPart)) currentWorkout.bodyParts.push(ex.bodyPart);
    currentWorkout.exercises.push({ exerciseId, sets: [getDefaultSet(ex?.type||'strength')] });
    renderWorkoutScreen();
}

function updateActiveBodyParts() {
    document.getElementById('active-body-parts').innerHTML = currentWorkout.bodyParts.map(bp => {
        const d = BODY_PARTS.find(b => b.id === bp);
        return `<span class="bp-icon" title="${d?.name}">${d?.icon||''}</span>`;
    }).join('');
}

function renderActiveExercises() {
    const c = document.getElementById('active-exercises-list');
    const empty = document.getElementById('empty-exercises');
    if (!currentWorkout.exercises.length) { c.innerHTML = ''; empty.style.display = 'block'; return; }
    empty.style.display = 'none';
    c.innerHTML = currentWorkout.exercises.map((ex, idx) => {
        const d    = exercises.find(e => e.id === ex.exerciseId);
        const bp   = BODY_PARTS.find(b => b.id === d?.bodyPart);
        const type = d?.type || 'strength';
        let setsLabel = '', detail = '';
        switch (type) {
            case 'cardio': {
                const dist = ex.sets.reduce((s,r) => s+(parseFloat(r.distance)||0), 0);
                const time = ex.sets.reduce((s,r) => s+(parseFloat(r.duration)||0), 0);
                setsLabel = `${ex.sets.length} sets`; detail = `${dist.toFixed(1)}km · ${time}min`; break;
            }
            case 'bodyweight': {
                const done = ex.sets.filter(s=>s.reps).length;
                const max  = Math.max(...ex.sets.map(s=>parseInt(s.reps)||0), 0);
                setsLabel = `${done}/${ex.sets.length} sets`; detail = `Best: ${max} reps`; break;
            }
            case 'duration': {
                const time = ex.sets.reduce((s,r) => s+(parseFloat(r.duration)||0), 0);
                setsLabel = `${ex.sets.length} sets`; detail = `${time} min`; break;
            }
            default: {
                const done = ex.sets.filter(s=>s.weight&&s.reps).length;
                const best = ex.sets.reduce((b,s) => { const w=parseFloat(s.weight)||0; return w>b.weight?{weight:w,reps:s.reps}:b; }, {weight:0,reps:0});
                setsLabel = `${done}/${ex.sets.length} sets`; detail = `Best: ${best.weight}kg × ${best.reps}`; break;
            }
        }
        return `<div class="active-exercise-card" data-index="${idx}">
            <div class="active-exercise-header">
                <span class="active-exercise-name"><span class="ex-icon">${bp?.icon||''}</span><span>${d?.name||'Unknown'}</span></span>
                <span class="active-exercise-sets">${setsLabel}</span>
            </div>
            <div class="active-sets-summary"><span>${detail}</span></div>
        </div>`;
    }).join('');
    c.querySelectorAll('.active-exercise-card').forEach(card =>
        card.addEventListener('click', () => { currentExerciseIndex = +card.dataset.index; showExerciseDetail(); }));
}

// ── Exercise detail ───────────────────────────────────────────────────────────
function showExerciseDetail() {
    const ex     = currentWorkout.exercises[currentExerciseIndex];
    const exData = exercises.find(e => e.id === ex.exerciseId);
    const bp     = BODY_PARTS.find(b => b.id === exData?.bodyPart);
    const type   = exData?.type || 'strength';
    document.getElementById('exercise-detail-title').textContent = exData?.name || 'Exercise';
    document.getElementById('exercise-body-part').innerHTML =
        `<span class="badge-icon">${bp?.icon||''}</span> ${bp?.name||''} ${getTypeBadge(type)}`;
    showScreen('exercise-screen');
    renderPrevSessionCard(ex.exerciseId, type);
    renderExerciseSets();
    renderVideoLinkSection(ex.exerciseId);
}

function getTableHeaders(type) {
    switch (type) {
        case 'cardio':     return ['Set', 'Duration (min)', 'Distance (km)', ''];
        case 'bodyweight': return ['Set', 'Reps', ''];
        case 'duration':   return ['Set', 'Duration (min)', ''];
        default:           return ['Set', 'Weight (kg)', 'Reps', ''];
    }
}

function renderSetInputs(set, i, type) {
    switch (type) {
        case 'cardio':
            return `<td><input type="number" class="set-duration" data-index="${i}" value="${set.duration||''}" placeholder="0" inputmode="decimal"></td>
                    <td><input type="number" class="set-distance" data-index="${i}" value="${set.distance||''}" placeholder="0.0" inputmode="decimal"></td>`;
        case 'bodyweight':
            return `<td><input type="number" class="set-reps" data-index="${i}" value="${set.reps||''}" placeholder="0" inputmode="numeric"></td>`;
        case 'duration':
            return `<td><input type="number" class="set-duration" data-index="${i}" value="${set.duration||''}" placeholder="0" inputmode="decimal"></td>`;
        default:
            return `<td><input type="number" class="set-weight" data-index="${i}" value="${set.weight||''}" placeholder="0" inputmode="decimal"></td>
                    <td><input type="number" class="set-reps" data-index="${i}" value="${set.reps||''}" placeholder="0" inputmode="numeric"></td>`;
    }
}

function renderExerciseSets() {
    const ex     = currentWorkout.exercises[currentExerciseIndex];
    const exData = exercises.find(e => e.id === ex.exerciseId);
    const type   = exData?.type || 'strength';

    document.getElementById('sets-table-head').innerHTML =
        `<tr>${getTableHeaders(type).map(h => `<th>${h}</th>`).join('')}</tr>`;

    const tbody = document.getElementById('sets-tbody');
    tbody.innerHTML = ex.sets.map((set, i) => `<tr>
        <td>${i+1}</td>
        ${renderSetInputs(set, i, type)}
        <td>${ex.sets.length > 1
            ? `<button class="remove-set-btn" data-index="${i}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg></button>`
            : ''}</td>
    </tr>`).join('');

    const bind = (cls, field) => tbody.querySelectorAll(cls).forEach(inp => inp.addEventListener('change', e => {
        const i = +e.target.dataset.index;
        currentWorkout.exercises[currentExerciseIndex].sets[i][field] = e.target.value;
        updateSetSummary();
        checkForNewPR(ex.exerciseId, currentWorkout.exercises[currentExerciseIndex].sets[i], type);
    }));
    bind('.set-weight',   'weight');
    bind('.set-reps',     'reps');
    bind('.set-duration', 'duration');
    bind('.set-distance', 'distance');

    tbody.querySelectorAll('.remove-set-btn').forEach(btn => btn.addEventListener('click', () => {
        currentWorkout.exercises[currentExerciseIndex].sets.splice(+btn.dataset.index, 1);
        renderExerciseSets();
    }));
    updateSetSummary();
}

function updateSetSummary() {
    const ex   = currentWorkout.exercises[currentExerciseIndex];
    const type = getExerciseType(ex.exerciseId);
    switch (type) {
        case 'cardio': {
            const dist = ex.sets.reduce((s,r) => s+(parseFloat(r.distance)||0), 0);
            const time = ex.sets.reduce((s,r) => s+(parseFloat(r.duration)||0), 0);
            document.getElementById('total-sets').textContent   = `${ex.sets.length} sets`;
            document.getElementById('total-volume').textContent = `${dist.toFixed(1)} km · ${time} min`;
            break;
        }
        case 'bodyweight': {
            const tot = ex.sets.reduce((s,r) => s+(parseInt(r.reps)||0), 0);
            document.getElementById('total-sets').textContent   = `${ex.sets.length} sets`;
            document.getElementById('total-volume').textContent = `${tot} total reps`;
            break;
        }
        case 'duration': {
            const time = ex.sets.reduce((s,r) => s+(parseFloat(r.duration)||0), 0);
            document.getElementById('total-sets').textContent   = `${ex.sets.length} sets`;
            document.getElementById('total-volume').textContent = `${time} min total`;
            break;
        }
        default: {
            const done = ex.sets.filter(s=>s.weight&&s.reps).length;
            const vol  = ex.sets.reduce((s,r) => s+(parseFloat(r.weight)||0)*(parseInt(r.reps)||0), 0);
            document.getElementById('total-sets').textContent   = `${done} sets`;
            document.getElementById('total-volume').textContent = `${vol} kg vol`;
        }
    }
}

function addNewSet() {
    const ex   = currentWorkout.exercises[currentExerciseIndex];
    const type = getExerciseType(ex.exerciseId);
    const last = ex.sets[ex.sets.length - 1];
    ex.sets.push({ ...getDefaultSet(type), ...last });
    renderExerciseSets();
}

function finishWorkout() {
    if (!currentWorkout.exercises.length) { alert('Add at least one exercise!'); return; }
    currentWorkout.duration = stopWorkoutTimer();
    const idx = workoutHistory.findIndex(w => w.id === currentWorkout.id);
    if (idx >= 0) workoutHistory[idx] = { ...currentWorkout };
    else workoutHistory.push({ ...currentWorkout });
    saveWorkoutHistory();
    currentWorkout = null;
    alert('Workout saved! 💪');
    showScreen('home-screen');
}

// ── History ────────────────────────────────────────────────────────────────────
function renderHistory() {
    const c = document.getElementById('history-list');
    if (!workoutHistory.length) { c.innerHTML = '<div class="empty-state">No workouts yet</div>'; return; }
    const sorted = [...workoutHistory].sort((a,b) => new Date(b.date) - new Date(a.date));
    c.innerHTML = sorted.map(w => `
        <div class="history-item">
            <div class="history-header">
                <div>
                    <span class="history-date">${formatFullDate(w.date)}</span>
                    ${w.duration ? `<span class="history-duration">${Math.round(w.duration/60)}min</span>` : ''}
                </div>
                <div class="history-body-parts">${w.bodyParts.map(bp => BODY_PARTS.find(b=>b.id===bp)?.icon||'').join('')}</div>
            </div>
            <div class="history-exercises">${w.exercises.map(ex => {
                const d = exercises.find(e => e.id === ex.exerciseId);
                const type = d?.type || 'strength';
                return `<div class="history-exercise">
                    <span class="history-exercise-name">${d?.name||'Unknown'} ${getTypeBadge(type)}</span>
                    <span class="history-exercise-stats">${ex.sets.length} sets · ${getExerciseQuickStat(ex, type)}</span>
                </div>`;
            }).join('')}</div>
        </div>`).join('');
}

// ── Progress ───────────────────────────────────────────────────────────────────
function renderProgress() {
    const picker = document.getElementById('exercise-picker');
    picker.innerHTML = `<select id="progress-exercise-select">
        ${exercises.map(ex => { const bp = BODY_PARTS.find(b=>b.id===ex.bodyPart); return `<option value="${ex.id}">${bp?.name} · ${ex.name}</option>`; }).join('')}
    </select>`;
    document.getElementById('progress-exercise-select').addEventListener('change', renderExerciseProgress);
    renderExerciseProgress();
}

function renderExerciseProgress() {
    const id   = document.getElementById('progress-exercise-select').value;
    const c    = document.getElementById('progress-content');
    const exData = exercises.find(e => e.id === id);
    const bp   = BODY_PARTS.find(b => b.id === exData?.bodyPart);
    const type = exData?.type || 'strength';
    const hist = workoutHistory.filter(w => w.exercises.some(e => e.exerciseId === id)).sort((a,b) => new Date(a.date)-new Date(b.date));
    if (!hist.length) {
        c.innerHTML = `<div class="progress-header">${bp?.icon} ${exData?.name} ${getTypeBadge(type)}</div><div class="empty-state">No history yet</div>`;
        return;
    }
    let statsHtml = '', rowsHtml = '';
    switch (type) {
        case 'strength': {
            const sets = hist.flatMap(w => { const ex=w.exercises.find(e=>e.exerciseId===id); return ex.sets.filter(s=>s.weight&&s.reps).map(s=>({date:w.date,weight:parseFloat(s.weight),reps:parseInt(s.reps)})); });
            const maxW = Math.max(...sets.map(s=>s.weight),0), vol = sets.reduce((s,r)=>s+r.weight*r.reps,0);
            statsHtml = `<div class="progress-stat"><div class="progress-stat-value">${maxW}</div><div class="progress-stat-label">Max (kg)</div></div>
                         <div class="progress-stat"><div class="progress-stat-value">${vol}</div><div class="progress-stat-label">Volume (kg)</div></div>
                         <div class="progress-stat"><div class="progress-stat-value">${hist.length}</div><div class="progress-stat-label">Sessions</div></div>`;
            rowsHtml = sets.slice(-20).reverse().map(s=>`<div class="progress-row"><span>${formatDate(s.date)}</span><span>${s.weight}kg × ${s.reps}</span></div>`).join('');
            break;
        }
        case 'cardio': {
            const sets = hist.flatMap(w => { const ex=w.exercises.find(e=>e.exerciseId===id); return ex.sets.map(s=>({date:w.date,duration:parseFloat(s.duration)||0,distance:parseFloat(s.distance)||0})); });
            const maxD = Math.max(...sets.map(s=>s.distance),0), totD = sets.reduce((s,r)=>s+r.distance,0);
            statsHtml = `<div class="progress-stat"><div class="progress-stat-value">${maxD.toFixed(1)}</div><div class="progress-stat-label">Max (km)</div></div>
                         <div class="progress-stat"><div class="progress-stat-value">${totD.toFixed(1)}</div><div class="progress-stat-label">Total (km)</div></div>
                         <div class="progress-stat"><div class="progress-stat-value">${hist.length}</div><div class="progress-stat-label">Sessions</div></div>`;
            rowsHtml = sets.slice(-20).reverse().map(s=>`<div class="progress-row"><span>${formatDate(s.date)}</span><span>${s.distance}km / ${s.duration}min</span></div>`).join('');
            break;
        }
        case 'bodyweight': {
            const sets = hist.flatMap(w => { const ex=w.exercises.find(e=>e.exerciseId===id); return ex.sets.filter(s=>s.reps).map(s=>({date:w.date,reps:parseInt(s.reps)})); });
            const maxR = Math.max(...sets.map(s=>s.reps),0), totR = sets.reduce((s,r)=>s+r.reps,0);
            statsHtml = `<div class="progress-stat"><div class="progress-stat-value">${maxR}</div><div class="progress-stat-label">Max Reps</div></div>
                         <div class="progress-stat"><div class="progress-stat-value">${totR}</div><div class="progress-stat-label">Total Reps</div></div>
                         <div class="progress-stat"><div class="progress-stat-value">${hist.length}</div><div class="progress-stat-label">Sessions</div></div>`;
            rowsHtml = sets.slice(-20).reverse().map(s=>`<div class="progress-row"><span>${formatDate(s.date)}</span><span>${s.reps} reps</span></div>`).join('');
            break;
        }
        case 'duration': {
            const sets = hist.flatMap(w => { const ex=w.exercises.find(e=>e.exerciseId===id); return ex.sets.filter(s=>s.duration).map(s=>({date:w.date,duration:parseFloat(s.duration)})); });
            const maxT = Math.max(...sets.map(s=>s.duration),0), totT = sets.reduce((s,r)=>s+r.duration,0);
            statsHtml = `<div class="progress-stat"><div class="progress-stat-value">${maxT}</div><div class="progress-stat-label">Max (min)</div></div>
                         <div class="progress-stat"><div class="progress-stat-value">${totT}</div><div class="progress-stat-label">Total (min)</div></div>
                         <div class="progress-stat"><div class="progress-stat-value">${hist.length}</div><div class="progress-stat-label">Sessions</div></div>`;
            rowsHtml = sets.slice(-20).reverse().map(s=>`<div class="progress-row"><span>${formatDate(s.date)}</span><span>${s.duration} min</span></div>`).join('');
            break;
        }
    }
    c.innerHTML = `<div class="progress-header">${bp?.icon} ${exData?.name} ${getTypeBadge(type)}</div>
        <div class="progress-stats">${statsHtml}</div>
        <h4 class="progress-recent-label">Recent</h4>
        <div class="progress-recent">${rowsHtml}</div>`;
}

// ── Library ───────────────────────────────────────────────────────────────────
function renderLibrary() {
    renderLibraryTabs(); renderLibraryList();
    document.getElementById('exercise-body-part-select').innerHTML = BODY_PARTS.map(bp => `<option value="${bp.id}">${bp.name}</option>`).join('');
}

function renderLibraryTabs() {
    const c = document.getElementById('library-body-part-tabs');
    c.innerHTML = `<button class="body-part-tab active" data-filter="all">All</button>
        ${BODY_PARTS.map(bp=>`<button class="body-part-tab" data-filter="${bp.id}"><span class="tab-icon">${bp.icon}</span></button>`).join('')}`;
    c.querySelectorAll('.body-part-tab').forEach(t => t.addEventListener('click', () => {
        c.querySelectorAll('.body-part-tab').forEach(x => x.classList.remove('active'));
        t.classList.add('active'); renderLibraryList(t.dataset.filter);
    }));
}

function renderLibraryList(filter = 'all') {
    const c = document.getElementById('library-exercise-list');
    const list = filter === 'all' ? exercises : exercises.filter(e => e.bodyPart === filter);
    c.innerHTML = list.map(ex => {
        const bp = BODY_PARTS.find(b => b.id === ex.bodyPart);
        return `<div class="exercise-item"><div>
            <div class="exercise-name-row"><span class="name">${ex.name}</span>${getTypeBadge(ex.type||'strength')}</div>
            <span class="body-part-tag">${bp?.icon} ${bp?.name}</span>
        </div></div>`;
    }).join('');
}

// ── Add Exercise Modal ────────────────────────────────────────────────────────
function showAddExerciseModal() { document.getElementById('add-exercise-modal').classList.remove('hidden'); }
function hideAddExerciseModal() { document.getElementById('add-exercise-modal').classList.add('hidden'); document.getElementById('new-exercise-form').reset(); }

function addNewExercise(e) {
    e.preventDefault();
    const name     = document.getElementById('exercise-name').value.trim();
    const bodyPart = document.getElementById('exercise-body-part-select').value;
    const type     = document.getElementById('exercise-type-select').value;
    if (!name) return;
    exercises.push({ id: name.toLowerCase().replace(/\s+/g,'-') + '-' + generateId(), name, bodyPart, type });
    saveExercises(); hideAddExerciseModal(); renderLibrary();
}

// ── Seed data ─────────────────────────────────────────────────────────────────
function importInitialData() {
    if (workoutHistory.length) return;
    workoutHistory = [
        { id: generateId(), date: '2026-04-01', bodyParts: ['chest','triceps'], exercises: [
            { exerciseId: 'bench-press',     sets: [{weight:20,reps:10},{weight:25,reps:8},{weight:27.5,reps:6}] },
            { exerciseId: 'incline-press',   sets: [{weight:17.5,reps:10},{weight:20,reps:8}] },
            { exerciseId: 'pec-fly',         sets: [{weight:25,reps:12},{weight:30,reps:10}] },
            { exerciseId: 'tricep-pushdown', sets: [{weight:35,reps:12},{weight:40,reps:10}] },
            { exerciseId: 'tricep-overhead', sets: [{weight:25,reps:10},{weight:30,reps:8}] }
        ]},
        { id: generateId(), date: '2026-04-02', bodyParts: ['back','biceps'], exercises: [
            { exerciseId: 'lat-pulldown',        sets: [{weight:50,reps:10},{weight:55,reps:8},{weight:50,reps:6}] },
            { exerciseId: 'barbell-row',         sets: [{weight:40,reps:10},{weight:45,reps:8}] },
            { exerciseId: 'close-grip-pulldown', sets: [{weight:35,reps:12},{weight:40,reps:10}] },
            { exerciseId: 'bicep-curl',          sets: [{weight:15,reps:12},{weight:17.5,reps:10}] },
            { exerciseId: 'hammer-curl',         sets: [{weight:12.5,reps:12},{weight:15,reps:10}] }
        ]},
        { id: generateId(), date: '2026-04-03', bodyParts: ['legs'], exercises: [
            { exerciseId: 'squat',         sets: [{weight:30,reps:10},{weight:40,reps:8},{weight:45,reps:6}] },
            { exerciseId: 'leg-extension', sets: [{weight:60,reps:12},{weight:70,reps:10}] },
            { exerciseId: 'leg-curl',      sets: [{weight:50,reps:12},{weight:60,reps:10}] },
            { exerciseId: 'calf-raise',    sets: [{weight:40,reps:15},{weight:50,reps:12}] }
        ]},
    ];
    saveWorkoutHistory();
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    importInitialData();
    migrateData();

    document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => showScreen(btn.dataset.screen)));
    document.getElementById('start-workout-btn').addEventListener('click', openWorkoutStartModal);
    document.getElementById('cancel-start-modal').addEventListener('click', () => document.getElementById('workout-start-modal').classList.add('hidden'));
    document.getElementById('confirm-start-modal').addEventListener('click', confirmWorkoutStart);
    document.getElementById('workout-start-modal').addEventListener('click', e => { if (e.target.id === 'workout-start-modal') document.getElementById('workout-start-modal').classList.add('hidden'); });

    document.getElementById('back-to-home').addEventListener('click', () => {
        if (currentWorkout?.exercises.length) {
            if (confirm('Save workout before leaving?')) finishWorkout();
            else { stopWorkoutTimer(); currentWorkout = null; showScreen('home-screen'); }
        } else { stopWorkoutTimer(); currentWorkout = null; showScreen('home-screen'); }
    });
    document.getElementById('finish-workout-btn').addEventListener('click', finishWorkout);
    document.getElementById('back-to-workout').addEventListener('click', () => showScreen('workout-screen'));
    document.getElementById('add-set-btn').addEventListener('click', addNewSet);
    document.getElementById('back-home-from-history').addEventListener('click',  () => showScreen('home-screen'));
    document.getElementById('back-home-from-progress').addEventListener('click', () => showScreen('home-screen'));
    document.getElementById('back-home-from-library').addEventListener('click',  () => showScreen('home-screen'));
    document.getElementById('add-exercise-btn').addEventListener('click',    showAddExerciseModal);
    document.getElementById('cancel-add-exercise').addEventListener('click', hideAddExerciseModal);
    document.getElementById('new-exercise-form').addEventListener('submit',  addNewExercise);
    document.getElementById('add-exercise-modal').addEventListener('click', e => { if (e.target.id === 'add-exercise-modal') hideAddExerciseModal(); });

    renderHome();
});
