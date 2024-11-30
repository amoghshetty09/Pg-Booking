  const express = require('express')
const router = express.Router();
const {OwnerProfile}= require("../controllers/OwnerProfile.js")

router.get("/",OwnerProfile)

module.exports = router;