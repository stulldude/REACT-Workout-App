const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Routine = require('./routine')

const userRoutineInfoSchema = new Schema ({
    currentDay: { type: Number, default: 0},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    completedExercises: [{
        name: String,
        weightsCompleted: [Number]
    }],
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

userRoutineInfoSchema.methods.addCompletedExercise = async function(exercise) {
    let userInfo = this;
    const exerciseLog = [];
    let idx = userInfo.completedExercises.indexOf(ele => ele.name == exercise.name);
    idx ? userInfo.completedExercises[idx].weightsCompleted.push(exercise.weight)
        : 
        userInfo.completedExercises.push({name=exercise.name, weightsCompleted=[exercise.weight]});
    return userInfo.save();
}

userRoutineInfoSchema.methods.dayCompleted = async function() {
    this.currentDay += 1;
    return this.save();
}