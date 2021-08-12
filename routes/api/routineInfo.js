const express = require('express');
const router = express.Router();
const routineInfoCtrl = require('../../controllers/api/routineInfo');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', routineInfoCtrl.getUserRoutineInfo);
router.post('/create', routineInfoCtrl.create);
router.put('/routine/set', routineInfoCtrl.setUserRoutine);

module.exports = router;