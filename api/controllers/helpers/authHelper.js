const db = require("../../../data/dataConfig");

const addUser = async (user) => {
  const userObj = {
    username: user.username,
  };
  //check to see if username already exists
  const [findUser] = await findBy(userObj);
  if (findUser.length) {
    //check to see if this user has the same id
    const compareId = await findById(findUser.id);
    if (compareId === findUser.id) {
      return {
        message: "Username already taken, please choose another",
      };
    }
  } else {
    try {
      const newUserId = await db("users").returning("id").insert(user);
      return findById(newUserId);
    } catch (err) {
      throw err;
    }
  }
};

const findById = (id) => {
  return db("users").where({ id }).first();
};

const findBy = (obj) => {
  return db("users").where(obj);
};

module.exports = {
  addUser,
  findById,
  findBy,
};
