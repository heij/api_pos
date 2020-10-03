const repository = require('../repositories/customer-repository');

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

exports.register = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        await repository.register(nome, email, senha);
        return res.status(200).json({
            message: 'Usuário cadastrado com sucesso'
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Falha ao processar requisição'
        });
    }
}