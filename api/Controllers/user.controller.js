const User = require("../Models/user.model");
const { errorHandler } = require("../utils/error")
const bcrypt=require('bcrypt');

exports.updateUser= async (req,res,next)=>{
        if(req.user.id !== req.params.id) return next(errorHandler(401,'You can only update your own account'))
        try {
            if(req.body.password){
                req.body.password=bcrypt.hashSync(req.body.password,10);
            }
            const updatedUser= await User.findByIdAndUpdate(req.params.id,{
                $set:{
                    username:req.body.username,
                    email:req.body.email,
                    password:req.body.password,
                    avatar:req.body.avatar,
                }
            },{new:true})

            const {password ,...rest}=updatedUser._doc;
            return res.status(200).json(rest)

        } catch (e) {
                next(e);
        }
}