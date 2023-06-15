import { DaoInterface } from './DaoInterface'
import Moto from './moto'

export class MotoDao implements DaoInterface {
    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean {
        console.log('lógica de insert')
        return true
    }
    atualizar(object: Moto): boolean {
        console.log('lógica de update')
        return true
    }
    remover(id: number): Moto {
        console.log('lógica de delete')
        return new Moto()
    }
    selecionar(id: number): Moto {
        console.log('lógica de select')
        return new Moto();
    }
    selecionarTodos(): [any] {
        console.log('lógica de getAll')
        return [new Moto()]
    }
}