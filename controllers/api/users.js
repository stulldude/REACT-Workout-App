const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Routine = require('../../models/routine')

module.exports = {
  create,
  login,
  checkToken
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);

    // find base routines
    const routines = await Routine.find({custom: false})

    // create routines that belong to the user
    routines.forEach(routine => {
      let routObj = routine.toObject();
      
      // delete the base routineId, set it to custom and assign its user
      delete routObj._id;
      routObj.custom = true;
      routObj.user = user._id;

      // do the same for each workout
      routObj.workouts.forEach(workout => {
        delete workout._id;
        
        //do the same for each exercise
        workout.exercises.forEach(exercise => {
          delete exercise._id;
        })
      })
      Routine.create(routObj);
    })
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  res.json(req.exp);
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}