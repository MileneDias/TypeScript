"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualquer_coisa2 = void 0;
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
exports.default = Pessoa;
//let pessoa = new Pessoa('Milene', 'Ford Fordor 1930')
exports.qualquer_coisa2 = 1;
