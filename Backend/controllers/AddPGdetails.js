const pgModel =require("../models/AddPGdetails")
const {getuser}=require("../service/auth");
const AddNewPg =async (req,res) => {        
        // console.log(req.body.pgName);
        const body=req.body;
       // console.log(req.user._id);
        await pgModel.create({
            PGname : body.pgName,
            PhNumber : body.phNumber,
            Address : body.address,
            City : body.city,
            PriceRange : body.price,
            Rooms : [
                {
                    RoomType : "Single Occupancy",
                    RoomPrice : 0,
                    VacantRooms : 0,
                    Images: []
                },
                {
                    RoomType : "Double Occupancy",
                    RoomPrice : 0,
                    VacantRooms : 0,
                    Images: []
                },
                {
                    RoomType : "Triple Occupancy",
                    RoomPrice : 0,
                    VacantRooms : 0,
                    Images: []
                },
            ],
            Gender:body.gender,
            Food:body.foodmenu,
            Review: [], // Initialize Review as an empty array
            Feedback: [],
            createdBy: req.user._id,
            
            pgBookings: [], 
            scheduledVisits: [],
           
            })
        
            console.log("got the pg details")
            res.send("Got the data");
        
            console.log(body)

            
    }

module.exports = {AddNewPg};

