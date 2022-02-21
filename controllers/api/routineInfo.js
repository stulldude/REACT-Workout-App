const RoutineInfo = require('../../models/userRoutineInfo')
const Routine = require('../../models/routine')

module.exports = {
    getUserRoutineInfo,
    setUserRoutine,
    dayCompleted,
    addCompletedExercises,
}

async function getUserRoutineInfo(req, res) {
    const routineInfo = await RoutineInfo.getUserRoutineInfo(req.user._id);

    res.json(routineInfo);
}

async function setUserRoutine(req, res) {
    const routineInfo = await RoutineInfo.getUserRoutineInfo(req.user._id);

    if (routineInfo.routine && routineInfo.routine._id === req.params.id) return res.json('routine already active');
    await routineInfo.setCurrRoutine(req.params.id);

    res.json(routineInfo);
}

async function dayCompleted(req, res) {
    const routineInfo = await RoutineInfo.getUserRoutineInfo(req.user._id);
    routineInfo.dayCompleted();
    res.json(routineInfo);
}

async function addCompletedExercises(req, res) {
    const routineInfo = await RoutineInfo.getUserRoutineInfo(req.user._id);
    const routine = await Routine.findById(routineInfo.currentRoutine);
    routine.workouts[req.params.wIdx].exercises.forEach(exercise => {
        let idx = routineInfo.completedExercises.findIndex(ele =>
            ele.name === exercise.name
        );
        idx != -1 ? 
            routineInfo.completedExercises[idx].weightsCompleted.push(exercise.weight)
            :
            routineInfo.completedExercises.push({name: exercise.name, weightsCompleted: [exercise.weight]})
    })
    routineInfo.save()
    res.json(routineInfo);
}
