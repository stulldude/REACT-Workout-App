const RoutineInfo = require('../../models/userRoutineInfo')

module.exports = {
    getUserRoutineInfo,
    create,
    setUserRoutine,
}

async function getUserRoutineInfo(req, res) {
    const routineInfo = await RoutineInfo.getUserRoutineInfo(req.user._id);
    res.json(routineInfo);
}

async function setUserRoutine(req, res) {
    const routineInfo = await Order.getUserRoutineInfo(req.user._id);
    await routineInfo.setUserRoutine(req.body.routine);
    res.json(routineInfo);
}

async function create(req, res) {
    req.body.user = req.user._id;
    for (let key in req.body) {
        if (req.body[key] === "") {
            delete req.body[key];
        }
    }
    const routineInfo = await RoutineInfo.create(req.body);
    res.json(routineInfo);
}