const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || "http://localhost:5000"

app.use(cors)
app.use(express.json())

app.get('/',(req,res) => {
    res.send('Hello World TESTING API').status(201)
})

console.log('Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });



