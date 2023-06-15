import { ConcessionariaInterface } from './concessionaria_interface'
import Carro from './carro'

export default class Concessionaria implements ConcessionariaInterface {
    private endereco!: string
    private listaCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaCarros(): Array<Carro> {
        return this.listaCarros
    }

    public horarioFuncionamento(): string {
        return 'De segunda a sexa das 8:00 as 18:00 e sábado das 8:00 as 12:00'
    }
}

//let concessionaria = new Concessionaria('Av Brasil')
//console.log(concessionaria)