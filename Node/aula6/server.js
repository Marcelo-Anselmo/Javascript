const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contact', (req, res) => {
    res.send('Thanks for contacting us!')
})

app.listen(port, () => {
    console.log(`Acessar http://localhost:${port}`)
    console.log(`Servidor rodando na porta ${port}...`)
});