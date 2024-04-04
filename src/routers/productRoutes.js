const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProductsInStock);

router.get('/price/:userId/:productName', productController.getPriceForUserAndProduct);

module.exports = router;