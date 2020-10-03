const { getAll } = require("./repositories/log-repository");

let logs = [];

exports.getAll = () => {
    return logs;
}

exports.save = (data) => {
    return logs.push(data);
}