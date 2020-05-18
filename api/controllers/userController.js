const Users = require("./helpers/userHelper");

module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.findAllUsers();
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(400).json({ message: "Error fetching all user information" });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
