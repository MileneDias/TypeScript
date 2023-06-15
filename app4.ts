//import { ConcessionariaDao } from './concessionariaDao'
//import { PessoaDao } from './pessoaDao'
import Concessionaria from './concessionaria'
import Pessoa from './pessoa'

import { CarroDao} from './carroDao'
import Carro from './carro'
import { MotoDao } from './motoDao'
import Moto from './moto'

import { Dao } from './Dao'

//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()

let concessionaria = new Concessionaria('', [])
let pessoa: Pessoa = new Pessoa('', '')

let dao5: Dao<Concessionaria> = new Dao()
let dao6: Dao<Pessoa> = new Dao()

dao5.inserir(concessionaria)
dao6.atualizar(pessoa)

//_________________________//__________________________//
let dao3: CarroDao = new CarroDao()
let carros: Carro = new Carro('', 0)

dao3.inserir(carros)

let dao4: MotoDao = new MotoDao()
let motos: Moto = new Moto()

dao4.atualizar(motos)