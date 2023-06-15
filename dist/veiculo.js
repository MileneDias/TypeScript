"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualquer_coisa = void 0;
class Veiculo {
    constructor() {
        this.velocidade = 0;
    }
    //VOID são funções que não possuem retorno
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    //o retorno desta função é do tipo NUMBER
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.default = Veiculo;
//let carroA = new Carro('Veloster', 3)
exports.qualquer_coisa = 'Teste';
