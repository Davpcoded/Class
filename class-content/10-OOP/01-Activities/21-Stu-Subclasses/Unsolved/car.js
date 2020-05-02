const Vehicle = require("./vehicle");

class Car extends Vehicle {
  constructor(color, passengers) {
    this.color = color;
    this.passengers = passengers;
  }
  checkPassengers() {
    if (this.passengers > 4) {
      console.log("too many passengers");
    } else {
    }
  }
}
