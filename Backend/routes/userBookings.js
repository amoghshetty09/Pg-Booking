const express = require('express')
const router = express.Router();
const {userBookings}= require("../controllers/userBookings.js")

router.post("/",userBookings)

module.exports = router;