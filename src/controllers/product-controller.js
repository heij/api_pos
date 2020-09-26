const repository = require('../repositories/product-repository');

exports.getAll = async (req, res) => {
    try {
        let data = await repository.getAll();
        return res.status(200).json({
            data: data
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.getById = async (req, res) => {
    try {
        let data = await repository.getById(req.params.productId);
        return res.status(200).json({
            data: data
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.post = async (req, res) => {
    try {
        await repository.post({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao,
            categoria: req.body.categoria
        });

        return res.status(200).json({
            message: 'Produto inserido com sucesso'
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
};

exports.put = async (req, res) => {
    try {
        let data = await repository.put(req.params.id, req.body.data);

        return res.status(200).json({
            data: data
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.delete = async (req, res) => {
    try {
        await repository.delete(req.params.productId);

        return res.status(200).json();
    } catch (err) {
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
}