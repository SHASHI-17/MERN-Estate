const express=require('express');
require('dotenv').config()
const dbConnect = require('./dbConnect');

const app=express();

const PORT = process.env.PORT

app.listen(PORT,()=>{
    dbConnect();
    console.log(`Server is running successfully on port ${PORT}`);
})