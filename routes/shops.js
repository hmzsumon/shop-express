const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');
const userController = require('../controllers/user.controller');

// create a shop
router.post('/', userController.isAuthenticated, shopController.create);
// get all shops router
router.get('/', shopController.getAll);
//specific shop router
router.get('/:shopId', shopController.findById);

//update a shop router
router.put('/:id', userController.isAuthenticated, shopController.updateById);

//Delete Shop
router.delete('/:shopId', shopController.deleteById);

module.exports = router;
