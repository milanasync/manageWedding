const express = require("express");
const GlobalController = require("./global.controller");

const router = express.Router();
router.get("/languages", GlobalController.getLanguages);

module.exports = router;
