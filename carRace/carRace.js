// Race using classes/object
// most other language use classes instead
// to create an instance of something that you can reuse as much as you want

// ES5 creation of object/classes
// function Car(inMake, inModel, inEngine, inDoors) {
//     this.make = inMake,
//     this.mode = inModel,
//     this.engine = inEngine,
//     this.doors = inDoors,
//     this.speed = 0,
//     this.addSpeed = function(newSpeed) {
//         this.speed = this.speed + newSpeed;
//     }
// }

// const CarR = function (inMake, inModel, inEngine, inDoors) {
//     this.make = inMake,
//     this.mode = inModel,
//     this.engine = inEngine,
//     this.doors = inDoors,
//     this.speed = 0,
//     this.addSpeed = function(newSpeed) {
//         this.speed = this.speed + newSpeed;
//     }
// }

// we use the new keyword to create the object
// let car1 = new Car("Kia", "Rio", 1.5, 5);
// let car2 = new CarR("Ford", "Focus", 2.5, 3);


// console.dir(car1);
// console.dir(car1);

// ES6
class Car {
    constructor (inMake, inModel, inEngine, inDoors) {
    this.make = inMake;
    this.mode = inModel;
    this.engine = inEngine;
    this.doors = inDoors;
    this.speed = 0;
    }
    addSpeed = function (newSpeed) {
        this.speed = this.speed + newSpeed;
    }
}

class Race {
    constructor(inCarArr) {
        this.AllCars = inCarsArr;
        this.numLaps = 10;
        this.lapLength = 2000;
    }
}


let car1 = new Car("Kia", "Rio", 1.5, 5);

console.log(car1)

let race 



// Race using classes/object
//ES5 creation of object/classes
// function Car (inMake, inModel, inEngine, inDoors) {
//     this.make = inMake,
//     this.model = inModel,
//     this.engine = inEngine,
//     this.doors = inDoors,
//     this.speed = 0,
//     this.addSpeed = function(newSpeed) {
//         this.speed = this.speed + newSpeed;
//     }
// }

// const CarR = function (inMake, inModel, inEngine, inDoors) {
//     this.make = inMake,
//     this.model = inModel,
//     this.engine = inEngine,
//     this.doors = inDoors,
//     this.speed = 0,
//     this.addSpeed = function(newSpeed) {
//         this.speed = this.speed + newSpeed;
//     }
// }

// let car1 = new Car("Kia", "Rio", 1.5, 5);
// let car2 = new CarR("Ford", "focus", 2.5, 3);

// console.dir(car1);
// console.dir(car2);

/////////////////////////////////
