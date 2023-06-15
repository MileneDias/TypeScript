import Carro from './carro'
import Moto from './moto'
import Concessionaria from './concessionaria'

let carro = new Carro('Ford Fordor 1930', 4)

let moto = new Moto()
carro.acelerar()
moto.acelerar()

let concessionaria = new Concessionaria('', [])

console.log(moto)
console.log(carro)
console.log(concessionaria.horarioFuncionamento())