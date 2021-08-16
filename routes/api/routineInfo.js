const express = require('express');
const router = express.Router();
const routineInfoCtrl = require('../../controllers/api/routineInfo');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', routineInfoCtrl.getUserRoutineInfo);
router.post('/day', routineInfoCtrl.dayCompleted);
router.post('/:id', routineInfoCtrl.setUserRoutine);
router.put('/:wIdx', routineInfoCtrl.addCompletedExercises);
module.exports = router;