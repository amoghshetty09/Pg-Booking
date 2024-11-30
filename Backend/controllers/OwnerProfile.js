const pgModel = require("../models/AddPGdetails");
const ownerModel = require("../models/pgowner");

const OwnerProfile = async (req, res) => {
    try {
     
        const ownerId = req.user._id;

        // Find the owner and PG details
        const owner = await ownerModel.findById(ownerId);
        const pgDetails = await pgModel.find({ createdBy: ownerId });

        if (!owner) {
            return res.status(404).send("Owner not found");
        }

       
        const profile = {
            owner: {
                email: owner.email,
            },
            pgDetails: pgDetails.map(pg => ({
                PGname: pg.PGname,
                Address: pg.Address,
                City: pg.City,
                PhNumber: pg.PhNumber,
                PriceRange: pg.PriceRange,
                Food:pg.Food,
                Gender:pg.Gender,
            })),
        };

        res.json(profile);
    } catch (error) {
        console.error('Error fetching owner profile:', error);
        res.status(500).send("Server error");
    }
};

module.exports = { OwnerProfile };
