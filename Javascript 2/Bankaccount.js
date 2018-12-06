var savings=
{
    accountNumber:14569,
    accountHolderName:"Srivani",
    accountBalance:3000,
    isSalary:true,
    withdraw(amount)
    {
        if(amount<=this.accountBalance)
        {
            this.accountBalance-=amount;
        }
        else
        {
            console.log("Insufficient balance");
        }    
    },
    getCurrentBalance()
    {
        console.log(this.accountBalance);
    }       
}
var current =
{
    accountNumber:14569,
    accountHolderName:"Srivani",
    accountBalance:63000,
    odLimit:50000,  
    withdraw(amount)
    {
        var limit=parseInt(this.accountBalance+this.odLimit);
        console.log(limit);
        if(amount<=limit)
        {
            this.accountBalance-=amount;
        }
        else
        {
            console.log("Insufficient balance");
        }     
    },
    getCurrentBalance()
    {
        console.log(this.accountBalance);
    }
}
savings.withdraw(600);
savings.getCurrentBalance();
current.withdraw(61000);
current.getCurrentBalance();