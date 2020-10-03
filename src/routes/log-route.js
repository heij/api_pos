const express = require('express');
const router = express.Router();
const logController = require('../controllers/log.controller');

router.get('/', logController.getAll);

module.exports = router;