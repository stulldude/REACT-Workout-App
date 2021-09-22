const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Routine = require('../../models/routine')

module.exports = {
    index,
    get,
    handleROG,
    updateWeight,
    addExerciseToWorkout,
}

async function index(req, res) {
    const routines = await Routine.find({ user: req.user._id });
    res.json(routines);
}

async function get(req, res) {
    const routine = await Routine.findById(req.params.id);
    res.json(routine);
}

async function handleROG(req, res) {
    const routine = await Routine.findById(req.params.id);
    const exercise = routine.workouts[req.params.wIdx].exercises[req.params.eIdx];
    exercise.weight = exercise.weight + exercise.rog;
    routine.save();
    res.json(routine);
}

async function updateWeight(req, res) {
    const routine = await Routine.findById(req.params.id);
    const exercise = routine.workouts[req.params.wIdx].exercises[req.params.eIdx];
    exercise.weight = req.params.newWeight;
    routine.save();
    res.json(routine);
}

async function addExerciseToWorkout(req, res) {
    const routine = await Routine.findById(req.params.id);
    const workout = routine.workouts[req.params.wIdx];
    const exercise = {
        name:`${req.body.name}`,
        sets:`${req.body.sets}`,
        reps:`${req.body.reps}`,
        LbsOrKg:"Lbs",
        weight:`${req.body.weight}`,
        rog:`${req.body.rog}`,
    }
    workout.exercises.put(exercise);
    routine.save();
    res.json(routine);
}