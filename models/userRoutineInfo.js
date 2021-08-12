const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Routine = require('./routine')

const userRoutineInfoSchema = new Schema ({
    currentRoutine: Routine,
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


userRoutineInfoSchema.statics.getUserRoutineInfo = function(userId) {
    const userRoutineInfo = this.findOneAndUpdate({user: userId}, {user: userId}, {
        new: true,
        upsert: true
    })
    
    return userRoutineInfo;
}

userRoutineInfoSchema.methods.setCurrRoutine = async function(routine) {
    let userInfo = this;
    if (userInfo.currentRoutine == routine) {
        return this;
    } else {
        userInfo.currentRoutine = routine;
        userInfo.currentDay = 0;
    }
    return this.save();
}

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