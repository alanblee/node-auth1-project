const express = require('express');
const router = express.Router();
const authCtrl = require("../controllers/authController");

// POST - LOGIN


// POST - REGISTER
router.route("/register").post(authCtrl.registerUser);

module.exports = router;