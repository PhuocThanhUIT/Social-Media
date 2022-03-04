const router = require('express').Router();
const loginController = require("../controller/auth/login");
const registerController = require("../controller/auth/register");

router.post("/login",loginController.login);

router.post("/register",registerController.register);

module.exports = router;