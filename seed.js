require('dotenv').config();
require('./config/database');

const Routine = require('./models/routine');

(async function() {
    await Routine.deleteMany({});
    const routineSeed = await Routine.create([
        {name: "5x5", type: "Strength", custom: false, split: 2, workouts: [
            {name: "A", exercises: [
                {name: "Squat", sets: 5, reps: 5, weight: 45, rog: 10},
                {name: "Bench Press", sets: 5, reps: 5, weight: 45, rog: 2.5}, 
                {name: "Overhead Press", sets: 5, reps: 5, weight: 45, rog: 2.5},
            ]},
            {name: "B", exercises: [
                {name: "Squat", sets: 5, reps: 5, weight: 50, rog: 10},
                {name: "Bentover Row", sets: 5, reps: 5, weight: 45, rog: 2.5},
                {name: "Deadlift", sets: 1, reps: 5, weight: 135, rog: 5}, 
            ]}
        ]},
        {name: "Boring But Big", type: "Hypertrophy", custom: false, split: 4, workouts: [
            {name: "Day 1", exercises: [
                {name: "Military Press", sets: 3, reps: 5, weight: 45, rog: 0},
                {name: "Bench Press", sets: 5, reps: 10, weight: 135, rog: 0},
                {name: "Chin Ups", sets: 5, reps: 10, weight: 0, rog: 0},
                {name: "Curls", sets: 3, reps: 10, weight: 20, rog: 0},
                {name: "Triceps Pushdowns", sets: 3, reps: 10, weight: 35, rog: 0},
                {name: "Face Pulls", sets: 3, reps: 10, weight: 25, rog: 0},
            ]},
            {name: "Day 2", exercises: [
                {name: "DeadLift", sets: 3, reps: 5, weight: 135, rog: 0},
                {name: "Squat", sets: 5, reps: 10, weight: 65, rog: 0},
                {name: "Ab Wheel", sets: 5, reps: 10, weight: 0, rog: 0},  
            ]},
            {name: "Day 3", exercises: [
                {name: "Bench Press", sets: 3, reps: 5, weight: 90, rog: 0},
                {name: "Military Press", sets: 5, reps: 10, weight: 45, rog: 0},
                {name: "Chin Ups", sets: 5, reps: 10, weight: 0, rog: 0},
                {name: "Curls", sets: 3, reps: 10, weight: 20, rog: 0},
                {name: "Triceps Pushdowns", sets: 3, reps: 10, weight: 35, rog: 0},
                {name: "Face Pulls", sets: 3, reps: 10, weight: 25, rog: 0},
            ]},
            {name: "Day 4", exercises: [
                {name: "Squat", sets: 3, reps: 5, weight: 135, rog: 0},
                {name: "Deadlift", sets: 5, reps: 10, weight: 90, rog: 0},
                {name: "Hanging Leg Raises", sets: 5, reps: 10, weights: 0, rog: 0},  
            ]},
        ]},
    ]);

    console.log(routineSeed);
    process.exit();
})()