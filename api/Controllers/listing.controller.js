const Listing = require('../Models/listing.model.js');
const { errorHandler } = require('../utils/error.js');
exports.createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (e) {
        next(e)
    }
}

exports.deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(404, 'Listing not found'));
    }
    if (req.user.id !== listing.userRef) {
        return next(401, 'You can only delete your own listings !')
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        return res.status(200).json('Listing has been deleted !')
    } catch (error) {
        next(error);
    }

}

exports.updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    console.log(listing);
    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) return next(errorHandler(401, 'You can only update your own listings !'))

    try {
        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(updatedListing);
    } catch (e) {
        return next(e);
    }
}

exports.getListing=async (req,res,next)=>{
    try {
        const listing = await Listing.findById(req.params.id);
        if(!listing) return next(errorHandler(404,'Listing not found'));
        return res.status(200).json(listing)
    } catch (e) {
        return next(e)
    }
}