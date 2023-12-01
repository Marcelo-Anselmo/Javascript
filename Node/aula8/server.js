const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/contact', (req, res) => {
    res.send('Thanks for contacting us!')
})

app.post('/', (req, res) => {
    res.send('Formulário recebido! :D');
});

app.listen(port, () => {
    console.log(`Acessar http://localhost:${port}`)
    console.log(`Servidor rodando na porta ${port}...`)
});