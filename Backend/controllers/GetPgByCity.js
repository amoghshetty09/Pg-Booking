const pgModel =require("../models/AddPGdetails")

const GetPgByCity = async(req,res) => {
    body=req.body;

    // console.log(body.city);

    const pgs= await pgModel.find({City:body.city});
    console.log(pgs);
    res.status(200).send(pgs)
}

module.exports={GetPgByCity}