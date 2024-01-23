// 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
    #balance;
    constructor(accauntNumber){
        this.accauntNumber = accauntNumber;
        this.#balance = 0;
    }

    deposit (amount){
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount > this.#balance) console.log("nepakanka lesu Siuo metu turite " + this.#balance + "$");
        else this.#balance -= amount;
    }

    get balance(){
        return this.#balance;
    }
}

const myBankAccount = new BankAccount("548965416")

myBankAccount.deposit(400);
myBankAccount.withdraw(3900);

console.log(myBankAccount.balance);
