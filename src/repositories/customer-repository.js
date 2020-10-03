const Customer = require('../app/models/customer');

exports.post = async (data) => {
    let customer = new Customer(data);
    return await customer.save();
}

exports.getAll = async () => {
    return await Customer.find();
}

exports.getById = async (id) => {
    return await Customer.findById(id);
}

exports.put = async (id, data) => {
    return await Customer.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            email: data.email,
            senha: data.senha
        }
    });
}

exports.delete = async (id) => {
    return await Customer.findByIdAndRemove(id);
}

exports.register = async (name, email, password) => {
    const result = await Customer.find({ email: email });
    if (result.length) {
        throw {
            status: 400,
            message: 'Usuário já existente'
        }
    }

    let customer = new Customer();
    customer.nome = name;
    customer.email = email;
    customer.senha = customer.generateHash(password);

    return await customer.save();
}