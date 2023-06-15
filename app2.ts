//Pode-se importar vários itens de um mesmo arquivo
import Carro, {qualquer_coisa} from './carro'
/*Cada arquivo só pode ter um valor default, neste caso é
a class Pessoa em seu arquivo de origem, portanto o import
é feito desta forma*/
import Pessoa, { qualquer_coisa2 } from './pessoa'
import Concessionaria from './concessionaria'

//criar lista de carros
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('Ford Fordor 1930', 4)
let carroC = new Carro('cerato', 4)

//montar lista de carros da concessionaria
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Brasil', listaDeCarros)

//exibir lista de carros
//console.log(concessionaria.mostrarListaCarros())

//comprar o carro
let cliente = new Pessoa('Milene', 'Ford Fordor 1930')
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem)

