const repository = require('../repositories/customer-repository');

exports.post = async (req, res) => {
    try {
        await repository.post({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        });

        return res.status(200).json({
            message: 'Cliente inserido com sucesso'
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
}

exports.getById = async (req, res) => {
    try {
        let data = await repository.getById(req.params.customerId);
        return res.status(200).json({
            data: data
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
}

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
        await repository.delete(req.params.customerId);

        return res.status(200).json();
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
}