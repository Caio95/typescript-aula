class Spacecraf {
    constructor(public porpulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.porpulsor}`)
    }
}

interface Containership{

    cargoContainers: number
}

export {Spacecraf, Containership}