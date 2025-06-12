const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
})

userSchema.methods.comparePasswords = async function(password){
return await bcrypt.compare(password,this.password);
}


module.exports = mongoose.model('User', userSchema);