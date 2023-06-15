import Veiculo from './veiculo'

class Moto extends Veiculo {
    public acelerar(): void {
        //subescrever o método herdado
        this.velocidade = this.velocidade + 20
    }
}

//exportar assim facilita a leitura
export default Moto