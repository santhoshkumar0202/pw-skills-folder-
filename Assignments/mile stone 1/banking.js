const customerAccount = {
    name: "santhosh",
    balance: 1000,
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount; //this refeers to same object you came from 
            console.log(`Deposited ${amount} into ${this.name}'s account.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    },
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.name}'s account.`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }
};

// input
console.log("Initial balance:", customerAccount.balance);
customerAccount.deposit(500);
customerAccount.withdraw(100000);
console.log("Updated balance:", customerAccount.balance);

