import { DaoInterface } from "./DaoInterface"

export class Dao<T> implements DaoInterface < T > { 
    nomeTabela: string = ''

    inserir(object: T): boolean {
        console.log('lógica de insert')
        return true
    }
    atualizar(object:T): boolean {
        console.log('lógica de update')
        return true
    }
    remover(id: number): T {
        console.log('lógica de delete')
        return Object()
    }
    selecionar(id: number): T {
        console.log('lógica de select')
        return Object()
    }
    selecionarTodos(): [any] {
        console.log('lógica de getAll')
        return [Object()]
    }
    
}