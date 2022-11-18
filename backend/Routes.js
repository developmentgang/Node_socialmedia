const express = require('express')
const app = express()
const client = require('./Connect.js')
const userModel = require("./models");

console.log(client)

app.get('/',async (req,res)=>{
    const user = new userModel({name: 'shubham',});
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
    res.send('hii')

})

module.exports = app;