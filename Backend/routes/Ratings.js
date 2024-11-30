const express = require('express')
const router = express.Router();
const {addRatingAndReview,getReview}= require("../controllers/Ratings.js")

router.post("/",addRatingAndReview)

// router.get("/star",getReview);

module.exports = router;