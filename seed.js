require('./config/database');

const { default: createTypography } = require('@material-ui/core/styles/createTypography');
const { create } = require('./models/routine');
const Routine = require('./models/routine');
const Workout = require('./models/workout')
const Exercise = require('./models/exercise')

(async function() {

    await Exercise.deleteMany({});
    const exerciseSeed = await Exercise.create([
        {name: "Bench", sets: 5, reps: 5, weight: 45, rog: 2.5},
        {name: "Squat", sets: 5, reps: 5, weight: 60, rog: 5},
        {name: "Deadlift", sets: 5, reps: 5, weight: 135, rog: 10},
        {name: "Bentover Row", sets: 5, reps: 5, weight: 45, rog: 10},
        {name: "Overhead Press", sets: 5, reps: 5, weight: 45, rog: 2.5},
    ]);

    await Workout.deleteMany({});
    const workoutSeed = await Workout.create([
        {name: "A", exercises: [
            Exercise.find({name: "Squat"}),
            Exercise.find({name: "Bench"}),
            Exercise.find({name: "Overhead Press"})
        ]},
        {name: "B", exercises: [
            Exercise.find({name: "Squat"}),
            Exercise.find({name: "Bentover Row"}),
            Exercise.find({name: "Deadlift"})
        ]},
    ]);

    await Routine.deleteMany({

    });
    

})