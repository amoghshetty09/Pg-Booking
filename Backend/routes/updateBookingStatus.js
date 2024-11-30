const express = require('express')
const router = express.Router();
const {updateBookingStatus}= require("../controllers/updateBookingStatus.js")

router.post("/",updateBookingStatus)

module.exports = router;