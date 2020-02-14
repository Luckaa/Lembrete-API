'use strict'
const LembreteController = require("../controller/LembreteController");

class LembreteRoute{
    constructor (app){
        app.get("/lembretes", LembreteController.buscarTodos);
        app.post("/lembretes", LembreteController.adicionar);
        app.put("/lembretes", LembreteController.editar);
        app.delete("/lembretes", LembreteController.remover);
    }
}

module.exports = LembreteRoute;