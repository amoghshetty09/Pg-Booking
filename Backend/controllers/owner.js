const User=require("../models/pgowner");
const {v4:uuidv4}=require("uuid");
const {setuser}=require("../service/auth")
async function signup(req,res) {
    const{name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.json({ success: true, redirect: "http://localhost:5173/OwnerLogin" });
}

// async function login(req,res) {
//     const{email,password}=req.body;
//     const user=await User.findOne({email,password})
//   if(!user) return res.send("Invalid email or password")
//     console.log("success");
//     return res.redirect("http://localhost:5173/OwnerSignUp");
//     // return res.send("Got the owner login details");
// }


async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    
    if (!user) {
        return res.status(401).send("Invalid email or password"); // Use status codes for errors
    }

    console.log("success");

    
   
    console.log(user);
    // const sessionid=uuidv4();
    // setuser(sessionid,user);
  const token= setuser(user);
    // res.cookie('uid', 'your_session_id', {
    //     httpOnly: true,  // Secure the cookie (accessible only by the server)
    //     secure: false,   // Set to true if using HTTPS
    //     sameSite: 'Lax',  // SameSite policy (protects against CSRF)
    //     maxAge: 1000 * 60 * 60 * 24,  // 1 day expiration
    //   });
    res.cookie("uid",token);
   //res.cookie('uid',sessionid);
    // Instead of redirecting, send a JSON response indicating success
    return res.json({ success: true, redirect: "http://localhost:5173/OwnerHome" });
}


module.exports={
    signup,
    login,
}

