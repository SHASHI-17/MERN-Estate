const express=require('express');
const app=express();
require('dotenv').config()
const dbConnect = require('./dbConnect.js');
const userRouter = require('./Routes/user.route.js')
const authRouter=require('./Routes/auth.route.js')
const cookieParser=require('cookie-parser');

app.use(express.json())
app.use(cookieParser())
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    dbConnect();
    console.log(`Server is running successfully on port ${PORT}`);
})
