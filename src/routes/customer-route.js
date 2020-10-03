const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer-controller');


router.get('/:customerId', customerController.getById);
router.get('/', customerController.getAll)
router.put('/:customerId', customerController.put);
router.delete('/:customerId', customerController.delete);

module.exports = router;