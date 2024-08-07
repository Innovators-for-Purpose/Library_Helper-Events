const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventController.js");

router.get("/", eventController.getALLEvents);
router.post("/event",eventController.singleEvent);
router.post("/eventForm", eventController.createEvent);
router.get("/event/:id", eventController.getEventDetails);
router.get("/event/:id", eventController.getEventDetails);
router.delete("/delete-event", eventController.deleteEvent)

module.exports = router;    