require('dotenv').config();
const db =require('./config/database');
const cors =require('cors');
const express = require('express');
const PORT = process.env.PORT||5500;
const app = express();
app.set(db);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.listen(PORT,()=>{
    console.log("Server running on port " +PORT);
})
