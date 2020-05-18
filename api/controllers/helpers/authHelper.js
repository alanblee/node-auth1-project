const db = require("../../../data/dataConfig");

const addUser = async (user) => {
  const userObj = {
    username: user.username,
  };
  //check to see if username already exists
  const [findUser] = await findBy(userObj);
  if (findUser) {
    //check to see if this user has the same id
    const compareId = await findById(findUser.id);
    console.log(compareId);
    if (Number(compareId.id) === Number(findUser.id)) {
      return {
        message: "Username already taken, please choose another",
      };
    }
  } else {
    try {
      const [newUserId] = await db("users").returning("id").insert(user);
      console.log(newUserId);
      return findById(Number(newUserId));
    } catch (err) {
      throw err;
    }
  }
};

const findById = (userID) => {
  return db("users").where({ id: userID }).first();
};

const findBy = (obj) => {
  return db("users").where(obj);
};

module.exports = {
  addUser,
  findById,
  findBy,
};
