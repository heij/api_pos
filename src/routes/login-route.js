const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer-controller');;

router.post('/create', customerController.register);

module.exports = router;