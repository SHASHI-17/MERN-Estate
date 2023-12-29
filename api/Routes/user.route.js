const router=require('express').Router();
const { test } = require('../Controllers/user.controller.js');



router.get('/test',test);


module.exports=router