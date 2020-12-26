const Shop = require('../models/Shop.model');

// Craete Shop
module.exports.create = (shop) => {
	return Shop.create(shop);
};

// Get all Shops
module.exports.getAll = (shops) => {
	return Shop.find(shops);
};

//Get specific shop
module.exports.findById = (shopId) => {
	return Shop.findById(shopId);
};

// Update a Shop
module.exports.findById = (updateShop) => {
	return Shop.findById(updateShop);
};

// //Delete Shop
module.exports.delete = (deleteShop) => {
	return Shop.remove(deleteShop);
};
