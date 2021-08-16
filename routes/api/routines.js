const express = require('express');
const router = express.Router();
const routinesCtrl = require('../../controllers/api/routines');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/index', routinesCtrl.index);
router.get('/:id', routinesCtrl.get);
router.put('/:id/:wIdx/:eIdx', routinesCtrl.handleROG);
router.put('/:id/:wIdx/:eIdx/:newWeight', routinesCtrl.updateWeight);

module.exports = router;