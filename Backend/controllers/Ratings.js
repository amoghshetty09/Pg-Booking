const pgModel = require("../models/AddPGdetails");

// Ensure pg_id is a valid ObjectId
const addRatingAndReview = async (req, res) => {
    try {
        const { pg_id, ratings, feedback } = req.body;

        // const body=req.body;
        console.log("id",ratings,feedback);
        const updateResult = await pgModel.updateOne(
            { _id: pg_id},
            {
                $push: {
                    Review: { rating: ratings },    // Push an object with `rating` field
                    Feedback: { message: feedback } // Append review to the Feedback array
                }
            }
        );

        console.log(updateResult);

        if (updateResult.matchedCount === 0) {
            return res.status(404).send("PG Not Found");
        }

        res.status(200).send("Rating and review added successfully");
    } catch (error) {
        console.error("Error adding rating and review:", error);
        res.status(500).send("An error occurred while adding rating and review");
    }
};


// const getReview = async (req, res) => {
//     try {
//         const { pg_id } = req.params;
//         console.log(pg_id,"the star id");
//         // Fetch PG details
//         const pgDetails = await pgModel.findById(pg_id);

//         if (!pgDetails) {
//             return res.status(404).send("PG Not Found");
//         }

//         // Calculate the average rating from the Review array
//         const ratings = pgDetails.Review.map(review => review.rating);
//         const averageRating = ratings.length ? (ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length) : 0;

//         res.status(200).json({ averageRating });
//     } catch (error) {
//         console.error("Error fetching reviews:", error);
//         res.status(500).send("An error occurred while fetching the average rating");
//     }
// };

module.exports = { addRatingAndReview};

