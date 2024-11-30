const express = require('express')
const router = express.Router();
const {AddNewRoom}= require("../controllers/AddNewRoomDetails")

router.post("/",AddNewRoom)

module.exports = router;