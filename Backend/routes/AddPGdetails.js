const express = require('express')
const router = express.Router();
const {AddNewPg}= require("../controllers/AddPGdetails")

router.post("/",AddNewPg)

module.exports = router;