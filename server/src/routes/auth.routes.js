const express = require("express");
const router = express.Router();

const AUTH_CONTROLLER = require("../controllers/auth.controller");

router.post("/register", AUTH_CONTROLLER.REGISTER);
router.post("/login", AUTH_CONTROLLER.LOGIN);
router.post("/logout", AUTH_CONTROLLER.LOGOUT);

module.exports = router;