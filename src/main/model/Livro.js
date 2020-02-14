'use strict';

const Mongoose = require('mongoose');

class Livro extends Mongoose.Schema {

    constructor() {

        super({
            foto:{
                type: String
            },
            nome: {
                type: String
            },

            paginas: {
                type: Number
            }
        });

        Mongoose.model('Livro', this);
    } // constructornpm

} // class

new Livro();

module.exports = Livro;