// Maries code
//ES6
// In this example of a car race, we need to create the cars and race itself

class Car {
  // Here we create the car
  constructor(inMake, inModel, inEngine, inDoors) {
    // what kinds of properties well add to the cars
    this.make = inMake; // this keyword on each property
    this.model = inModel;
    this.engine = inEngine;
    this.doors = inDoors;
    this.speed = 0; // The starting speeds will always be 0
  }
  // adding a function which takes in the new speed argument, and storing the
  // value in addSpeed
  addSpeed = function (newSpeed) {
    // we pass in the newSpeed from below
    this.speed = this.speed + newSpeed;
  };
}

class Race {
  // Here we create the race
  // We need to create the spcifications of the racecource
  constructor(inCarsArr) {
    this.allCars = inCarsArr; // Question 1: What is happening in this step??
    this.numLaps = 10;
    this.lapLength = 2000;
  }
  // we need to create the specifications of the race
  startRace() {
    for (let i = 0; i < this.allCars.length; i++) {
      let thisCar = this.allCars[i];
      thisCar.distance = 0;
      this.lapTime = 0;
    }
    for (let lap = 0; lap < this.numLaps; lap++) {
      console.log("\n ==============", "Lap : " + (lap + 1) + "==============");
      this.doLap(lap);
      this.printPositions();
    }
  }
  // here we create the specifications of each lap
  doLap(lapNum) {
    // adjust the speed of the cars
    for (let i = 0; i < this.allCars.length; i++) {
      let thisCar = this.allCars[i];
      let newSpeed = Math.ceil(Math.random() * 10); // This is where we create the speed, to be passed in above
      thisCar.addSpeed(newSpeed);
    }

    //Sort the positions of all the cars based on the distance
    //Except for the first lap, which is based on the speed since they start at the same point
    let lapFinish = (lapNum + 1) * this.lapLength;
    for (let i = 0; i < this.allCars.length; i++) {
      let thisCar = this.allCars[i];
      let distanceToLapFinish = lapFinish - thisCar.distance;
      let timeToLapFinish = distanceToLapFinish / thisCar.speed;
      thisCar.lapTime = timeToLapFinish;
    }
    this.allCars.sort((a, b) => a.lapTime - b.lapTime);

    let currLapTime = this.allCars[0].lapTime;
    for (let i = 0; i < this.allCars.length; i++) {
      let thisCar = this.allCars[i];
      thisCar.distance = thisCar.distance + thisCar.speed * currLapTime;
      console.log("LAP TIME : " + currLapTime.toFixed(2));
      this.totalTime = this.totalTime + currLapTime;
    }
  }
  // here we finalize the positions after each lap
  printPositions() {
    //store distance of the first place
    let firstPlaceDistance = 0;
    for (let i = 0; i < this.allCars.length; i++) {
      let thisCar = this.allCars[i];
      let output = `${i + 1} ${thisCar.make} ${thisCar.model}`;
      if (firstPlaceDistance === 0) {
        firstPlaceDistance = thisCar.distance;
      } else {
        let distanceBetweenCar = (
          firstPlaceDistance - thisCar.distance
        ).toFixed(2);
        output += `( - ${distanceBetweenCar})`;
      }
      console.log(output);
    }
  }
}
// outside of the two main classes

// we create an empty array to store the cars
let carArr = [];
// the cars are created, passing in all their details as arguments
let car1 = new Car("Kia", "Rio", 1.5, 5);
carArr.push(car1); // we push all the cars to the empty array
carArr.push(new Car("Lamborghini", "Diablo", 5.7, 2));
carArr.push(new Car("Tesla", "Model X", 3.5, 4));
carArr.push(new Car("Fiat", "Punto", 2.4, 5));
carArr.push(new Car("Porsche", "911", 4.0, 2));

// we store the array of cars in the variable race
let race = new Race(carArr);
// we start the race
race.startRace();
