const express = require("express");
const { getDashboard } = require("../controllers/protectedController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/user/dashboard", authMiddleware, getDashboard);

module.exports = router;
