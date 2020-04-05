//variaveis
let mensagem: string = "Help me"
console.log(mensagem)

let episode: number =4
console.log("This is eposide "+4)
episode = episode + 1
console.log("Nest episode is "+episode)
 let caio: string = "Caio Henrique de Sousa"
 console.log("My name is "+ caio)

 let favoriteDroid: string
 favoriteDroid = 'BB-8'
 console.log("My favorite droid is "+ favoriteDroid)

 //funções 
 let verificador = function (numero: number): boolean{
     return numero < 12
 }

 let distancia =12
 console.log(`Is ${distancia} não sei oq mais Falcon? ${verificador(distancia) ? 'YES':'NO'}`)


 let call = (name: string) => console.log(`Do you copy, ${name}`)
 call('R2')

 function inc (speed: number, inc: number=1): number{
     return speed + inc
 }

 console.log(`inc (5,1) = ${inc(5,1)}`)
 console.log(`inc (5) = ${inc(5)}`)

 //importacao de classes
import {Spacecraf, Containership} from './base-ships'
import {MilleniumFalcon} from './starfighters'

import * as _ from 'lodash'
console.log(_.pad("typescript Examples", 40, "="))
 
let ship = new Spacecraf('hyperdrive')
 ship.jumpIntoHyperspace()

 let falcon = new MilleniumFalcon()
 falcon.jumpIntoHyperspace()

 let goodforTheJob = ( ship:Containership) => ship.cargoContainers >2
console.log(`Falcon é boa para o trabalho? ${goodforTheJob(falcon) ? 'Yes':'NO'}`)

