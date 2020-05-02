function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];

  this.getBalance = () => {
    return this.balance;
  };
  this.setBalance = (value) => {
    this.balance = value;
  };
  this.updateStatement = (value) => {
    this.statement.push(value);
  };
  this.getStatement = () => {
    return this.statement;
  };
  this.printStatement = function () {
    console.log(this.statement);
  };
  this.deposit = function (value) {
    this.updateStatement(value);
    this.setBalance(this.balance + value);
  };
  this.withdraw = function (value) {
    this.updateStatement(value * -1);
    this.setBalance(this.balance + value * -1);
  };
  this.printBalance = function () {
    console.log(`Balance: ${this.getBalance()}`);
  };
}

const wellsfargo = new MiniBank(50);
wellsfargo.printBalance();
wellsfargo.deposit(20);
wellsfargo.printBalance();
wellsfargo.withdraw(10);
wellsfargo.printBalance();
wellsfargo.printStatement();

const bofa = new MiniBank(100);
