/////////////////////////////
const express = require('express');
const ordersPlacedController = require('../controllers/ordersPlaced_controller');
const router = express.Router();

/////////////////////////////
// Get All ordersPlaced Test Requests (postman)
router.get('/', ordersPlacedController.get_all_ordersPlaced);
// Get All ordersPlaced
router.get('/ordersPlaced', ordersPlacedController.get_all_ordersPlaced);
// Get One ordersPlaced with id
router.get('/one_ordersPlaced/:id', ordersPlacedController.get_one_ordersPlaced);
// // Create ordersPlaced
// router.post('/create_ordersPlaced', ordersPlacedController.create_ordersPlaced);

// Update ordersPlaced with id
router.put('/update_ordersPlaced/:id', ordersPlacedController.update_ordersPlaced);
// Delete ordersPlaced with id
router.delete('/delete_ordersPlaced/:id', ordersPlacedController.delete_ordersPlaced);
/////////////////////////////

module.exports = router;