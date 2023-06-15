"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { ConcessionariaDao } from './concessionariaDao'
//import { PessoaDao } from './pessoaDao'
const concessionaria_1 = __importDefault(require("./concessionaria"));
const pessoa_1 = __importDefault(require("./pessoa"));
const carroDao_1 = require("./carroDao");
const carro_1 = __importDefault(require("./carro"));
const motoDao_1 = require("./motoDao");
const moto_1 = __importDefault(require("./moto"));
const Dao_1 = require("./Dao");
//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
let concessionaria = new concessionaria_1.default('', []);
let pessoa = new pessoa_1.default('', '');
let dao5 = new Dao_1.Dao();
let dao6 = new Dao_1.Dao();
dao5.inserir(concessionaria);
dao6.atualizar(pessoa);
//_________________________//__________________________//
let dao3 = new carroDao_1.CarroDao();
let carros = new carro_1.default('', 0);
dao3.inserir(carros);
let dao4 = new motoDao_1.MotoDao();
let motos = new moto_1.default();
dao4.atualizar(motos);
