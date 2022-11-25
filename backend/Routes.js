const express = require('express')
const app = express()
const userModel = require("./models");
const client = require('./Connect')
var cors = require('cors');
const User = require('./models');

app.use(cors());
app.use(express.json())

app.get('/',async (req,res)=>{
    const user = new userModel({email: 'shubham@gmail.com',password:'123',firstname:"shubham",lastname:"garg",password: "dsfjdfksjf"});
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
    res.send('Done')
})

app.post('/api/create-user', async (req,res)=>{
  const user = new userModel({
    email: req.body?.data?.email,
    password: req.body?.data?.password,
    firstname:req.body?.data?.firstname,
    lastname:req.body?.data?.lastname,
    age:req.body?.data?.age});
    
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
  res.send('hii')
})

app.post('/api/auth', (req,res)=>{
  User.find({email: req.body?.data?.email, password: req.body?.data?.password },(error,data)=>{
    if(error){
      res.send(error)
    }
    else{
      res.send(data)
    }
  })
})

module.exports = app;