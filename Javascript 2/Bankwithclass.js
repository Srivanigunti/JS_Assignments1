class BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
    }
    deposit(amount){
        this.accountBalance += amount;
    }
    getCurrentBalance()
    {
        console.log("Balance in account:",this.accountBalance);
    }
}
var bankAccountObject= new BankAccount(123456,"Srivani",50000);
bankAccountObject.deposit(5000);
bankAccountObject.getCurrentBalance();
class Savings extends BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance,isSalary){
        super(accountNumber,accountHolderName,accountBalance);
        this.isSalary=isSalary;
    }
    withdraw(amount)
    {
        if(this.accountBalance>amount)
        this.accountBalance-=amount;
        else
        console.log("Insufficient funds");
    }
    getCurrentBalance()
    {
        console.log("Remaining balance in Savings account:",this.accountBalance);
    }
}
var savingsObject=new Savings(123456,"Srivani",50000,true);
savingsObject.withdraw(5000);
savingsObject.getCurrentBalance();
class Current extends BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance,odLimit){
        super(accountNumber,accountHolderName,accountBalance);
        this.odLimit=odLimit;
    }
    withdraw(amount)
    {
        var limit=this.accountBalance+this.odLimit;
        if(limit>amount)
        this.accountBalance-=amount;
        else
        console.log("Insufficient funds");
    }
    getCurrentBalance()
    {
        console.log("Remaining balance in Current account:",this.accountBalance);
    }
}
var currentObject=new Current(123456,"Srivani",50000,50000);
currentObject.withdraw(75000);
currentObject.getCurrentBalance();