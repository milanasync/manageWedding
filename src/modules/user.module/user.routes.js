const express = require("express");
const UserController = require("./user.controller");

const router = express.Router();
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.post("/", UserController.postUser);
router.put("/:id", UserController.putUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
