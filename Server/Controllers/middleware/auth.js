const jwt = require('jsonwebtoken');


module.exports=(req,res,next)=>{
try{

const fulltoken = req.headers.authorization;
const token= fulltoken?.split(' ')[1]
if (!token) 
  res.status(400).json({ message: "Access denied. No token provided." });
  

  const decoded = jwt.verify(token,'secret');
req.User = decoded
next()


}
catch(err){
res.status(401).send("Invalid Token")

}

}