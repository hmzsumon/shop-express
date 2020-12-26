const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

// create a shop
router.post('/', shopController.create);
// get all shops router
router.get('/', shopController.getAll);
//specific shop router
router.get('/:shopId', shopController.findById);

//update a shop router
router.put('/:id', shopController.updateById);

//Delete Shop
router.delete('/:shopId', shopController.deleteById);

module.exports = router;
