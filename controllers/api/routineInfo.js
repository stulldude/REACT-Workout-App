const RoutineInfo = require('../../models/userRoutineInfo')

module.exports = {
    getUserRoutineInfo,
    setUserRoutine,
}

async function getUserRoutineInfo(req, res) {
    const routineInfo = await RoutineInfo.getUserRoutineInfo(req.user._id);
    res.json(routineInfo);
}

async function setUserRoutine(req, res) {
    const routineInfo = await RoutineInfo.getUserRoutineInfo(req.user._id);
    console.log(routineInfo);

    if (routineInfo.routine && routineInfo.routine._id === req.params.id) return res.json('routine already active');
    await routineInfo.setCurrRoutine(req.params.id);

    res.json(routineInfo);
}