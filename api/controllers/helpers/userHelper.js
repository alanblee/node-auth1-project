const db = require("../../../data/dataConfig");

const findAllUsers = () => {
  return db("users").select("users.id", "users.username");
};

module.exports = {
  findAllUsers,
};
