const router=require('express').Router();
const { updateUser } = require('../Controllers/user.controller.js');
const { verifyToken } = require('../utils/verifyUser.js');

router.post('/update/:id',verifyToken,updateUser);

module.exports=router