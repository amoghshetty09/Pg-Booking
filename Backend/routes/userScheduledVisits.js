const express = require('express')
const router = express.Router();
const {userScheduledVisits}= require("../controllers/userScheduledVisits.js")

router.post("/",userScheduledVisits)

module.exports = router;