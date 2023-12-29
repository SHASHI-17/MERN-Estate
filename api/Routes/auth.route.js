const { signup, signin } = require('../Controllers/auth.controller.js');

const router=require('express').Router();

router.post('/signup',signup);
router.post('/signin',signin);

module.exports=router