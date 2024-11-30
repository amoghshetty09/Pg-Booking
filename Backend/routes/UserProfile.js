const express = require('express')
const router = express.Router();
const {UserProfile}= require("../controllers/UserProfile.js")

router.get("/",UserProfile)

module.exports = router;