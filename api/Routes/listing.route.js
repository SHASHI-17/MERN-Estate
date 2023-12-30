const { createListing } = require('../Controllers/listing.controller.js');
const { verifyToken } = require('../utils/verifyUser.js');

const router = require('express').Router();

router.post('/create',verifyToken,createListing);

module.exports=router