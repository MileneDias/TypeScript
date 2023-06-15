"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualquer_coisa = void 0;
const veiculo_1 = __importDefault(require("./veiculo"));
class Carro extends veiculo_1.default {
    constructor(modelo, portas) {
        super(); //apenas pra fazer ajuste de contexto
        this.modelo = modelo;
        this.portas = portas;
    }
}
exports.default = Carro;
//let carroA = new Carro('Veloster', 3)
exports.qualquer_coisa = 'Teste';
