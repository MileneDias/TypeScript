"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaCarros() {
        return this.listaCarros;
    }
    horarioFuncionamento() {
        return 'De segunda a sexa das 8:00 as 18:00 e sábado das 8:00 as 12:00';
    }
}
exports.default = Concessionaria;
//let concessionaria = new Concessionaria('Av Brasil')
//console.log(concessionaria)
