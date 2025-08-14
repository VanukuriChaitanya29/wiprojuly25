
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Enter a valid amount to deposit.");
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else if (amount <= 0) {
            console.log("Enter a valid amount to withdraw.");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        console.log(`Account Number: ${this.accountNumber}, Balance: $${this.balance}`);
    }
}

const myAccount = new BankAccount("123456", 500);

function showBalance() {
    myAccount.getBalance();
}

function depositMoney() {
    myAccount.deposit(200);
}

function withdrawMoney() {
    myAccount.withdraw(100);
}
