const Categoria = require('../app/models/category');
const Produto = require('../app/models/product');

exports.getAll = (req, res) => {
    Produto.find(function (err, prods) {
        if (err)
            res.send(err);

        res.status(200).json({
            message: "retorno ok de todos os produtos",
            allProducts: prods
        });
    });
}

exports.get = (req, res) => {
    const id = req.params.productId;
    Produto.findById(id, function (err, produto) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar produto; ID mal formato",
            });
        } else if (produto == null) {
            res.status(400).json({
                message: "Produto não econtrado para o Id passado"
            });
        } else {
            res.status(200).json({
                message: "Produto encontrado",
                produto: produto
            });
        }
    });
}

exports.post = (req, res) => {
    const produto = new Produto();
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.descricao = req.body.descricao;

    Categoria.findOne({ nome: req.body.categoria }, function (err, cat) {
        if (err)
            res.send(err);

        console.log(cat._id)
        produto.categoria = cat._id;

        produto.save(function (error) {
            if (error)
                res.send('Erro ao tentar salvar um novo produto', error);

            res.status(201).json({ message: 'produto inserido com sucesso' });
        });
    });
};

exports.put = (req, res) => {
    const id = req.params.productId;

    Produto.findById(id, (err, produto) => {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar econtrar produto, id mal formado"
            });
        } else if (produto == null) {
            res.status(400).json({
                message: "Produto nao econtrado para o id passado"
            });
        } else {
            produto.nome = req.body.name;
            produto.preco = req.body.preco;
            produto.descricao = req.body.descricao;

            produto.save((error) => {
                if (error)
                    res.send("Erro ao entar atualizar o produto", errror);

                res.status(200).json({
                    message: "produto atualizado com sucesso"
                });
            });
        }
    });
}

exports.delete = (req, res) => {
    Produto.findByIdAndRemove(req.params.productId, (err, produto) => {
        if (err)
            res.status(500).send("Erro ao deletar ", err)

        const response = {
            message: "Produto removido com sucesso",
            id: produto.id
        };
        return res.status(200).send(response);
    });
}