/////////////////////////////
const express = require('express');
const comController = require('../controllers/commandes_controller');
const router = express.Router();

/////////////////////////////
// Get All commandes Test Function (postman)
router.get('/', comController.get_all_commande);
// Get All commandes
router.get('/commande', comController.get_all_commande);
// Get One commande with id
router.get('/one_commande/:id', comController.get_one_commande);
// Create commande
router.post('/create_commande', comController.create_commande);
// Update commande with id
router.put('/update_commande/:id', comController.update_commande);
// Delete commande with id
router.delete('/delete_commande/:id', comController.delete_commande);
/////////////////////////////

module.exports = router;