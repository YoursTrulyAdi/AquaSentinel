const express = require("express");
const { userSignin } = require("../controllers/authController");
const { userSignup } = require("../controllers/authController");

const router = express.Router();

router.post("/user/signin", userSignin);
router.post("/user/signup", userSignup);

module.exports = router;
