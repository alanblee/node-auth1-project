const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

//GET - Fetch all users
router.route("/").get(userCtrl.getAllUsers);


module.exports = router;