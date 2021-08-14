require('dotenv').config();
require('./config/database');

const Routine = require('./models/routine');

(async function() {
    await Routine.deleteMany({});
    const routineSeed = await Routine.create([
        {name: "5x5", type: "Strength", custom: false, split: 2, workouts: [
            {name: "A", exercises: [
                {name: "Squat", sets: 5, reps: 5, weight: 60, rog: 5},
                {name: "Bench", sets: 5, reps: 5, weight: 45, rog: 2.5}, 
                {name: "Overhead Press", sets: 5, reps: 5, weight: 45, rog: 10},
            ]},
            {name: "B", exercises: [
                {name: "Squat", sets: 5, reps: 5, weight: 60, rog: 5},
                {name: "Bentover Row", sets: 5, reps: 5, weight: 45, rog: 10},
                {name: "Deadlift", sets: 1, reps: 5, weight: 135, rog: 2.5}, 
            ]},
        ]}
    ]);

    console.log(routineSeed);
    process.exit();
})()