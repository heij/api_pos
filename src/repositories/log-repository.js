const Log = require('../app/models/log');
const logDB = require('../log-data');

exports.getById = async (data) => {
    // return new Log().getById(data.id);
}

exports.getAll = async (data) => {
    return logDB.getAll();
}

exports.save = async (data) => {
    let log = new Log(data.method, data.url, data.timestamp);
    return log.save();
}