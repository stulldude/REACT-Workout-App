const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const completedExerciseSchema = new Schema ({
    name: String,
    weightsCompleted: [Number]
})

const userRoutineInfoSchema = new Schema ({
    currentRoutine: { type: Schema.Types.ObjectId, ref: 'Routine', default: null},
    currentDay: { type: Number, default: 0},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    completedExercises: [completedExerciseSchema],
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

userRoutineInfoSchema.methods.setCurrRoutine = async function(routineId) {
    let userInfo = this;
    userInfo.currentRoutine = routineId;
    userInfo.currentDay = 0;
    return this.save();
}

// userRoutineInfoSchema.methods.addCompletedExercise = async function(exercise) {
//     let userInfo = this;
//     const exerciseLog = [];
//     let idx = userInfo.completedExercises.indexOf(ele => ele.name == exercise.name);
//     idx ? userInfo.completedExercises[idx].weightsCompleted.push(exercise.weight)
//         : 
//         userInfo.completedExercises.push({name=exercise.name, weightsCompleted=[exercise.weight]});
//     return userInfo.save();
// }

userRoutineInfoSchema.methods.dayCompleted = async function() {
    this.currentDay += 1;
    return this.save();
}

module.exports = mongoose.model('RoutineInfo', userRoutineInfoSchema);