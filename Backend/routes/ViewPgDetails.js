const express = require('express')
const router = express.Router();
const {ViewPgDetails}= require("../controllers/ViewPGdetails")

router.get("/",ViewPgDetails)

module.exports = router;