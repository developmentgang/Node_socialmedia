const express = require('express')
const app = express()
const userModel = require("./models");
const connect = require('./Connect')
var cors = require('cors');

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
    res.send('hii')
})

app.post('/api/create-user', async (req,res)=>{
  console.log(req.body)
  // const {email,password} =req.data
  const user = new userModel({email: req.body?.data?.email,password: req.body?.data?.password});
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
  res.send('hii')
})

module.exports = app;