const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Routine = require('../../models/routine')

module.exports = {
    index,
    get,
}

async function index(req, res) {
    const routines = await Routine.find({});
    res.json(routines);
}

async function get(req, res) {
    const routine = await Routine.findById(req.params.id);
    console.log('hi this is your routine')
    console.log(routine);
    res.json(routine);
}