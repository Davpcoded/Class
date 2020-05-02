// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function () {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dog = new Animal(true, "Woof!");
var cat = new Animal(false, "Meow!");
var bird = new Animal(true, "Tweet!");
var duck = new Animal(true, "Quack!");

// Calling dogs and cats makeNoise methods
dog.makeNoise();
cat.makeNoise();

// If we want, we can change an objects properties after they're created
cat.raining = true;
cat.makeNoise();

var massHysteria = function (dog, cat) {
  if (dog.raining === true && cat.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dog, cat);
