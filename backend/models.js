const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({ 
  firstname:{
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  password:{
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0,
  },
  created:{
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: true
  },

});

const User = mongoose.model("tb_users", UserSchema);

module.exports = User;