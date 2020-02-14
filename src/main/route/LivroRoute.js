'use strict'
const LivroController = require("../controller/LivroController");

class LivroRoute{
    constructor (app){
        app.get("/livros", LivroController.buscarTodos);
        app.post("/livros", LivroController.adicionar);
        app.put("/livros", LivroController.editar);
        app.delete("/livros", LivroController.remover);
    }
}

module.exports = LivroRoute;