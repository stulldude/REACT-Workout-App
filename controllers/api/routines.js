const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Routine = require('../../models/routine')

module.exports = {
    index,
}

async function index(req, res) {
    const routines = await Routine.find({});
    res.json(routines);
}