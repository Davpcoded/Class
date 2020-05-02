function DigitalPal(hungry, sleepy, bored, age, outside, houseCodition) {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseCodition = 100;

  this.feed = () => {
    if (hungry === true) {
      console.log("That was yummy");
      this.hungry = false;
      this.sleepy = true;
    } else console.log("no thanks I'm full");
  };
  this.sleepy = () => {
    if (sleepy === true) {
      console.log("ZzzZzZ");
    }
  };
}

const newChar = new DigitalPal(true);
newChar.feed();
newChar.sleepy();
