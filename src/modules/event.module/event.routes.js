const express = require("express");
const EventController = require("./event.controller");

const router = express.Router();
router.get("/", EventController.getEvents);
router.get("/:id", EventController.getEvent);
router.post("/", EventController.postEvent);
router.put("/:id", EventController.putEvent);
router.delete("/:id", EventController.deleteEvent);

module.exports = router;
