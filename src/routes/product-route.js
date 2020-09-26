const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');


//rotas para produto

//get by id
router.get('/:productId', productController.getById);
//get all localhost:3000/api/produtos
router.get('/', productController.getAll);
//post localhost:3000/api/produtos
router.post('/', productController.post);
//put
router.put('/:productId', productController.put);
//delete
router.delete('/:productId', productController.delete);

module.exports = router;