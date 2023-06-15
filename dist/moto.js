"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("./veiculo"));
class Moto extends veiculo_1.default {
    acelerar() {
        //subescrever o método herdado
        this.velocidade = this.velocidade + 20;
    }
}
//exportar assim facilita a leitura
exports.default = Moto;
