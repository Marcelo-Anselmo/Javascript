exports.homePage = (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    console.log(req.body);
    res.send(`Hello i am your new post route ${req.body.nome}`);
};