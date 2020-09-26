const Cliente = require('../app/models/customer');

exports.post = (req, res) => {
    const cliente = new Cliente();
    cliente.nome = req.body.nome;
    cliente.preco = req.body.email;
    cliente.descricao = req.body.senha;

    cliente.save((error) => {
        if (error)
            res.send('Erro ao tentar salvar um novo cliente', error);

        res.status(201).json({ message: 'cliente inserido com sucesso' });
    });
}

exports.getById = (req, res) => {
    Cliente.findById(req.params.customerId, (err, customer) => {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar cliente; ID mal formato",
            });
        } else if (customer == null) {
            res.status(400).json({
                message: "Cliente não encontrado para o Id passado"
            });
        } else {
            res.status(200).json({
                message: "Cliente encontrado",
                customer: customer
            });
        }
    });
}
exports.getAll = (req, res) => {
    Cliente.find((err, customers) => {
        if (err)
            res.send(err);

        res.status(200).json({
            message: "retorno ok de todos os clientes",
            customers: customers
        });
    });

}