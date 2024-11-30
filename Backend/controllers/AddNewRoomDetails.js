// const pgModel =require("../models/AddPGdetails")
// const multer = require("multer"); 
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null,path.join(__dirname, 'uploads')); // Folder to save uploaded files
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname); // Unique filename
//     }
// });

// const upload = multer({ storage: storage });


// const AddNewRoom =async (req,res) => {        
//         // console.log(req.body.pgName);
//         const body=req.body;
//         const numObj={
//             "single occupancy" : 0,
//             "double occupancy" : 1,
//             "triple occupancy" : 2,
//         } 
//         const num = numObj[body.occupancy]
//         // const data = await pgModel.findOne({_id: '6727b380b7ed3dff4f3efd07'});
//         // const reqObj=data.Rooms[num]

//         // console.log("num" ,num)
//         const result = await pgModel.updateOne(
//             { _id: '6727b380b7ed3dff4f3efd07' },                         
//             { 
//                 $set: { 
//                     [`Rooms.${num}.RoomPrice`]: body.Roomprice, // Update RoomPrice for the matched room
//                     [`Rooms.${num}.VacantRooms`]: body.VacantRooms, // Update VacantRooms for the matched room
//                     [`Rooms.${num}.Images`]: imagePath
//                 }
//             }
//         );

//         // console.log("Update Result:", result);
//         console.log("Bosy",body)
//         // console.log(body.Roomprice)
//         res.send("Got the data")
//     }

// module.exports = {AddNewRoom};

// const pgModel = require("../models/AddPGdetails");

// const AddNewRoom = async (req, res) => {
//     try {
//         const body = req.body;
//         const numObj = {
//             "single occupancy": 0,
//             "double occupancy": 1,
//             "triple occupancy": 2,
//         };
//         const num = numObj[body.occupancy];

//         // Collect the image paths from uploaded files
//         const imagePaths = req.files ? req.files.map(file => file.path) : [];

//         // Find the PG details by ID and update the room
//         const result = await pgModel.updateOne(
//             { _id: '6727b380b7ed3dff4f3efd07' },
//             {
//                 $set: {
//                     [`Rooms.${num}.RoomPrice`]: body.Roomprice, // Update RoomPrice for the matched room
//                     [`Rooms.${num}.VacantRooms`]: body.VacantRooms, // Update VacantRooms for the matched room
//                 },
//                 // You can append images to the room object or handle them in a different way
//                 // $addToSet: { [`Rooms.${num}.images`]: { $each: imagePaths } }
//             }
//         );

//         console.log("Update Result:", result);
//         console.log(body);
//         res.send("Got the data and updated successfully");
//     } catch (error) {
//         console.error("Error updating room:", error);
//         res.status(500).send("Error updating room details");
//     }
// };

// module.exports = { AddNewRoom };

const pgModel = require("../models/AddPGdetails");
const multer = require("multer");
const path = require('path');

const express = require('express');
const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads')); // Save to 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Controller function for adding a new room
const AddNewRoom = async (req, res) => {
    // Handle file upload using multer's middleware
    upload.array('images', 10)(req, res, async (err) => { // Limit to 10 images (or adjust as needed)
        if (err) {
            console.log('Multer error:', err);
            return res.status(400).send('Error uploading file: ' + err.message);
        }

        // If no files uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).send('No images uploaded');
        }

        // Log the files for debugging
        console.log('Files uploaded:', req.files);

        const body = req.body;
        const numObj = {
            "single occupancy": 0,
            "double occupancy": 1,
            "triple occupancy": 2,
        };
        const num = numObj[body.occupancy];

        // Prepare the image paths for the database
        const imagePaths = req.files.map(file => `/uploads/${file.filename}`);
        const ownerId = req.user._id;
        try {
            const result = await pgModel.updateOne(
                {createdBy: ownerId}, // Replace with the actual PG ID
                {
                    $set: {
                        [`Rooms.${num}.RoomPrice`]: body.Roomprice,
                        [`Rooms.${num}.VacantRooms`]: body.VacantRooms,
                        [`Rooms.${num}.Images`]: imagePaths,
                    }
                }
            );

            console.log("Update Result:", result);
            res.send("Room details added with image paths");
        } catch (error) {
            console.error("Error updating room:", error);
            res.status(500).send("Error updating room details");
        }
    });
};

module.exports = { AddNewRoom };

