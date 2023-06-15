"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const concessionaria_1 = __importDefault(require("./concessionaria"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = 'tb_concessionaria';
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
        return new concessionaria_1.default('', []);
    }
    selecionar(id) {
        console.log('lógica de select');
        return new concessionaria_1.default('', []);
    }
    selecionarTodos() {
        console.log('lógica de getAll');
        return [new concessionaria_1.default('', [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
