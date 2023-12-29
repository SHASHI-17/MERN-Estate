const User=require('../Models/user.model.js');
const bcrypt=require('bcrypt');
const { errorHandler } = require('../utils/error.js');
const jwt = require('jsonwebtoken');

exports.signup=async (req,res,next)=>{
        const {username, email ,password }=req.body;
        const hashedpassword=bcrypt.hashSync(password,10);

        try {
            const newUser=await  User.create({username,email,password:hashedpassword});
            return res.json("User has been Created Successfully");
        } catch (e) {
                next(e)
        }
}

exports.signin= async (req,res,next)=>{
        try {
                const validUser= await User.findOne({email:req.body.email});
                if(!validUser) return next(errorHandler(404,'User not found!'))
                const validPassword = await bcrypt.compareSync(req.body.password,validUser.password);
                if(!validPassword) return next(errorHandler(401,'Wrong Credentials!'))
                
                const token =  jwt.sign({id:validUser._id},process.env.JWT_SECRET);
                const {password,...rest}=validUser._doc
                return res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);

        } catch (e) {
                next(e);
        }
}

