const dog = {
  raining: true,
  noise: "woof",
  makeNoise() {
    console.log(this.raining);
  },
};

let cat = {
  raining: false,
  noise: "meow",
  makeNoise() {
    console.log(this.noise);
  },
};
console.log(dog);
