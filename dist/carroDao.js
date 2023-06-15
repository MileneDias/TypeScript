"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
const carro_1 = __importDefault(require("./carro"));
class CarroDao {
    constructor() {
        this.nomeTabela = 'tb_carro';
    }
    inserir(object) {
        console.log('lógica de insert');
        return true;
    }
    atualizar(object) {
        console.log('lógica de update');
        return true;
    }
    remover(id) {
        console.log('lógica de delete');
        return new carro_1.default('', 1);
    }
    selecionar(id) {
        console.log('lógica de select');
        return new carro_1.default('', 1);
    }
    selecionarTodos() {
        console.log('lógica de getAll');
        return [new carro_1.default('', 1)];
    }
}
exports.CarroDao = CarroDao;
