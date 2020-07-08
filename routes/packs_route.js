/////////////////////////////
const express = require('express');
const packController = require('../controllers/packs_controller');
const router = express.Router();

/////////////////////////////
// Get All Packs Test Requests (postman)
router.get('/', packController.get_all_pack);
// Get All Packs
router.get('/packs', packController.get_all_pack);
// Get One Pack with id
router.get('/one_account/:id', packController.get_one_pack);
// New Pack
router.post('/create_pack', packController.create_pack);
// Update Pack with id
router.put('/update_pack/:id', packController.update_pack);
// Delete Pack with id
router.delete('/delete_pack/:id', packController.delete_pack);
/////////////////////////////

module.exports = router;
