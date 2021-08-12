const express = require('express');
const router = express.Router();
const routineInfoCtrl = require('../../controllers/api/routineInfo');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/:id', routineInfoCtrl.setUserRoutine);
router.get('/', routineInfoCtrl.getUserRoutineInfo);

module.exports = router;