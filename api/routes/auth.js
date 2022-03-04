const router = require('express').Router();
const authLogin = require("../controller/auth/login");
const authRegister = require("../controller/auth/register");

router.post("/login",authLogin.login);

router.post("/register",authRegister.register);

module.exports = router;