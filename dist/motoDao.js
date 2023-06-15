"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoDao = void 0;
const moto_1 = __importDefault(require("./moto"));
class MotoDao {
    constructor() {
        this.nomeTabela = 'tb_moto';
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
        return new moto_1.default();
    }
    selecionar(id) {
        console.log('lógica de select');
        return new moto_1.default();
    }
    selecionarTodos() {
        console.log('lógica de getAll');
        return [new moto_1.default()];
    }
}
exports.MotoDao = MotoDao;
