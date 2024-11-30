// const pgModel =require("../models/AddPGdetails")
const userModel =require("../models/pguser")

const UserProfile = async(req,res) => {
    // const result = await pgModel.find({})
    const userId = req.user._id;
    const result = await userModel.findById(userId);

    console.log("result",result)

    const profile ={
        "user": {
            Userid:userId,
            email: result.email,
            },
        }
        console.log("profile",profile);
        res.send(profile);
    }   

module.exports = {UserProfile};