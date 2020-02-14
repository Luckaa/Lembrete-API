'use strict';

const Mongoose = require('mongoose');

class Lembrete extends Mongoose.Schema {

    constructor() {

        super({
            livroHeader:{
                type: String
            },
            diaSemana: {
                type: String
            },
            horaDia: {
                type: String
            }
        });

        Mongoose.model('Lembrete', this);
    } // constructornpm

} // class

new Lembrete();

module.exports = Lembrete;