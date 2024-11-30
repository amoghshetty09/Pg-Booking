const {getuser}=require("../service/auth");

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid=req.cookies?.uid; // ? if u get error as properties of undefined pointing on req.cookie.....
    if(!userUid)
        return res.json({ success: true, redirect: "http://localhost:5173/OwnerLogin" });
    
    const user=getuser(userUid);
  

    if(!user) 
        return res.json({ success: true, redirect: "http://localhost:5173/OwnerLogin" });
    req.user=user;
    console.log(req.user._id);
    console.log("got the id ")
    next();

}



// async function restrictToLoggedinPgUserOnly(req,res,next){
//     const userUid=req.cookies?.uuid; // ? if u get error as properties of undefined pointing on req.cookie.....
//     if(!userUid)
//         return res.json({ success: true, redirect: "http://localhost:5173/UserLogin" });
//     console.log("restrict",userUid);
//     const user=getuser(userUid);
  

//     if(!user) 
//         return res.json({ success: true, redirect: "http://localhost:5173/UserLogin" });
//     req.user=user;
//     console.log(req.user._id);
//     console.log("got the id ")
//     next();

// }



module.exports={
    restrictToLoggedinUserOnly,
    // restrictToLoggedinPgUserOnly,
}