export default class Veiculo {
    /*-variáveis PRIVATE não podem ser acessadas de fora da classe
    -variáveis PROTECTED permitem alterações de valores em
    atributos herdados*/
    protected modelo!: string
    protected velocidade: number = 0

    //VOID são funções que não possuem retorno
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    //o retorno desta função é do tipo NUMBER
    public velocidadeAtual(): number {
        return this.velocidade
    }

}

//let carroA = new Carro('Veloster', 3)

export let qualquer_coisa: string = 'Teste'