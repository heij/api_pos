const repository = require('../repositories/log-repository');

exports.getById = async (req, res) => {
    try {
        let data = repository.getById(req.params.customerId);
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