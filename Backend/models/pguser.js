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

const Pguser=mongoose.model("Pguser",userschema);
module.exports=Pguser;