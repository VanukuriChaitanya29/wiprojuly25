class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `Vehicle: ${this.make} ${this.model}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    getInfo() {
        return `Car: ${this.make} ${this.model}, Year: ${this.year}, Doors: ${this.numDoors}`;
    }
}

const myVehicle = new Vehicle("Toyota", "Corolla", 2020);
const myCar = new Car("Honda", "Civic", 2022, 4);

function showVehicleInfo() {
    console.log(myVehicle.getInfo());
}

function showCarInfo() {
    console.log(myCar.getInfo());
}
