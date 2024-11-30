const mongoose=require("mongoose");
const userschema= new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true,
    // },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
 
})

const Pgowner=mongoose.model("owner",userschema);
module.exports=Pgowner;

