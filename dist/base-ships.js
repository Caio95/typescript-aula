"use strict";
exports.__esModule = true;
var Spacecraf = /** @class */ (function () {
    function Spacecraf(porpulsor) {
        this.porpulsor = porpulsor;
    }
    Spacecraf.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.porpulsor);
    };
    return Spacecraf;
}());
exports.Spacecraf = Spacecraf;
