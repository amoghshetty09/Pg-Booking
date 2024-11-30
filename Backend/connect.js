const mongoose=require("mongoose");

async function connectomongodb(url)
{
    return mongoose.connect(url);
}

module.exports={
    connectomongodb,
}


