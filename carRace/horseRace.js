// step 1. construct the horse class
class Horse {
  constructor(inBreed, inWeight, inHeight) {
    this.inBreed = inBreed;
    this.inWeight = inWeight;
    this.inHeight = inHeight;
    this.speed = 0;
  }
}

// step 2. construct the race class
class Race {
  constructor(inHorsesArr) {
    // Question 1. where does inHorsesArr come from
    this.allHorses = inHorsesArr;
    this.numLaps = 10;
    this.lapLength = 2000;
  }

  startRace() {
    for (let i = 0; i < this.allHorses.length; i++) {
      let thisHorse = this.allHorses[i];
      thisHorse.distance = 0; // Question 2. where do we get distance and laptime from?
      this.laptime = 0; // Question 3. why do we not use thisHorse?
    }
    for (let lap = 0; lap < this.numLaps; lap++) {
      console.log("\n ==============", "Lap : " + (lap + 1) + "==============");
      // each time we iterate in the above, we add a lap, so we read lap 1, lap 2 and so forth
    }
  }
}

// let newSpeed = Math.ceil(Math.random() * 10)
