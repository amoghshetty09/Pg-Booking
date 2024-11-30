    const mongoose = require("mongoose");

    const PgSchema = mongoose.Schema(
        {
            PGname: {
                type: String,
                required: true,
            },
            PhNumber: {
                type: Number,
                required: true,
            },
            Address: {
                type: String,
                required: true,
            },
            City: {
                type: String,
                required: true,
            },
            PriceRange: {
                type: Number,
                required: true,
            },
            Rooms: [
                {
                    RoomType: {
                        type: String,
                        required: true,
                    },
                    RoomPrice: {
                        type: Number,
                        required: true,
                    },
                    VacantRooms: {
                        type: Number,
                        required: true,
                    },
                    Images: [
                        {
                            type: String, // URL or file path of the image
                            required: false, // Not required in case no images are added
                        },
                    ],
                },
            ],

            Review: [
                    {rating: {
                        type: Number,
                        // required: true,
                        min: 1,
                        max: 5,
                    },},
            ],
            Feedback: [
                {
                    message: {
                        type: String,
                        required: true,
                    },
                },
            ],
            
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "owners",
            },

            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "pgusers",
            },

            Gender:{
                type:String,
                required:true,
            },

            Food:{
                type:String,
                required:true,

            },

            pgBookings: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "pgusers",
                    },
                    email: {
                        type: String,
                        required: true,
                    },
                    bookingDate: {
                        type: Date,
                        default: Date.now,
                    },
                    roomBooked: {
                        type: String,
                        required: true,
                    },
                    bookingStatus: {
                        type: String,
                        enum: ["confirmed", "pending", "cancelled"], // Add other statuses as needed
                        default: "pending",
                    },
                },
            ],

            scheduledVisits: [
                {
                    email:{
                        type: String,
                        required: true,
                    },
                    name: {
                        type: String,
                        required: true,
                    },
                    phone: {
                        type: String,
                        required: true,
                    },
                    visitDate: {
                        type: Date,
                        required: true,
                    },
                    status: {
                        type: String,
                        enum: ["pending", "completed", "cancelled"], // Add other statuses as needed
                        default: "pending",
                    },
                },
            ],
        },
    );

    const pgModel = mongoose.model("PGdetails", PgSchema);

    module.exports = pgModel;
