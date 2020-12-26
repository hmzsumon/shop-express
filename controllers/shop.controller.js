shopService = require('../services/shop.service');

//Create
module.exports.create = async (req, res, next) => {
	try {
		const shop = await shopService.create(req.body);
		return res.status(200).json(shop);
	} catch (e) {
		console.error(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
};

//Get All
module.exports.getAll = async (req, res, next) => {
	try {
		const shops = await shopService.getAll();
		return res.json(shops);
	} catch (e) {
		console.error(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
};

// Get Specific shop
module.exports.findById = async (req, res, next) => {
	try {
		const specificShop = await shopService.findById(req.params.shopId);
		return res.json(specificShop);
	} catch (e) {
		console.error(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
};

//Update shop
module.exports.updateById = async (req, res, next) => {
	try {
		const shop = await shopService.findById({ _id: req.params.id });
		if (shop) {
			shop.name = req.body.name ? req.body.name : shop.name;
			shop.owner = req.body.owner ? req.body.owner : shop.owner;
			shop.category = req.body.category ? req.body.category : shop.category;
			const updatedShop = await shop.save();
			return res.json(updatedShop);
		}
	} catch (e) {
		console.error(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
};

//Delete Shop
module.exports.deleteById = async (req, res, next) => {
	try {
		const removeShop = await shopService.delete({ _id: req.params.shopId });
		return res.json(removeShop);
	} catch (e) {
		console.error(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
};
