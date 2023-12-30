const router=require('express').Router();
const { updateUser, deleteUser } = require('../Controllers/user.controller.js');
const { verifyToken } = require('../utils/verifyUser.js');

router.post('/update/:id',verifyToken,updateUser);
router.delete('/delete/:id',verifyToken,deleteUser);

module.exports=router