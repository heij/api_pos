require('dotenv').config();
const Log = require('../app/models/log');

exports.saveLog = async (req, res, next) => {
    let log = new Log(req.method, req.url, new Date().getTime());
    log.save();
    next();
}