/////////////////////////////
const express = require('express');
const productController = require('../controllers/products_controller');
const router = express.Router();

/////////////////////////////
// Get All Products Test Requests (postman)
router.get('/', productController.get_all_product);
// Get All Products
router.get('/products', productController.get_all_product);
// Get One Product with id
router.get('/one_account/:id', productController.get_one_product);
// New Product
router.post('/create_product', productController.create_product);
// Update Product with id
router.put('/update_product/:id', productController.update_product);
// Delete Product with id
router.delete('/delete_product/:id', productController.delete_product);
/////////////////////////////

module.exports = router;
