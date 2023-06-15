"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const pessoa_1 = __importDefault(require("./pessoa"));
class PessoaDao {
    constructor() {
        this.nomeTabela = 'tb_pessoa';
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
        return new pessoa_1.default('', '');
    }
    selecionar(id) {
        console.log('lógica de select');
        return new pessoa_1.default('', '');
    }
    selecionarTodos() {
        console.log('lógica de getAll');
        return [new pessoa_1.default('', '')];
    }
}
exports.PessoaDao = PessoaDao;
