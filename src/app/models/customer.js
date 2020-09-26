const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    nome: String,
    email: Number,
    senha: String
});

module.exports = mongoose.model('Customer', customerSchema);