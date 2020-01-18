const express = require('express');
const mongoose = require('mongoose');
const port = 3333;
const routes = require('./routes');

const app = express();

// Conexao com o banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-7bhqu.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Configuracao que diz que a comunicao ira acontecer atraves de json entre o front e o back.
app.use(express.json());
// Configuracao que diz que vamos utilizar as rotas do arquivo routes.
app.use(routes);


app.listen(port, () => console.log(`Listening on port -> ` + port));  