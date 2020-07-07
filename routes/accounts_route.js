/////////////////////////////
const express = require('express');
const accountController = require('../controllers/accounts_controller');
const router = express.Router();

/////////////////////////////
// Get All accounts Test Function (postman)
router.get('/', accountController.get_all_account);
// Get All accounts
router.get('/accounts', accountController.get_all_account);
// Get One Account with id
router.get('/one_account/:id', accountController.get_one_account);
// Create Account
router.post('/create_account', accountController.create_account);
// Update Account with id
router.put('/update_account/:id', accountController.update_account);
// Delete Account with id
router.delete('/delete_account/:id', accountController.delete_account);
/////////////////////////////

module.exports = router;
