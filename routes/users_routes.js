/////////////////////////////
const express = require('express');
const userController = require('../controllers/users_controller');
const router = express.Router();

router.post('/auth', userController.login);

module.exports = router;