const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer-controller');

//rotas para produto

//get by id
router.get('/:customerId', customerController.getById);
//get all localhost:3000/api/produtos
router.get('/', customerController.getAll);
//post localhost:3000/api/produtos
router.post('/', customerController.post);

module.exports = router;