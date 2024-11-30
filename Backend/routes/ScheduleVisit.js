const express = require('express')
const router = express.Router();
const {ScheduleVisit}= require("../controllers/ScheduleVisit.js")

router.post("/",ScheduleVisit)

module.exports = router;