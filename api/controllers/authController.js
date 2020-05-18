const bcryptjs = require("bcryptjs");
const Users = require("./helpers/authHelper");
const isValid = require("../services/authServices").isValid;

//POST - REGISTER
module.exports.registerUser = async (req, res) => {
  let { username, password } = req.body;
  if (isValid(req.body)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    // hash the password
    const hash = bcryptjs.hashSync(password, rounds);
    password = hash;
    try {
      const userInfo = {
        username,
        password,
      };
      const newUser = await Users.addUser(userInfo);
      if (newUser.username) {
        // req.session.loggedIn = true;

        res.status(201).json({ data: newUser });
      } else {
        res.status(400).json(newUser.message);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(400).json({
      message: "Please provide a username and password",
    });
  }
};
