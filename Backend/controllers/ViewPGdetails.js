const pgModel =require("../models/AddPGdetails")

const ViewPgDetails =async (req,res) => {        
        // console.log(req.body.pgName);
        // const body=req.body;
        const ownerId = req.user._id;
        const result = await pgModel.find({createdBy: ownerId })
        console.log("resultnnj",result)
        res.send(result);
        
        // console.log(body)
    }

module.exports = {ViewPgDetails};
