'use strict';

const LembreteModel = require("../model/Lembrete");
const Mongoose = require("mongoose");
const Lembrete = Mongoose.model("Lembrete");



class LembreteController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Lembrete.find({}));
        } catch (error) {
            res.status(400).send("Erro ao buscar Lembretes!");
        }
    }
    static async adicionar(req, res) {
        try {
            // console.log(req.body);
            // res.status(200).send({
            //     body: req.body
            // })
            res.json(await Lembrete.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar Lembretes ");
        }
    }
    static async editar(req, res) {
        try {

            console.log("Editando id: " + req.body._id);
            res.json(await Lembrete.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao atualizar Lembrete");
        }
    }
    static async remover(req, res) {
        console.log(req.body.modelo)
        try {
            console.log("Removendo id: " + req.body._id);
            res.json(await Lembrete.findByIdAndRemove(req.body._id));
        } catch (error) {
            res.status(400).send("Erro ao remover Lembrete");
        }
    }



}
module.exports = LembreteController;