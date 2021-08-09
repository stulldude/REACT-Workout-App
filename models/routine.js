const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema =  new Schema({
    name: String,  // EX: 5x5 Stronglifts
    type: {type: String, enum: ["Cardio", "Strength", "Hypertrophy", "Other"]},
    length: Number,
    workouts: [workoutSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Routine', routineSchema);