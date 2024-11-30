const express = require('express')
const router = express.Router();
const {BookPg}= require("../controllers/BookPg.js")

router.post("/",BookPg)

module.exports = router;