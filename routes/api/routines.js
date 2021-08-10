const express = require('express');
const router = express.Router();
const routinesCtrl = require('../../controllers/api/routines');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/index', routinesCtrl.index);

module.exports = router;