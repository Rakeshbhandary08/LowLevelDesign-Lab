class BankAccount{
    #balance;
    #pin;

    constructor(ownername,pin,initialBalance=0){
        if(initialBalance < 0){
            throw new Error("Initial Balance cannot be Negative")
        }
        this.ownername=ownername;
        this.#pin=pin;
        this.#balance=initialBalance
    }

    //Private helper to verify PIN internally
    #verifyPin(pin){
        return this.#pin === pin
    }

    // Controlled public method to add money
    deposit(amount){
        if(typeof amount !== "number" || amount <= 0){
            throw new Error("Deposit amount must be greater than ₹0.")
        }
        this.#balance+=amount
        return `Deposited amount: ₹${amount},Total amount: ₹${this.#balance}`
    }

    // Controlled public method to withdraw money with validation + PIN check
    withdraw(amount,pin){
       if(!this.#verifyPin(pin)){
         throw new Error("Invalid pin")
       }
       if(amount <= 0){
        throw new Error("Withdrawal amount must be greater than ₹0.");
       }
       if(amount > this.#balance){
        throw new Error("Insufficient balance.");
       }
       this.#balance-=amount;
       return `Remaining amount: ₹${this.balance}`
    }

    // Read-only exposure of balance (requires PIN)
    getBalance(pin){
        if(!this.#verifyPin(pin)){
          throw new Error("Invalid pin")
        }
        return `₹${this.#balance}`
    }

}

let user1=new BankAccount('Rakesh',9298,3000)
console.log(user1.deposit(2000))
console.log(user1.getBalance(9298))

console.log(user1.withdraw(5000,9298))