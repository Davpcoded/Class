class Store {
  constructor(name, stock, revenue) {
    this.name = name;
    this.stock = stock;
    this.revenue = revenue;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
