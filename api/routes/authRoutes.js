const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/authController");

// POST - LOGIN
router.route("/login").post(authCtrl.loginUser);

// POST - REGISTER
router.route("/register").post(authCtrl.registerUser);

// GET - LOGOUT
router.route("/logout").get(authCtrl.logoutUser);

module.exports = router;
