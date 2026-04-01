# Workout Tracker Plan

## Overview
A web-based fitness tracking app to log exercises, sets, reps, and weights. Track workout history and body part training schedules.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Storage**: LocalStorage
- **Structure**: Single Page Application

## Features

### Core Features
1. **Exercise Library** - Predefined exercises organized by body part
2. **Body Part Categories**: Chest, Back, Shoulders, Biceps, Triceps, Legs, Core, Cardio
3. **Custom Exercises** - Add your own exercises to categories
4. **Real-time Workout Builder** - Add exercises during workout session
5. **Auto Body Part Detection** - Automatically identifies trained body parts from exercises
6. **Set Logging** - Track sets, reps, and weight for each exercise
7. **Workout History** - View past workouts with all details

### Progress & Tracking
8. **Last Trained** - See when you last trained each exercise/body part
9. **Exercise History** - View progress for specific exercises over time
10. **Stats Dashboard** - Total workouts, day streak, weekly activity, body part icons

## Data Models

### Exercise
```json
{
  "id": "bench-press",
  "name": "Bench Press",
  "bodyPart": "chest"
}
```

### Workout Log
```json
{
  "id": "uuid",
  "date": "2024-01-15",
  "bodyParts": ["chest", "triceps"],
  "exercises": [
    {
      "exerciseId": "bench-press",
      "sets": [
        { "reps": 10, "weight": 60 },
        { "reps": 8, "weight": 70 }
      ]
    }
  ]
}
```

## Body Part Icons
| Body Part | Icon |
|-----------|------|
| Chest | 🫁 |
| Back | 🔙 |
| Shoulders | 👆 |
| Biceps | 💪 |
| Triceps | 🦾 |
| Legs | 🦵 |
| Core | 🎯 |
| Cardio | ❤️ |

## Steps

### Phase 1: Project Setup
- [x] Create HTML layout (sidebar, main content, modals)
- [x] Set up CSS variables and base styles

### Phase 2: Exercise Library
- [x] Define body part categories with unique icons
- [x] Create predefined exercises per body part (60+ exercises)
- [x] Build exercise list UI with filtering
- [x] Add custom exercise functionality

### Phase 3: Workout Builder
- [x] Real-time exercise adding (no pre-selection required)
- [x] Quick add interface with body part filter tabs
- [x] Auto-detect body parts from added exercises
- [x] Dynamic set logging (add/remove sets)
- [x] Edit weight and reps inline

### Phase 4: Workout Logging
- [x] Save completed workouts
- [x] Calculate totals (volume, exercises count)
- [x] Date selection for workouts

### Phase 5: History & Progress
- [x] Build workout history view with body part icons
- [x] Display last trained date per exercise
- [x] Display last trained date per body part
- [x] Exercise progress view (max weight, volume, sessions)

### Phase 6: Dashboard
- [x] Total workouts count
- [x] Current day streak
- [x] Today trained body parts (icons)
- [x] Weekly workout chart
- [x] Last trained per body part with status colors

### Phase 7: Data Import
- [x] Import user's workout history (Jan-Mar 2026)
- [x] 26 workout sessions including Pull Day, Leg Day, Chest Day, etc.
- [x] All exercises with accurate sets, reps, and weights
- [x] Progressive overload visible in data
