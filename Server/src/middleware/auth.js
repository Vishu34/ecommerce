const jwt = require('jsonwebtoken');
const User=require("../model/model")


const auth = async (req, res, next) => {
  try {
    console.log("mynamevishusahugramkapasadadistdurgchhhatiisgadh");
    const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

    console.log("the token is"+token);
   if(!token){
    return console.log("unauthorize")
    
   }
    const verifyuser = jwt.verify(token, "mynamevishusahugramkapasadadistdurgchhhatiisgadh");
    console.log("user verifyis"+verifyuser);

    const rootuser = await User.findOne({ _id: verifyuser._id });
   
    if (!rootuser) {
      throw new Error("user is not exist");
    }

    req.token = token;
    req.rootuser = rootuser;
    console.log( rootuser._id)
    req.rootuserid=rootuser._id
    next();
  } catch (e) {
   console.log("token is not equal to token")
    res.send("token is not equal to token");
    
  }
};

module.exports = auth;
