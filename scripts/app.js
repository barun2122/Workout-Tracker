const BODY_PARTS = [
    { id: 'chest', name: 'Chest', icon: '🫁' },
    { id: 'back', name: 'Back', icon: '🔙' },
    { id: 'shoulders', name: 'Shoulders', icon: '👆' },
    { id: 'biceps', name: 'Biceps', icon: '💪' },
    { id: 'triceps', name: 'Triceps', icon: '🦾' },
    { id: 'legs', name: 'Legs', icon: '🦵' },
    { id: 'core', name: 'Core', icon: '🎯' },
    { id: 'cardio', name: 'Cardio', icon: '❤️' }
];

const DEFAULT_EXERCISES = [
    { id: 'bench-press', name: 'Bench Press', bodyPart: 'chest' },
    { id: 'incline-press', name: 'Incline Bench Press', bodyPart: 'chest' },
    { id: 'dumbbell-fly', name: 'Dumbbell Fly', bodyPart: 'chest' },
    { id: 'cable-crossover', name: 'Cable Crossover', bodyPart: 'chest' },
    { id: 'push-up', name: 'Push Up', bodyPart: 'chest' },
    { id: 'chest-press', name: 'Chest Press', bodyPart: 'chest' },
    { id: 'pec-fly', name: 'Pec Fly', bodyPart: 'chest' },
    { id: 'cable-press', name: 'Cable Press', bodyPart: 'chest' },
    { id: 'incline-dumbbell', name: 'Incline Dumbbell Press', bodyPart: 'chest' },
    { id: 'cable-mid', name: 'Cable Mid Fly', bodyPart: 'chest' },
    { id: 'upper-pec', name: 'Upper Pec Fly', bodyPart: 'chest' },
    { id: 'lower-pec', name: 'Lower Pec Fly', bodyPart: 'chest' },
    { id: 'cable-decline', name: 'Cable Decline Fly', bodyPart: 'chest' },
    { id: 'pull-up', name: 'Pull Up', bodyPart: 'back' },
    { id: 'deadlift', name: 'Deadlift', bodyPart: 'back' },
    { id: 'lat-pulldown', name: 'Lat Pulldown', bodyPart: 'back' },
    { id: 'barbell-row', name: 'Barbell Row', bodyPart: 'back' },
    { id: 'seated-row', name: 'Seated Cable Row', bodyPart: 'back' },
    { id: 'horizontal-rows', name: 'Horizontal Rows', bodyPart: 'back' },
    { id: 'close-grip-pulldown', name: 'Close Grip Lat Pulldown', bodyPart: 'back' },
    { id: 'lower-back', name: 'Lower Back', bodyPart: 'back' },
    { id: 'rows', name: 'Rows', bodyPart: 'back' },
    { id: 'overhead-press', name: 'Overhead Press', bodyPart: 'shoulders' },
    { id: 'shoulder-press', name: 'Shoulder Press', bodyPart: 'shoulders' },
    { id: 'lateral-raise', name: 'Lateral Raise', bodyPart: 'shoulders' },
    { id: 'front-raise', name: 'Front Raise', bodyPart: 'shoulders' },
    { id: 'face-pull', name: 'Face Pull', bodyPart: 'shoulders' },
    { id: 'reverse-fly', name: 'Reverse Fly', bodyPart: 'shoulders' },
    { id: 'bicep-curl', name: 'Bicep Curl', bodyPart: 'biceps' },
    { id: 'hammer-curl', name: 'Hammer Curl', bodyPart: 'biceps' },
    { id: 'preacher-curl', name: 'Preacher Curl', bodyPart: 'biceps' },
    { id: 'concentration-curl', name: 'Concentration Curl', bodyPart: 'biceps' },
    { id: 'spider-curl', name: 'Spider Curl', bodyPart: 'biceps' },
    { id: 'barbell-curl', name: 'Barbell Curl', bodyPart: 'biceps' },
    { id: 'tricep-pushdown', name: 'Tricep Pushdown', bodyPart: 'triceps' },
    { id: 'skull-crusher', name: 'Skull Crusher', bodyPart: 'triceps' },
    { id: 'tricep-dip', name: 'Tricep Dip', bodyPart: 'triceps' },
    { id: 'close-grip-press', name: 'Close Grip Bench Press', bodyPart: 'triceps' },
    { id: 'tricep-overhead', name: 'Tricep Overhead', bodyPart: 'triceps' },
    { id: 'rope-pushdown', name: 'Rope Pushdown', bodyPart: 'triceps' },
    { id: 'squat', name: 'Squat', bodyPart: 'legs' },
    { id: 'leg-press', name: 'Leg Press', bodyPart: 'legs' },
    { id: 'leg-extension', name: 'Leg Extension', bodyPart: 'legs' },
    { id: 'leg-curl', name: 'Leg Curl', bodyPart: 'legs' },
    { id: 'calf-raise', name: 'Calf Raise', bodyPart: 'legs' },
    { id: 'lunges', name: 'Lunges', bodyPart: 'legs' },
    { id: 'romanian-deadlift', name: 'Romanian Deadlift', bodyPart: 'legs' },
    { id: 'machine-squat', name: 'Machine Squat', bodyPart: 'legs' },
    { id: 'hamstring-curl', name: 'Hamstring Curl', bodyPart: 'legs' },
    { id: 'shrugs', name: 'Shrugs', bodyPart: 'legs' },
    { id: 'plank', name: 'Plank', bodyPart: 'core' },
    { id: 'crunch', name: 'Crunch', bodyPart: 'core' },
    { id: 'russian-twist', name: 'Russian Twist', bodyPart: 'core' },
    { id: 'leg-raise', name: 'Leg Raise', bodyPart: 'core' },
    { id: 'cable-crunch', name: 'Cable Crunch', bodyPart: 'core' },
    { id: 'abs', name: 'Abs', bodyPart: 'core' },
    { id: 'forearms', name: 'Forearms', bodyPart: 'biceps' },
    { id: 'running', name: 'Running', bodyPart: 'cardio' },
    { id: 'cycling', name: 'Cycling', bodyPart: 'cardio' },
    { id: 'rowing', name: 'Rowing', bodyPart: 'cardio' },
    { id: 'jump-rope', name: 'Jump Rope', bodyPart: 'cardio' },
    { id: 'stair-climber', name: 'Stair Climber', bodyPart: 'cardio' }
];

let exercises = JSON.parse(localStorage.getItem('exercises')) || [...DEFAULT_EXERCISES];
let workoutHistory = JSON.parse(localStorage.getItem('workoutHistory')) || [];
let currentWorkout = null;
let activeQuickAddFilter = 'all';

function saveExercises() {
    localStorage.setItem('exercises', JSON.stringify(exercises));
}

function saveWorkoutHistory() {
    localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function getDaysAgo(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    const diff = Math.floor((today - date) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    return `${diff} days ago`;
}

function getLastTrainedDate(exerciseId) {
    const workouts = workoutHistory.filter(w =>
        w.exercises.some(e => e.exerciseId === exerciseId)
    );
    if (workouts.length === 0) return null;
    return workouts.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date;
}

function getLastTrainedDateByBodyPart(bodyPart) {
    const workouts = workoutHistory.filter(w =>
        w.bodyParts.includes(bodyPart)
    );
    if (workouts.length === 0) return null;
    return workouts.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date;
}

function getTodayTrainedBodyParts() {
    const today = new Date().toISOString().split('T')[0];
    const todayWorkout = workoutHistory.find(w => w.date === today);
    return todayWorkout ? todayWorkout.bodyParts : [];
}

function getCurrentStreak() {
    if (workoutHistory.length === 0) return 0;
    
    const sortedWorkouts = [...workoutHistory].sort((a, b) => new Date(b.date) - new Date(a.date));
    const uniqueDates = [...new Set(sortedWorkouts.map(w => w.date))].sort().reverse();
    
    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    for (const dateStr of uniqueDates) {
        const workoutDate = new Date(dateStr);
        workoutDate.setHours(0, 0, 0, 0);
        
        const diff = Math.floor((currentDate - workoutDate) / (1000 * 60 * 60 * 24));
        
        if (diff <= 1) {
            streak++;
            currentDate = workoutDate;
        } else {
            break;
        }
    }
    
    return streak;
}

function getWeeklyActivity() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const weekData = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const workout = workoutHistory.find(w => w.date === dateStr);
        
        weekData.push({
            day: days[date.getDay()],
            count: workout ? workout.exercises.length : 0
        });
    }
    
    return weekData;
}

function navigate(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(`${viewId}-view`).classList.add('active');
    document.querySelector(`[data-view="${viewId}"]`).classList.add('active');
    
    if (viewId === 'dashboard') renderDashboard();
    if (viewId === 'exercises') renderExercises();
    if (viewId === 'history') renderHistory();
    if (viewId === 'progress') renderProgress();
    if (viewId === 'workout') renderWorkout();
}

function renderDashboard() {
    document.getElementById('total-workouts').textContent = workoutHistory.length;
    document.getElementById('current-streak').textContent = getCurrentStreak();
    
    const todayTrained = getTodayTrainedBodyParts();
    const todayTrainedEl = document.getElementById('today-trained');
    todayTrainedEl.innerHTML = todayTrained.length > 0
        ? todayTrained.map(bp => BODY_PARTS.find(b => b.id === bp)?.icon || '').join('')
        : '<span style="font-size: 14px; color: var(--text-light);">Rest day</span>';
    
    const weekData = getWeeklyActivity();
    const maxCount = Math.max(...weekData.map(d => d.count), 1);
    const weeklyChart = document.getElementById('weekly-chart');
    weeklyChart.innerHTML = weekData.map(d => `
        <div class="day-bar">
            <div class="bar" style="height: ${(d.count / maxCount) * 120}px"></div>
            <span class="day-label">${d.day}</span>
        </div>
    `).join('');
    
    const bodyPartsLastTrained = document.getElementById('body-parts-last-trained');
    bodyPartsLastTrained.innerHTML = BODY_PARTS.map(bp => {
        const lastTrained = getLastTrainedDateByBodyPart(bp.id);
        const dateClass = lastTrained ? (getDaysAgo(lastTrained) === 'Today' ? 'days-ago' : '') : 'not-trained';
        return `
            <div class="last-trained-card">
                <span class="last-trained-icon">${bp.icon}</span>
                <div class="last-trained-info">
                    <span class="last-trained-name">${bp.name}</span>
                    <span class="last-trained-date ${dateClass}">${lastTrained ? getDaysAgo(lastTrained) : 'Never trained'}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderWorkout() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('workout-date').value = today;
    
    if (!currentWorkout) {
        document.getElementById('no-workout').classList.remove('hidden');
        document.getElementById('active-workout').classList.add('hidden');
        document.getElementById('finish-workout').disabled = true;
    } else {
        document.getElementById('no-workout').classList.add('hidden');
        document.getElementById('active-workout').classList.remove('hidden');
        document.getElementById('finish-workout').disabled = currentWorkout.exercises.length === 0;
        document.getElementById('workout-date-display').textContent = formatDate(currentWorkout.date);
        
        const bodyPartsIcons = currentWorkout.bodyParts.map(bp => {
            const bpData = BODY_PARTS.find(b => b.id === bp);
            return bpData ? bpData.icon : '';
        }).join('');
        document.getElementById('workout-body-parts').innerHTML = bodyPartsIcons || '<span style="font-size: 14px; color: var(--text-light);">No exercises added</span>';
        
        renderQuickAddExercises();
        renderActiveWorkout();
    }
}

function renderQuickAddExercises() {
    const tabsEl = document.getElementById('quick-add-tabs');
    tabsEl.innerHTML = `
        <button class="body-part-tab ${activeQuickAddFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
        ${BODY_PARTS.map(bp => `
            <button class="body-part-tab ${activeQuickAddFilter === bp.id ? 'active' : ''}" data-filter="${bp.id}">
                ${bp.icon}
            </button>
        `).join('')}
    `;
    
    tabsEl.querySelectorAll('.body-part-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            activeQuickAddFilter = tab.dataset.filter;
            renderQuickAddExercises();
        });
    });
    
    const filteredExercises = activeQuickAddFilter === 'all'
        ? exercises
        : exercises.filter(e => e.bodyPart === activeQuickAddFilter);
    
    const exercisesEl = document.getElementById('quick-add-exercises');
    exercisesEl.innerHTML = filteredExercises.map(ex => {
        const bp = BODY_PARTS.find(b => b.id === ex.bodyPart);
        const isAdded = currentWorkout?.exercises.some(e => e.exerciseId === ex.id);
        return `
            <div class="quick-add-item ${isAdded ? 'disabled' : ''}">
                <span>${ex.name}</span>
                <span class="body-part-tag">${bp?.icon} ${bp?.name}</span>
                ${!isAdded ? `<button class="btn btn-primary btn-small" data-exercise-id="${ex.id}">+</button>` : '<span style="color: var(--success)">✓</span>'}
            </div>
        `;
    }).join('');
    
    exercisesEl.querySelectorAll('.btn-small').forEach(btn => {
        btn.addEventListener('click', () => addExerciseToWorkout(btn.dataset.exerciseId));
    });
}

function addExerciseToWorkout(exerciseId) {
    if (!currentWorkout) return;
    
    if (currentWorkout.exercises.some(e => e.exerciseId === exerciseId)) return;
    
    const exercise = exercises.find(e => e.id === exerciseId);
    if (exercise && !currentWorkout.bodyParts.includes(exercise.bodyPart)) {
        currentWorkout.bodyParts.push(exercise.bodyPart);
    }
    
    currentWorkout.exercises.push({
        exerciseId,
        sets: [{ reps: '', weight: '' }]
    });
    
    renderWorkout();
}

function renderActiveWorkout() {
    const workoutLog = document.getElementById('workout-log');
    
    if (!currentWorkout || currentWorkout.exercises.length === 0) {
        workoutLog.innerHTML = '<p class="empty-state" style="padding: 20px;"><span>💪</span>Add exercises from above</p>';
        return;
    }
    
    workoutLog.innerHTML = currentWorkout.exercises.map((ex, exIndex) => {
        const exercise = exercises.find(e => e.id === ex.exerciseId);
        const bp = BODY_PARTS.find(b => b.id === exercise?.bodyPart);
        
        return `
            <div class="workout-exercise">
                <div class="workout-exercise-header">
                    <div class="workout-exercise-name">
                        <span>${bp?.icon || ''}</span>
                        <span>${exercise?.name || 'Unknown'}</span>
                    </div>
                    <button class="btn btn-danger btn-small remove-exercise" data-exercise-index="${exIndex}">Remove</button>
                </div>
                <table class="sets-table">
                    <thead>
                        <tr>
                            <th>Set</th>
                            <th>Weight (kg)</th>
                            <th>Reps</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ex.sets.map((set, setIndex) => `
                            <tr>
                                <td>${setIndex + 1}</td>
                                <td><input type="number" class="set-weight" data-exercise="${exIndex}" data-set="${setIndex}" value="${set.weight}" placeholder="kg"></td>
                                <td><input type="number" class="set-reps" data-exercise="${exIndex}" data-set="${setIndex}" value="${set.reps}" placeholder="reps"></td>
                                <td>
                                    ${ex.sets.length > 1 ? `<button class="btn btn-secondary btn-small remove-set" data-exercise="${exIndex}" data-set="${setIndex}">×</button>` : ''}
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <button class="btn btn-secondary add-set-btn" data-exercise-index="${exIndex}">+ Add Set</button>
            </div>
        `;
    }).join('');
    
    workoutLog.querySelectorAll('.remove-exercise').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.exerciseIndex);
            const removedExercise = currentWorkout.exercises[index];
            
            currentWorkout.exercises.splice(index, 1);
            
            const remainingBodyParts = new Set(currentWorkout.exercises.map(ex => {
                const exData = exercises.find(e => e.id === ex.exerciseId);
                return exData?.bodyPart;
            }));
            
            currentWorkout.bodyParts = [...remainingBodyParts];
            
            renderWorkout();
        });
    });
    
    workoutLog.querySelectorAll('.add-set-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const exIndex = parseInt(btn.dataset.exerciseIndex);
            const lastSet = currentWorkout.exercises[exIndex].sets[currentWorkout.exercises[exIndex].sets.length - 1];
            currentWorkout.exercises[exIndex].sets.push({
                reps: lastSet.reps || '',
                weight: lastSet.weight || ''
            });
            renderActiveWorkout();
        });
    });
    
    workoutLog.querySelectorAll('.remove-set').forEach(btn => {
        btn.addEventListener('click', () => {
            const exIndex = parseInt(btn.dataset.exercise);
            const setIndex = parseInt(btn.dataset.set);
            currentWorkout.exercises[exIndex].sets.splice(setIndex, 1);
            renderActiveWorkout();
        });
    });
    
    workoutLog.querySelectorAll('.set-weight').forEach(input => {
        input.addEventListener('change', (e) => {
            const exIndex = parseInt(e.target.dataset.exercise);
            const setIndex = parseInt(e.target.dataset.set);
            currentWorkout.exercises[exIndex].sets[setIndex].weight = e.target.value;
        });
    });
    
    workoutLog.querySelectorAll('.set-reps').forEach(input => {
        input.addEventListener('change', (e) => {
            const exIndex = parseInt(e.target.dataset.exercise);
            const setIndex = parseInt(e.target.dataset.set);
            currentWorkout.exercises[exIndex].sets[setIndex].reps = e.target.value;
        });
    });
}

function startNewWorkout() {
    const date = document.getElementById('workout-date').value;
    
    currentWorkout = {
        id: generateId(),
        date,
        bodyParts: [],
        exercises: []
    };
    
    activeQuickAddFilter = 'all';
    renderWorkout();
}

function finishWorkout() {
    if (!currentWorkout || currentWorkout.exercises.length === 0) {
        alert('Please add at least one exercise to your workout!');
        return;
    }
    
    workoutHistory.push(currentWorkout);
    saveWorkoutHistory();
    
    currentWorkout = null;
    
    alert('Workout saved successfully!');
    renderWorkout();
}

function renderExercises() {
    const tabsEl = document.getElementById('exercise-body-part-tabs');
    tabsEl.innerHTML = `
        <button class="body-part-tab active" data-filter="all">All</button>
        ${BODY_PARTS.map(bp => `
            <button class="body-part-tab" data-filter="${bp.id}">
                ${bp.icon} ${bp.name}
            </button>
        `).join('')}
    `;
    
    let activeFilter = 'all';
    tabsEl.querySelectorAll('.body-part-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            tabsEl.querySelectorAll('.body-part-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderExerciseList(tab.dataset.filter);
        });
    });
    
    renderExerciseList('all');
    
    const selectEl = document.getElementById('progress-exercise-select');
    selectEl.innerHTML = exercises.map(ex => {
        const bp = BODY_PARTS.find(b => b.id === ex.bodyPart);
        return `<option value="${ex.id}">${bp?.icon} ${ex.name}</option>`;
    }).join('');
}

function renderExerciseList(filter) {
    const filteredExercises = filter === 'all'
        ? exercises
        : exercises.filter(e => e.bodyPart === filter);
    
    const exerciseList = document.getElementById('exercise-list');
    
    if (filteredExercises.length === 0) {
        exerciseList.innerHTML = '<p class="empty-state"><span>📝</span>No exercises found</p>';
        return;
    }
    
    exerciseList.innerHTML = filteredExercises.map(ex => {
        const bp = BODY_PARTS.find(b => b.id === ex.bodyPart);
        const lastTrained = getLastTrainedDate(ex.id);
        const isDefault = DEFAULT_EXERCISES.some(d => d.id === ex.id);
        
        return `
            <div class="exercise-item">
                <div class="exercise-info">
                    <span class="exercise-name">${ex.name}</span>
                    <span class="exercise-body-part">${bp?.icon} ${bp?.name}</span>
                    ${lastTrained ? `<span class="last-trained-badge">Last: ${getDaysAgo(lastTrained)}</span>` : '<span class="last-trained-badge" style="color: var(--danger)">Never trained</span>'}
                </div>
                ${!isDefault ? `
                    <button class="delete-exercise-btn" data-exercise-id="${ex.id}">Delete</button>
                ` : ''}
            </div>
        `;
    }).join('');
    
    exerciseList.querySelectorAll('.delete-exercise-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Delete this exercise?')) {
                exercises = exercises.filter(e => e.id !== btn.dataset.exerciseId);
                saveExercises();
                renderExerciseList(filter);
            }
        });
    });
}

function renderHistory() {
    const historyList = document.getElementById('history-list');
    
    if (workoutHistory.length === 0) {
        historyList.innerHTML = '<p class="empty-state"><span>📭</span>No workouts yet. Start your first workout!</p>';
        return;
    }
    
    const sortedHistory = [...workoutHistory].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    historyList.innerHTML = sortedHistory.map(workout => `
        <div class="history-item">
            <div class="history-header">
                <span class="history-date">${formatDate(workout.date)}</span>
                <div class="history-body-parts">
                    ${workout.bodyParts.map(bp => {
                        const bpData = BODY_PARTS.find(b => b.id === bp);
                        return `<span title="${bpData?.name}">${bpData?.icon || ''}</span>`;
                    }).join('')}
                </div>
            </div>
            <div class="history-exercises">
                ${workout.exercises.map(ex => {
                    const exercise = exercises.find(e => e.id === ex.exerciseId);
                    const totalVolume = ex.sets.reduce((sum, s) => sum + (parseFloat(s.weight) || 0) * (parseInt(s.reps) || 0), 0);
                    const validSets = ex.sets.filter(s => s.weight && s.reps);
                    const bestSet = validSets.reduce((best, s) => {
                        const weight = parseFloat(s.weight) || 0;
                        return weight > best.weight ? { weight, reps: s.reps } : best;
                    }, { weight: 0, reps: 0 });
                    return `
                        <div class="history-exercise">
                            <span>${exercise?.name || 'Unknown'}</span>
                            <span class="history-sets">${ex.sets.length} sets • Best: ${bestSet.weight}kg × ${bestSet.reps} • Vol: ${totalVolume}kg</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
}

function renderProgress() {
    const selectEl = document.getElementById('progress-exercise-select');
    const selectedId = selectEl.value;
    const progressContent = document.getElementById('progress-content');
    
    if (!selectedId) {
        progressContent.innerHTML = '<p class="empty-state"><span>📊</span>Select an exercise to view progress</p>';
        return;
    }
    
    const exercise = exercises.find(e => e.id === selectedId);
    const bp = BODY_PARTS.find(b => b.id === exercise?.bodyPart);
    
    const exerciseHistory = workoutHistory
        .filter(w => w.exercises.some(e => e.exerciseId === selectedId))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    if (exerciseHistory.length === 0) {
        progressContent.innerHTML = `
            <h3>${bp?.icon || ''} ${exercise?.name}</h3>
            <p class="empty-state"><span>📈</span>No history for this exercise yet</p>
        `;
        return;
    }
    
    const allSets = exerciseHistory.flatMap(w => {
        const ex = w.exercises.find(e => e.exerciseId === selectedId);
        return ex.sets
            .filter(s => s.weight && s.reps)
            .map(s => ({
                date: w.date,
                weight: parseFloat(s.weight) || 0,
                reps: parseInt(s.reps) || 0
            }));
    });
    
    const maxWeight = Math.max(...allSets.map(s => s.weight), 0);
    const totalVolume = allSets.reduce((sum, s) => sum + s.weight * s.reps, 0);
    const totalReps = allSets.reduce((sum, s) => sum + s.reps, 0);
    const avgWeight = totalReps > 0 ? (totalVolume / totalReps).toFixed(1) : 0;
    
    progressContent.innerHTML = `
        <h3>${bp?.icon || ''} ${exercise?.name}</h3>
        <div class="progress-stats">
            <div class="progress-stat">
                <div class="progress-stat-value">${maxWeight}</div>
                <div class="progress-stat-label">Max Weight (kg)</div>
            </div>
            <div class="progress-stat">
                <div class="progress-stat-value">${totalVolume}</div>
                <div class="progress-stat-label">Total Volume (kg)</div>
            </div>
            <div class="progress-stat">
                <div class="progress-stat-value">${exerciseHistory.length}</div>
                <div class="progress-stat-label">Sessions</div>
            </div>
        </div>
        <table class="progress-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Weight (kg)</th>
                    <th>Reps</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                ${allSets.slice(-15).reverse().map(s => `
                    <tr>
                        <td>${formatDate(s.date)}</td>
                        <td>${s.weight}</td>
                        <td>${s.reps}</td>
                        <td>${s.weight * s.reps} kg</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function showExerciseModal() {
    document.getElementById('exercise-modal').classList.remove('hidden');
    
    const selectEl = document.getElementById('new-exercise-body-part');
    selectEl.innerHTML = BODY_PARTS.map(bp => `
        <option value="${bp.id}">${bp.icon} ${bp.name}</option>
    `).join('');
}

function hideExerciseModal() {
    document.getElementById('exercise-modal').classList.add('hidden');
    document.getElementById('exercise-form').reset();
}

function addExercise(e) {
    e.preventDefault();
    
    const name = document.getElementById('new-exercise-name').value.trim();
    const bodyPart = document.getElementById('new-exercise-body-part').value;
    
    if (!name) return;
    
    const id = name.toLowerCase().replace(/\s+/g, '-') + '-' + generateId();
    exercises.push({ id, name, bodyPart });
    saveExercises();
    
    hideExerciseModal();
    renderExercises();
}

function importWorkoutHistory() {
    const importedHistory = [
        {
            id: generateId(),
            date: '2026-01-14',
            bodyParts: ['back'],
            exercises: [
                { exerciseId: 'pull-up', sets: [{ weight: 35, reps: 5 }] },
                { exerciseId: 'lat-pulldown', sets: [{ weight: 40, reps: 12 }, { weight: 45, reps: 7 }, { weight: 45, reps: 6 }, { weight: 40, reps: 2 }] },
                { exerciseId: 'barbell-row', sets: [{ weight: 30, reps: 6 }, { weight: 35, reps: 8 }, { weight: 32.5, reps: 10 }, { weight: 25, reps: 6 }] },
                { exerciseId: 'close-grip-pulldown', sets: [{ weight: 35, reps: 10 }, { weight: 35, reps: 8 }, { weight: 30, reps: 8 }] },
                { exerciseId: 'lower-back', sets: [{ weight: 10, reps: 10 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-01-18',
            bodyParts: ['legs'],
            exercises: [
                { exerciseId: 'squat', sets: [{ weight: 15, reps: 12 }, { weight: 30, reps: 10 }, { weight: 35, reps: 5 }] },
                { exerciseId: 'romanian-deadlift', sets: [{ weight: 5, reps: 10 }] },
                { exerciseId: 'leg-curl', sets: [{ weight: 40, reps: 10 }, { weight: 50, reps: 8 }, { weight: 60, reps: 8 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 50, reps: 10 }, { weight: 45, reps: 8 }, { weight: 40, reps: 5 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-01-20',
            bodyParts: ['chest', 'triceps'],
            exercises: [
                { exerciseId: 'bench-press', sets: [{ weight: 10, reps: 8 }, { weight: 12.5, reps: 8 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'incline-press', sets: [{ weight: 5, reps: 10 }, { weight: 15, reps: 9 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'cable-decline', sets: [{ weight: 10, reps: 15 }, { weight: 15, reps: 15 }, { weight: 20, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'chest-press', sets: [{ weight: 35, reps: 15 }, { weight: 40, reps: 10 }, { weight: 45, reps: 12 }] },
                { exerciseId: 'pec-fly', sets: [{ weight: 25, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }] },
                { exerciseId: 'skull-crusher', sets: [{ weight: 10, reps: 10 }, { weight: 15, reps: 8 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'tricep-pushdown', sets: [{ weight: 30, reps: 10 }, { weight: 25, reps: 10 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 20, reps: 6 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-01-22',
            bodyParts: ['chest', 'triceps'],
            exercises: [
                { exerciseId: 'bench-press', sets: [{ weight: 10, reps: 8 }, { weight: 10, reps: 8 }, { weight: 10, reps: 8 }] },
                { exerciseId: 'incline-dumbbell', sets: [{ weight: 12.5, reps: 10 }, { weight: 15, reps: 8 }, { weight: 15, reps: 10 }, { weight: 12.5, reps: 5 }] },
                { exerciseId: 'cable-decline', sets: [{ weight: 15, reps: 10 }, { weight: 20, reps: 8 }, { weight: 15, reps: 6 }, { weight: 10, reps: 3 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 35, reps: 8 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-11',
            bodyParts: ['legs', 'core'],
            exercises: [
                { exerciseId: 'squat', sets: [{ weight: 15, reps: 10 }] },
                { exerciseId: 'machine-squat', sets: [{ weight: 30, reps: 8 }, { weight: 30, reps: 10 }] },
                { exerciseId: 'leg-curl', sets: [{ weight: 60, reps: 18 }, { weight: 70, reps: 6 }, { weight: 70, reps: 6 }, { weight: 70, reps: 6 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 50, reps: 12 }, { weight: 65, reps: 16 }, { weight: 70, reps: 12 }] },
                { exerciseId: 'calf-raise', sets: [{ weight: 30, reps: 20 }, { weight: 35, reps: 12 }, { weight: 35, reps: 18 }] },
                { exerciseId: 'abs', sets: [{ weight: 65, reps: 20 }, { weight: 60, reps: 15 }, { weight: 65, reps: 15 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-14',
            bodyParts: ['chest', 'triceps'],
            exercises: [
                { exerciseId: 'bench-press', sets: [{ weight: 10, reps: 10 }, { weight: 15, reps: 10 }, { weight: 17.5, reps: 7 }] },
                { exerciseId: 'incline-dumbbell', sets: [{ weight: 15, reps: 12 }, { weight: 20, reps: 8 }, { weight: 20, reps: 9 }] },
                { exerciseId: 'cable-mid', sets: [{ weight: 20, reps: 12 }, { weight: 25, reps: 7 }, { weight: 20, reps: 5 }, { weight: 20, reps: 12 }] },
                { exerciseId: 'lower-pec', sets: [{ weight: 20, reps: 12 }, { weight: 20, reps: 12 }, { weight: 20, reps: 12 }] },
                { exerciseId: 'upper-pec', sets: [{ weight: 15, reps: 10 }, { weight: 15, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 35, reps: 7 }, { weight: 35, reps: 7 }, { weight: 30, reps: 6 }, { weight: 25, reps: 4 }] },
                { exerciseId: 'tricep-pushdown', sets: [{ weight: 35, reps: 6 }, { weight: 35, reps: 6 }, { weight: 35, reps: 6 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-15',
            bodyParts: ['back', 'biceps', 'shoulders'],
            exercises: [
                { exerciseId: 'pull-up', sets: [{ weight: 0, reps: 3 }, { weight: 0, reps: 4 }] },
                { exerciseId: 'lat-pulldown', sets: [{ weight: 40, reps: 10 }, { weight: 50, reps: 6 }, { weight: 50, reps: 4 }, { weight: 50, reps: 8 }, { weight: 45, reps: 5 }, { weight: 45, reps: 8 }] },
                { exerciseId: 'barbell-row', sets: [{ weight: 35, reps: 8 }, { weight: 35, reps: 9 }, { weight: 35, reps: 11 }] },
                { exerciseId: 'close-grip-pulldown', sets: [{ weight: 35, reps: 10 }, { weight: 35, reps: 10 }, { weight: 35, reps: 10 }] },
                { exerciseId: 'face-pull', sets: [{ weight: 40, reps: 12 }, { weight: 40, reps: 14 }, { weight: 45, reps: 10 }] },
                { exerciseId: 'lateral-raise', sets: [{ weight: 10, reps: 10 }, { weight: 17.5, reps: 8 }, { weight: 17.5, reps: 8 }] },
                { exerciseId: 'spider-curl', sets: [{ weight: 17.5, reps: 5 }, { weight: 17.5, reps: 5 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 4 }] },
                { exerciseId: 'hammer-curl', sets: [{ weight: 10, reps: 5 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-16',
            bodyParts: ['legs', 'core'],
            exercises: [
                { exerciseId: 'machine-squat', sets: [{ weight: 20, reps: 10 }, { weight: 35, reps: 9 }, { weight: 35, reps: 9 }] },
                { exerciseId: 'romanian-deadlift', sets: [{ weight: 15, reps: 8 }, { weight: 15, reps: 8 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 60, reps: 15 }, { weight: 70, reps: 12 }, { weight: 70, reps: 9 }] },
                { exerciseId: 'leg-curl', sets: [{ weight: 50, reps: 15 }, { weight: 65, reps: 10 }, { weight: 65, reps: 10 }, { weight: 65, reps: 10 }] },
                { exerciseId: 'calf-raise', sets: [{ weight: 80, reps: 15 }, { weight: 80, reps: 18 }, { weight: 80, reps: 17 }] },
                { exerciseId: 'abs', sets: [{ weight: 65, reps: 12 }, { weight: 70, reps: 10 }, { weight: 70, reps: 12 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-17',
            bodyParts: ['chest', 'shoulders'],
            exercises: [
                { exerciseId: 'incline-press', sets: [{ weight: 15, reps: 10 }, { weight: 20, reps: 9 }, { weight: 20, reps: 9 }, { weight: 20, reps: 7 }, { weight: 17.5, reps: 2 }] },
                { exerciseId: 'shoulder-press', sets: [{ weight: 12.5, reps: 7 }, { weight: 15, reps: 7 }, { weight: 15, reps: 6 }, { weight: 12.5, reps: 3 }] },
                { exerciseId: 'lateral-raise', sets: [{ weight: 17.5, reps: 10 }, { weight: 17.5, reps: 10 }, { weight: 17.5, reps: 10 }] },
                { exerciseId: 'face-pull', sets: [{ weight: 45, reps: 10 }, { weight: 45, reps: 10 }, { weight: 45, reps: 12 }] },
                { exerciseId: 'front-raise', sets: [{ weight: 22.5, reps: 10 }, { weight: 22.5, reps: 10 }, { weight: 22.5, reps: 10 }] },
                { exerciseId: 'reverse-fly', sets: [{ weight: 25, reps: 12 }, { weight: 25, reps: 12 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-18',
            bodyParts: ['back', 'biceps'],
            exercises: [
                { exerciseId: 'pull-up', sets: [{ weight: 0, reps: 3 }, { weight: 0, reps: 4 }] },
                { exerciseId: 'lat-pulldown', sets: [{ weight: 45, reps: 10 }, { weight: 50, reps: 10 }, { weight: 45, reps: 6 }, { weight: 50, reps: 7 }, { weight: 45, reps: 4 }, { weight: 45, reps: 7 }, { weight: 40, reps: 3 }] },
                { exerciseId: 'barbell-row', sets: [{ weight: 35, reps: 8 }, { weight: 35, reps: 10 }, { weight: 35, reps: 12 }] },
                { exerciseId: 'close-grip-pulldown', sets: [{ weight: 35, reps: 10 }, { weight: 40, reps: 8 }, { weight: 35, reps: 3 }, { weight: 35, reps: 7 }, { weight: 30, reps: 3 }] },
                { exerciseId: 'spider-curl', sets: [{ weight: 17.5, reps: 7 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 8 }, { weight: 17.5, reps: 4 }] },
                { exerciseId: 'hammer-curl', sets: [{ weight: 22.5, reps: 10 }] },
                { exerciseId: 'bicep-curl', sets: [{ weight: 22.5, reps: 10 }] },
                { exerciseId: 'barbell-curl', sets: [{ weight: 20, reps: 4 }, { weight: 15, reps: 8 }, { weight: 20, reps: 8 }, { weight: 15, reps: 5 }, { weight: 20, reps: 7 }, { weight: 15, reps: 6 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-19',
            bodyParts: ['chest', 'triceps'],
            exercises: [
                { exerciseId: 'bench-press', sets: [{ weight: 15, reps: 10 }, { weight: 20, reps: 14 }] },
                { exerciseId: 'incline-press', sets: [{ weight: 20, reps: 9 }, { weight: 20, reps: 7 }, { weight: 20, reps: 8 }, { weight: 15, reps: 2 }] },
                { exerciseId: 'pec-fly', sets: [{ weight: 20, reps: 14 }, { weight: 25, reps: 8 }, { weight: 20, reps: 4 }, { weight: 25, reps: 8 }, { weight: 20, reps: 6 }, { weight: 10, reps: 6 }] },
                { exerciseId: 'cable-decline', sets: [{ weight: 20, reps: 7 }, { weight: 15, reps: 5 }, { weight: 20, reps: 15 }, { weight: 20, reps: 15 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 35, reps: 10 }, { weight: 35, reps: 8 }, { weight: 25, reps: 6 }] },
                { exerciseId: 'rope-pushdown', sets: [{ weight: 25, reps: 4 }, { weight: 15, reps: 1 }, { weight: 10, reps: 1 }, { weight: 25, reps: 4 }, { weight: 15, reps: 1 }, { weight: 10, reps: 1 }] },
                { exerciseId: 'tricep-pushdown', sets: [{ weight: 40, reps: 10 }, { weight: 35, reps: 12 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-22',
            bodyParts: ['legs'],
            exercises: [
                { exerciseId: 'machine-squat', sets: [{ weight: 20, reps: 12 }, { weight: 30, reps: 9 }, { weight: 30, reps: 10 }, { weight: 30, reps: 8 }, { weight: 50, reps: 3 }] },
                { exerciseId: 'leg-press', sets: [{ weight: 25, reps: 10 }, { weight: 35, reps: 10 }, { weight: 35, reps: 4 }] },
                { exerciseId: 'leg-curl', sets: [{ weight: 40, reps: 12 }, { weight: 65, reps: 12 }, { weight: 70, reps: 12 }, { weight: 70, reps: 10 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 60, reps: 14 }, { weight: 70, reps: 12 }, { weight: 65, reps: 5 }, { weight: 80, reps: 10 }, { weight: 70, reps: 6 }, { weight: 60, reps: 4 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-24',
            bodyParts: ['chest', 'triceps', 'core'],
            exercises: [
                { exerciseId: 'bench-press', sets: [{ weight: 15, reps: 12 }, { weight: 20, reps: 12 }, { weight: 20, reps: 10 }] },
                { exerciseId: 'incline-press', sets: [{ weight: 20, reps: 8 }, { weight: 20, reps: 6 }, { weight: 20, reps: 6 }, { weight: 15, reps: 2 }] },
                { exerciseId: 'cable-press', sets: [{ weight: 20, reps: 8 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'cable-decline', sets: [{ weight: 20, reps: 12 }, { weight: 20, reps: 12 }, { weight: 20, reps: 8 }, { weight: 15, reps: 6 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 20, reps: 14 }, { weight: 20, reps: 12 }, { weight: 20, reps: 12 }] },
                { exerciseId: 'tricep-pushdown', sets: [{ weight: 35, reps: 10 }, { weight: 35, reps: 12 }, { weight: 40, reps: 8 }, { weight: 35, reps: 4 }] },
                { exerciseId: 'crunch', sets: [{ weight: 65, reps: 20 }, { weight: 70, reps: 25 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-26',
            bodyParts: ['back', 'biceps'],
            exercises: [
                { exerciseId: 'lat-pulldown', sets: [{ weight: 40, reps: 12 }, { weight: 50, reps: 10 }, { weight: 45, reps: 3 }, { weight: 50, reps: 10 }, { weight: 40, reps: 3 }, { weight: 50, reps: 7 }, { weight: 40, reps: 5 }] },
                { exerciseId: 'barbell-row', sets: [{ weight: 35, reps: 10 }, { weight: 40, reps: 10 }, { weight: 40, reps: 8 }, { weight: 35, reps: 5 }] },
                { exerciseId: 'close-grip-pulldown', sets: [{ weight: 35, reps: 10 }, { weight: 40, reps: 5 }, { weight: 35, reps: 6 }] },
                { exerciseId: 'spider-curl', sets: [{ weight: 17.5, reps: 10 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 4 }] },
                { exerciseId: 'hammer-curl', sets: [{ weight: 17.5, reps: 7 }, { weight: 17.5, reps: 10 }, { weight: 17.5, reps: 10 }] },
                { exerciseId: 'forearms', sets: [{ weight: 15, reps: 14 }, { weight: 15, reps: 10 }, { weight: 15, reps: 14 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-02-27',
            bodyParts: ['legs', 'shoulders'],
            exercises: [
                { exerciseId: 'machine-squat', sets: [{ weight: 20, reps: 10 }, { weight: 35, reps: 10 }, { weight: 35, reps: 10 }, { weight: 35, reps: 10 }] },
                { exerciseId: 'leg-curl', sets: [{ weight: 50, reps: 10 }, { weight: 60, reps: 12 }, { weight: 70, reps: 9 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 50, reps: 15 }, { weight: 60, reps: 15 }, { weight: 60, reps: 15 }] },
                { exerciseId: 'lateral-raise', sets: [{ weight: 17.5, reps: 15 }, { weight: 17.5, reps: 15 }, { weight: 22.5, reps: 12 }, { weight: 17.5, reps: 15 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'front-raise', sets: [{ weight: 35, reps: 8 }, { weight: 35, reps: 6 }, { weight: 25, reps: 4 }] },
                { exerciseId: 'reverse-fly', sets: [{ weight: 25, reps: 10 }, { weight: 30, reps: 10 }] },
                { exerciseId: 'shrugs', sets: [] },
                { exerciseId: 'calf-raise', sets: [] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-02',
            bodyParts: ['chest', 'triceps', 'core'],
            exercises: [
                { exerciseId: 'pec-fly', sets: [{ weight: 25, reps: 12 }] },
                { exerciseId: 'incline-press', sets: [{ weight: 15, reps: 6 }, { weight: 20, reps: 12 }, { weight: 22.5, reps: 6 }, { weight: 22.5, reps: 4 }, { weight: 20, reps: 6 }] },
                { exerciseId: 'chest-press', sets: [{ weight: 50, reps: 15 }, { weight: 55, reps: 16 }, { weight: 16, reps: 14 }] },
                { exerciseId: 'cable-decline', sets: [{ weight: 20, reps: 14 }, { weight: 25, reps: 7 }, { weight: 20, reps: 10 }, { weight: 20, reps: 14 }, { weight: 10, reps: 8 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 25, reps: 12 }, { weight: 20, reps: 4 }, { weight: 25, reps: 8 }, { weight: 15, reps: 8 }, { weight: 20, reps: 6 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'tricep-pushdown', sets: [{ weight: 30, reps: 10 }, { weight: 35, reps: 8 }, { weight: 30, reps: 8 }] },
                { exerciseId: 'crunch', sets: [{ weight: 70, reps: 20 }, { weight: 75, reps: 30 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-03',
            bodyParts: ['back', 'shoulders'],
            exercises: [
                { exerciseId: 'lat-pulldown', sets: [{ weight: 45, reps: 10 }, { weight: 50, reps: 10 }, { weight: 45, reps: 4 }, { weight: 50, reps: 10 }, { weight: 40, reps: 5 }, { weight: 50, reps: 5 }, { weight: 40, reps: 5 }] },
                { exerciseId: 'barbell-row', sets: [{ weight: 35, reps: 10 }, { weight: 40, reps: 10 }, { weight: 30, reps: 5 }, { weight: 40, reps: 5 }, { weight: 35, reps: 5 }] },
                { exerciseId: 'close-grip-pulldown', sets: [{ weight: 35, reps: 10 }, { weight: 40, reps: 5 }, { weight: 35, reps: 6 }] },
                { exerciseId: 'shoulder-press', sets: [{ weight: 12.5, reps: 10 }, { weight: 17.5, reps: 10 }, { weight: 17.5, reps: 10 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-05',
            bodyParts: ['legs'],
            exercises: [
                { exerciseId: 'machine-squat', sets: [{ weight: 30, reps: 10 }, { weight: 35, reps: 10 }, { weight: 35, reps: 10 }] },
                { exerciseId: 'leg-curl', sets: [{ weight: 50, reps: 20 }, { weight: 60, reps: 15 }, { weight: 70, reps: 11 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 60, reps: 15 }, { weight: 60, reps: 15 }, { weight: 60, reps: 15 }] },
                { exerciseId: 'shrugs', sets: [{ weight: 20, reps: 17 }, { weight: 22.5, reps: 12 }] },
                { exerciseId: 'calf-raise', sets: [{ weight: 15, reps: 20 }, { weight: 15, reps: 20 }, { weight: 15, reps: 20 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-06',
            bodyParts: ['chest', 'biceps', 'triceps'],
            exercises: [
                { exerciseId: 'pec-fly', sets: [{ weight: 25, reps: 20 }, { weight: 35, reps: 10 }] },
                { exerciseId: 'incline-press', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 8 }, { weight: 20, reps: 7 }, { weight: 10, reps: 7 }] },
                { exerciseId: 'cable-press', sets: [{ weight: 20, reps: 10 }, { weight: 25, reps: 10 }, { weight: 25, reps: 7 }, { weight: 20, reps: 10 }, { weight: 10, reps: 3 }] },
                { exerciseId: 'cable-decline', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'chest-press', sets: [{ weight: 50, reps: 15 }, { weight: 60, reps: 12 }, { weight: 65, reps: 7 }, { weight: 55, reps: 4 }] },
                { exerciseId: 'spider-curl', sets: [{ weight: 17.5, reps: 10 }, { weight: 17.5, reps: 12 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 5 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 4 }, { weight: 5, reps: 6 }] },
                { exerciseId: 'preacher-curl', sets: [{ weight: 10, reps: 6 }, { weight: 10, reps: 6 }, { weight: 7.5, reps: 8 }, { weight: 20, reps: 6 }, { weight: 15, reps: 6 }] },
                { exerciseId: 'barbell-curl', sets: [{ weight: 20, reps: 8 }, { weight: 15, reps: 3 }, { weight: 20, reps: 4 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 30, reps: 10 }, { weight: 30, reps: 6 }, { weight: 25, reps: 8 }, { weight: 30, reps: 8 }, { weight: 25, reps: 6 }, { weight: 25, reps: 10 }] },
                { exerciseId: 'tricep-pushdown', sets: [{ weight: 30, reps: 12 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-08',
            bodyParts: ['back', 'shoulders'],
            exercises: [
                { exerciseId: 'pull-up', sets: [{ weight: 0, reps: 6 }, { weight: 0, reps: 2 }] },
                { exerciseId: 'lat-pulldown', sets: [{ weight: 50, reps: 10 }, { weight: 50, reps: 7 }, { weight: 50, reps: 3 }, { weight: 50, reps: 6 }, { weight: 50, reps: 3 }] },
                { exerciseId: 'barbell-row', sets: [{ weight: 35, reps: 10 }, { weight: 40, reps: 10 }, { weight: 40, reps: 8 }, { weight: 35, reps: 4 }] },
                { exerciseId: 'close-grip-pulldown', sets: [{ weight: 30, reps: 10 }, { weight: 30, reps: 10 }, { weight: 35, reps: 10 }] },
                { exerciseId: 'shoulder-press', sets: [{ weight: 12.5, reps: 12 }, { weight: 15, reps: 12 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'lateral-raise', sets: [{ weight: 22.5, reps: 10 }, { weight: 10, reps: 10 }, { weight: 7.5, reps: 10 }, { weight: 10, reps: 12 }, { weight: 7.5, reps: 8 }, { weight: 10, reps: 12 }, { weight: 7.5, reps: 8 }] },
                { exerciseId: 'front-raise', sets: [{ weight: 7.5, reps: 10 }, { weight: 7.5, reps: 10 }, { weight: 5, reps: 6 }, { weight: 7.5, reps: 10 }, { weight: 7.5, reps: 10 }, { weight: 5, reps: 6 }] },
                { exerciseId: 'reverse-fly', sets: [{ weight: 30, reps: 10 }, { weight: 30, reps: 10 }, { weight: 35, reps: 10 }, { weight: 30, reps: 4 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-09',
            bodyParts: ['legs'],
            exercises: [
                { exerciseId: 'machine-squat', sets: [{ weight: 35, reps: 10 }, { weight: 40, reps: 10 }, { weight: 35, reps: 10 }] },
                { exerciseId: 'leg-curl', sets: [{ weight: 55, reps: 20 }, { weight: 65, reps: 10 }, { weight: 70, reps: 10 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 45, reps: 15 }, { weight: 60, reps: 16 }, { weight: 60, reps: 15 }] },
                { exerciseId: 'romanian-deadlift', sets: [{ weight: 15, reps: 10 }, { weight: 15, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'shrugs', sets: [{ weight: 20, reps: 12 }, { weight: 17.5, reps: 10 }] },
                { exerciseId: 'calf-raise', sets: [{ weight: 15, reps: 20 }, { weight: 15, reps: 20 }, { weight: 15, reps: 20 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-11',
            bodyParts: ['chest', 'biceps', 'triceps'],
            exercises: [
                { exerciseId: 'pec-fly', sets: [{ weight: 30, reps: 20 }, { weight: 35, reps: 10 }] },
                { exerciseId: 'incline-press', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 9 }, { weight: 20, reps: 9 }] },
                { exerciseId: 'incline-dumbbell', sets: [{ weight: 15, reps: 10 }, { weight: 20, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'chest-press', sets: [{ weight: 50, reps: 15 }, { weight: 50, reps: 15 }, { weight: 65, reps: 10 }] },
                { exerciseId: 'cable-press', sets: [{ weight: 15, reps: 12 }, { weight: 20, reps: 7 }, { weight: 25, reps: 7 }, { weight: 20, reps: 10 }, { weight: 10, reps: 3 }] },
                { exerciseId: 'cable-decline', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'spider-curl', sets: [{ weight: 17.5, reps: 10 }, { weight: 17.5, reps: 12 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 5 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 4 }, { weight: 5, reps: 6 }] },
                { exerciseId: 'preacher-curl', sets: [{ weight: 10, reps: 6 }, { weight: 10, reps: 6 }, { weight: 7.5, reps: 8 }, { weight: 20, reps: 6 }, { weight: 15, reps: 6 }] },
                { exerciseId: 'barbell-curl', sets: [{ weight: 20, reps: 8 }, { weight: 15, reps: 3 }, { weight: 20, reps: 4 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 30, reps: 10 }, { weight: 30, reps: 6 }, { weight: 25, reps: 8 }, { weight: 30, reps: 8 }, { weight: 25, reps: 6 }, { weight: 25, reps: 10 }] },
                { exerciseId: 'tricep-pushdown', sets: [{ weight: 40, reps: 10 }, { weight: 40, reps: 10 }, { weight: 40, reps: 10 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-12',
            bodyParts: ['back', 'shoulders'],
            exercises: [
                { exerciseId: 'pull-up', sets: [{ weight: 0, reps: 6 }, { weight: 0, reps: 2 }] },
                { exerciseId: 'lat-pulldown', sets: [{ weight: 45, reps: 12 }, { weight: 50, reps: 11 }, { weight: 50, reps: 10 }] },
                { exerciseId: 'barbell-row', sets: [{ weight: 40, reps: 10 }, { weight: 45, reps: 8 }, { weight: 35, reps: 5 }, { weight: 45, reps: 8 }, { weight: 40, reps: 5 }] },
                { exerciseId: 'close-grip-pulldown', sets: [{ weight: 35, reps: 9 }, { weight: 35, reps: 10 }, { weight: 25, reps: 8 }] },
                { exerciseId: 'shoulder-press', sets: [{ weight: 12.5, reps: 12 }, { weight: 17.5, reps: 12 }, { weight: 20, reps: 9 }] },
                { exerciseId: 'lateral-raise', sets: [{ weight: 22.5, reps: 10 }, { weight: 10, reps: 10 }, { weight: 7.5, reps: 5 }, { weight: 22.5, reps: 8 }, { weight: 10, reps: 12 }, { weight: 7.5, reps: 8 }, { weight: 10, reps: 12 }, { weight: 7.5, reps: 8 }] },
                { exerciseId: 'front-raise', sets: [{ weight: 7.5, reps: 10 }, { weight: 7.5, reps: 10 }, { weight: 5, reps: 6 }, { weight: 7.5, reps: 10 }, { weight: 7.5, reps: 10 }, { weight: 5, reps: 6 }] },
                { exerciseId: 'reverse-fly', sets: [{ weight: 25, reps: 10 }, { weight: 25, reps: 10 }, { weight: 30, reps: 7 }, { weight: 30, reps: 4 }] },
                { exerciseId: 'shrugs', sets: [{ weight: 22.5, reps: 10 }, { weight: 17.5, reps: 16 }, { weight: 17.5, reps: 16 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-14',
            bodyParts: ['legs', 'biceps'],
            exercises: [
                { exerciseId: 'squat', sets: [{ weight: 30, reps: 8 }, { weight: 30, reps: 10 }, { weight: 35, reps: 10 }] },
                { exerciseId: 'leg-curl', sets: [{ weight: 55, reps: 17 }, { weight: 65, reps: 15 }, { weight: 70, reps: 10 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 45, reps: 15 }, { weight: 60, reps: 16 }, { weight: 60, reps: 15 }] },
                { exerciseId: 'romanian-deadlift', sets: [{ weight: 15, reps: 10 }, { weight: 15, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'calf-raise', sets: [{ weight: 15, reps: 15 }, { weight: 20, reps: 15 }, { weight: 20, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'spider-curl', sets: [{ weight: 17.5, reps: 12 }, { weight: 17.5, reps: 8 }, { weight: 17.5, reps: 6 }, { weight: 17.5, reps: 6 }, { weight: 17.5, reps: 6 }] },
                { exerciseId: 'barbell-curl', sets: [{ weight: 20, reps: 15 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 10, reps: 10 }] },
                { exerciseId: 'hammer-curl', sets: [{ weight: 10, reps: 10 }, { weight: 10, reps: 10 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-16',
            bodyParts: ['chest', 'triceps', 'core'],
            exercises: [
                { exerciseId: 'pec-fly', sets: [{ weight: 35, reps: 12 }, { weight: 40, reps: 10 }, { weight: 40, reps: 8 }, { weight: 35, reps: 2 }] },
                { exerciseId: 'incline-press', sets: [{ weight: 17.5, reps: 10 }, { weight: 17.5, reps: 10 }, { weight: 20, reps: 7 }] },
                { exerciseId: 'incline-dumbbell', sets: [{ weight: 15, reps: 4 }, { weight: 15, reps: 4 }, { weight: 15, reps: 8 }] },
                { exerciseId: 'chest-press', sets: [{ weight: 50, reps: 15 }, { weight: 50, reps: 15 }, { weight: 65, reps: 10 }] },
                { exerciseId: 'cable-press', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 7 }, { weight: 20, reps: 13 }, { weight: 20, reps: 5 }] },
                { exerciseId: 'cable-decline', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 15, reps: 10 }] },
                { exerciseId: 'tricep-overhead', sets: [{ weight: 40, reps: 10 }, { weight: 40, reps: 6 }, { weight: 35, reps: 8 }, { weight: 35, reps: 8 }, { weight: 25, reps: 6 }] },
                { exerciseId: 'tricep-pushdown', sets: [{ weight: 40, reps: 10 }, { weight: 40, reps: 10 }] },
                { exerciseId: 'abs', sets: [{ weight: 70, reps: 20 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-17',
            bodyParts: ['back', 'biceps'],
            exercises: [
                { exerciseId: 'lat-pulldown', sets: [{ weight: 40, reps: 15 }, { weight: 50, reps: 12 }, { weight: 55, reps: 10 }, { weight: 50, reps: 7 }, { weight: 40, reps: 5 }] },
                { exerciseId: 'barbell-row', sets: [{ weight: 40, reps: 10 }, { weight: 40, reps: 10 }, { weight: 40, reps: 12 }, { weight: 30, reps: 5 }] },
                { exerciseId: 'close-grip-pulldown', sets: [{ weight: 40, reps: 10 }, { weight: 40, reps: 10 }] },
                { exerciseId: 'spider-curl', sets: [{ weight: 17.5, reps: 10 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 4 }, { weight: 17.5, reps: 4 }] },
                { exerciseId: 'hammer-curl', sets: [{ weight: 17.5, reps: 7 }, { weight: 17.5, reps: 10 }, { weight: 17.5, reps: 10 }, { weight: 10, reps: 3 }] },
                { exerciseId: 'forearms', sets: [{ weight: 15, reps: 14 }, { weight: 15, reps: 10 }, { weight: 15, reps: 14 }] },
                { exerciseId: 'lat-pulldown', sets: [{ weight: 40, reps: 10 }, { weight: 35, reps: 10 }, { weight: 35, reps: 10 }] }
            ]
        },
        {
            id: generateId(),
            date: '2026-03-19',
            bodyParts: ['legs'],
            exercises: [
                { exerciseId: 'leg-curl', sets: [{ weight: 40, reps: 12 }, { weight: 60, reps: 15 }, { weight: 70, reps: 15 }, { weight: 70, reps: 15 }] },
                { exerciseId: 'machine-squat', sets: [{ weight: 12.5, reps: 10 }, { weight: 20, reps: 12 }, { weight: 30, reps: 10 }] },
                { exerciseId: 'romanian-deadlift', sets: [{ weight: 20, reps: 10 }, { weight: 20, reps: 10 }, { weight: 20, reps: 10 }] },
                { exerciseId: 'leg-extension', sets: [{ weight: 40, reps: 15 }, { weight: 60, reps: 15 }] },
                { exerciseId: 'lunges', sets: [{ weight: 10, reps: 7 }, { weight: 10, reps: 8 }] }
            ]
        }
    ];
    
    importedHistory.forEach(workout => {
        if (!workoutHistory.some(w => w.date === workout.date)) {
            workoutHistory.push(workout);
        }
    });
    
    saveWorkoutHistory();
}

document.addEventListener('DOMContentLoaded', () => {
    if (workoutHistory.length === 0) {
        importWorkoutHistory();
    } else {
        const hasOldDates = workoutHistory.some(w => w.date.startsWith('2024'));
        if (hasOldDates) {
            workoutHistory = [];
            saveWorkoutHistory();
            importWorkoutHistory();
        }
    }
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => navigate(btn.dataset.view));
    });
    
    document.getElementById('new-workout').addEventListener('click', startNewWorkout);
    document.getElementById('finish-workout').addEventListener('click', finishWorkout);
    
    document.getElementById('add-exercise-btn').addEventListener('click', showExerciseModal);
    document.getElementById('cancel-exercise').addEventListener('click', hideExerciseModal);
    document.getElementById('exercise-form').addEventListener('submit', addExercise);
    
    document.getElementById('progress-exercise-select').addEventListener('change', renderProgress);
    
    document.getElementById('exercise-modal').addEventListener('click', (e) => {
        if (e.target.id === 'exercise-modal') hideExerciseModal();
    });
    
    renderDashboard();
});
