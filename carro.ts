import Veiculo from './veiculo'

export default class Carro extends Veiculo{
    private portas: number

    constructor(modelo: string, portas: number) {
        super() //apenas pra fazer ajuste de contexto
        this.modelo = modelo
        this.portas = portas
    }

}

//let carroA = new Carro('Veloster', 3)

export let qualquer_coisa: string = 'Teste'