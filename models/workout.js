const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: String,  // EX: Chest and Back day, Cardio day
    exercises: [exerciseSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Workout', workoutSchema);