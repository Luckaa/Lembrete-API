'use strict'
const Express = require("express")
const Mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Cors = require("cors")
const Config = require("../config.json");

const LivroRoute = require("./route/LivroRoute");
const LembreteRoute = require("./route/LembreteRoute");


class App {

    constructor() {

        this.app;

    }
    init() {

        this.app = Express();
        this.app.use(bodyParser.json());
        this.app.use(Cors());

        Mongoose.connect(`mongodb://${Config.development.db.user}:${Config.development.db.password}@${Config.development.db.url}/${Config.development.db.name}`, {
            useNewUrlParser: true
        }).then(e =>{console.log("conectou ao banco")});

        // Instanciando as rotas
        new LivroRoute(this.app);
        new LembreteRoute(this.app);

       
        this.app.get("/", (req, res, next) => {
            res.json({
                System: "Loja de Livros - API",
                Version: "1.0.0",
                Message: "Seja bem-vindo ao Sistema de Gerenciamento de Livros"
            })
        });

        this.app.listen(`${Config.apiPort}`, () => {
            console.log(`API rodando em http://localhost:${Config.apiPort}`);
        })

    }

}
new App().init();