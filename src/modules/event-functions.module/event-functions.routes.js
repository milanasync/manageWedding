const express = require("express");
const EventFunctionController = require("./event-functions.controller");

const router = express.Router();
router.get("/", EventFunctionController.getEventFunctions);
router.get("/:id", EventFunctionController.getEventFunction);
router.post("/", EventFunctionController.postEventFunction);
router.put("/:id", EventFunctionController.putEventFunction);
router.delete("/:id", EventFunctionController.deleteEventFunction);

module.exports = router;
