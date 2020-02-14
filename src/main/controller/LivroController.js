'use strict';

const LivroModel = require("../model/Livro");
const Mongoose = require("mongoose");
const Livro = Mongoose.model("Livro");



class LivroController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Livro.find({}));
        } catch (error) {
            res.status(400).send("Erro ao buscar Livros!");
        }
    }
    static async adicionar(req, res) {
        try {
            // console.log(req.body);
            // res.status(200).send({
            //     body: req.body
            // })
            res.json(await Livro.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar Livros ");
        }
    }
    static async editar(req, res) {
        try {

            console.log("Editando id: " + req.body._id);
            res.json(await Livro.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao atualizar Livro");
        }
    }
    static async remover(req, res) {
        console.log(req.body.modelo)
        try {
            console.log("Removendo id: " + req.body._id);
            res.json(await Livro.findByIdAndRemove(req.body._id));
        } catch (error) {
            res.status(400).send("Erro ao remover Livro");
        }
    }



}
module.exports = LivroController;