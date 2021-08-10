const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: String, // EX: Bench
    sets: Number,
    reps: Number,
    LbsOrKg: {type: String, enum: ["Lbs", "Kgs"], default: "Lbs"},
    weight: Number,
    rog: {type: Number, default: 5}, // recommended rate of increase
    eod: {type: Number, default: 1}, // every other day. ex: 1 means weight goes ups every time, 2 is eod
    
}, {
    timestamps: true,
});

const workoutSchema = new Schema({
    name: String,  // EX: Chest and Back day, Cardio day
    exercises: [exerciseSchema],
}, {
    timestamps: true,
});


const routineSchema =  new Schema({
    name: String,  // EX: 5x5 Stronglifts
    type: {type: String, enum: ["Cardio", "Strength", "Hypertrophy", "Other"]},
    split: Number,
    workouts: [workoutSchema],
}, {
    timestamps: true,
});



module.exports = mongoose.model('Routine', routineSchema);