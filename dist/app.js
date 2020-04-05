"use strict";
exports.__esModule = true;
//variaveis
var mensagem = "Help me";
console.log(mensagem);
var episode = 4;
console.log("This is eposide " + 4);
episode = episode + 1;
console.log("Nest episode is " + episode);
var caio = "Caio Henrique de Sousa";
console.log("My name is " + caio);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
//funções 
var verificador = function (numero) {
    return numero < 12;
};
var distancia = 12;
console.log("Is " + distancia + " n\u00E3o sei oq mais Falcon? " + (verificador(distancia) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
//importacao de classes
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraf('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodforTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Falcon \u00E9 boa para o trabalho? " + (goodforTheJob(falcon) ? 'Yes' : 'NO'));
