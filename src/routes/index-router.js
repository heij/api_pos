const express = require('express')
const router = express.Router();
const logService = require('../services/log-service');

router.use('/', logService.saveLog);

module.exports = router;