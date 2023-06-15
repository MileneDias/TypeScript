import Carro from './carro'

export default class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro!: Carro

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}

//let pessoa = new Pessoa('Milene', 'Ford Fordor 1930')

export let qualquer_coisa2: number = 1
