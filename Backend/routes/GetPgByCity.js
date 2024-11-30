const express = require('express')
const router = express.Router();
const {GetPgByCity}= require("../controllers/GetPgByCity")

router.post("/",GetPgByCity)

module.exports = router;