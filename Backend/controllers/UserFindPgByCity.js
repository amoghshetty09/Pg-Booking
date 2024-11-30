const pgModel =require("../models/AddPGdetails")

const Getcities = async(req,res) => {
    const cities = await pgModel.distinct('City');
    console.log(cities)
    res.send(cities)
}

module.exports={Getcities}