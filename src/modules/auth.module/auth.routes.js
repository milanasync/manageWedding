const express = require("express");
const AuthController = require("./auth.controller");

const router = express.Router();
router.post("/login", AuthController.doLogin);

module.exports = router;
