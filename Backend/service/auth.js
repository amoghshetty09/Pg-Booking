const jwt=require("jsonwebtoken")
const secret="Amogh$123"
function setuser(user)
{
   
    const payload={
        _id: user._id,
        email:user.email,
        // ...user,
    };
    return jwt.sign(payload,secret);
}


function getuser(token)
{
    if(!token)return null;
    try{  
        console.log("getuser",token);                                  // try and catch is used bcz if we use wrong token then server won't crash instead go to previus page
        return jwt.verify(token,secret);
    }catch(error){
        return null;
    }
}

// const sessionIdToUserMap=new Map()
 
// function setuser(id,user)
// {
//     const a=sessionIdToUserMap.set(id,user);
  
//     console.log("setted id",a);
// }

// function getuser(id)
// {
//     const b= sessionIdToUserMap.get(id);
//     console.log("getted id",b)
//     return b;
// }

module.exports={
    setuser,
    getuser,
};