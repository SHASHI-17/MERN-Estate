const { createListing, deleteListing, updateListing, getListing } = require('../Controllers/listing.controller.js');
const { verifyToken } = require('../utils/verifyUser.js');

const router = require('express').Router();

router.post('/create',verifyToken,createListing);
router.delete('/delete/:id',verifyToken,deleteListing);
router.post('/update/:id',verifyToken,updateListing);
router.get('/get/:id',getListing);

module.exports=router