"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Pode-se importar vários itens de um mesmo arquivo
const carro_1 = __importDefault(require("./carro"));
/*Cada arquivo só pode ter um valor default, neste caso é
a class Pessoa em seu arquivo de origem, portanto o import
é feito desta forma*/
const pessoa_1 = __importDefault(require("./pessoa"));
const concessionaria_1 = __importDefault(require("./concessionaria"));
//criar lista de carros
let carroA = new carro_1.default('dodge journey', 4);
let carroB = new carro_1.default('Ford Fordor 1930', 4);
let carroC = new carro_1.default('cerato', 4);
//montar lista de carros da concessionaria
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new concessionaria_1.default('Av Brasil', listaDeCarros);
//exibir lista de carros
//console.log(concessionaria.mostrarListaCarros())
//comprar o carro
let cliente = new pessoa_1.default('Milene', 'Ford Fordor 1930');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem);
