const express = require("express");
const router = express.Router();

// authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

// // user controllers
const { register, login, checkUser } = require("../Controller/UserController");

// register route
router.post("/register", register);

// login user id
router.post("/login", login);

// check user
router.get("/check", authMiddleware, checkUser);
module.exports = router;
