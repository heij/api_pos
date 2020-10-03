let uuid = require('uuid');
let logDB = require('../../log-data');

class Log {
    constructor(method, url, timestamp) {
        this.method = method;
        this.url = url;
        this.timestamp = timestamp;
        this.id = uuid.v4();
    }

    save() {
        logDB.save({
            method: this.method,
            url: this.url,
            timestamp: this.timestamp,
            id: this.id
        });

        return this;
    }
}

module.exports = Log;