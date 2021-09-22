const express = require('express');
const router = express.Router();
const routinesCtrl = require('../../controllers/api/routines');

router.get('/index', routinesCtrl.index);
router.get('/:id', routinesCtrl.get);
router.put('/:id/:wIdx/:eIdx', routinesCtrl.handleROG);
router.put('/:id/:wIdx/:eIdx/:newWeight', routinesCtrl.updateWeight);
router.put('/:id/:wIdx', routinesCtrl.addExerciseToWorkout);
module.exports = router;