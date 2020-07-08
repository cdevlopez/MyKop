/////////////////////////////
const express = require('express');
const orderController = require('../controllers/orders_controller');
const router = express.Router();

/////////////////////////////
// Get All orders Test Requests (postman)
router.get('/', orderController.get_all_orders);
// Get All orders
router.get('/orders', orderController.get_all_orders);
// Get One order with id
router.get('/one_order/:id', orderController.get_one_order);
// Create order
router.post('/create_order', orderController.create_order);
// Update order with id
router.put('/update_order/:id', orderController.update_order);
// Delete order with id
router.delete('/delete_order/:id', orderController.delete_order);
/////////////////////////////

module.exports = router;