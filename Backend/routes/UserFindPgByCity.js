const express = require('express')
const router = express.Router();
const {Getcities}= require("../controllers/UserFindPgByCity.js")

router.get("/",Getcities)

module.exports = router;