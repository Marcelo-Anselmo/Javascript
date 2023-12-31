const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
    console.log(`Acessar http://localhost:${port}`)
    console.log(`Servidor rodando na porta ${port}...`)
});