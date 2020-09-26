const Produto = require('../app/models/product');
const Categoria = require('../app/models/category');

exports.post = async (data) => {
    let cat = await Categoria.findOne({ nome: data.categoria });
    data.categoria = cat._id;

    let produto = new Produto(data);

    return await produto.save();
}

exports.getAll = async () => {
    return await Produto.find();
}

exports.getById = async (id) => {
    return await Produto.findById(id);
}

exports.put = async (id, data) => {
    return await Produto.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            preco: data.preco,
            descricao: data.descricao
        }
    });
}

exports.delete = async (id) => {
    return await Produto.findByIdAndRemove(id);
}