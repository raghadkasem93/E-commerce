const user = require("../Schema/userinfo")
const bcrypt = require('bcryptjs');  
const jwt= require('jsonwebtoken')

const Joi = require('joi');
//Validate The User//
const validateUser = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string()
    .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required(),
    password: Joi.string().min(6).max(100).required(),
    phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(), 
    role: Joi.string().valid('admin', 'user').optional(),
  });

  return schema.validate(data);
};


// User register via post//
exports.register= async(req,res)=>{ 
try{

  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message); 
const users = new user(req.body)
//hashPassword//
const hashingPass= await bcrypt.hash(req.body.password, 10);
const existingEmail = await user.findOne({ email: req.body.email });
if (existingEmail) {
  return res.status(400).json({ message: "Diese E-Mail ist bereits registriert." });
}

users.password =hashingPass;
let create =await users.save()
res.status(201).json({message:"User created successfully", create})
}
catch(error){
res.status(400).json({message:"The User Allready exist"})
}


}
// User login via post//
exports.login = async (req, res) => {
  try {
    const users = await user.findOne({ email: req.body.email })
    if (!users) {
      return res.status(401).json({ message: "User Allready Registerd" })
    }

    const isMatch = await users.comparePasswords(req.body.password);
    if (isMatch === false) {
      return res.status(401).json({ message: "Invalid password and email" });
    }

const token = jwt.sign({ userId: users._id ,userName: users.name},'secret')
    res
      .status(200)
      .json({ message: "User logged in successfully", user: {name:users.name,email:users.email ,token}});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }}



