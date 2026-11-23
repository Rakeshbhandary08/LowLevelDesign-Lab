// 1. Abstract-style base class: defines the contract ("what" a payment can do)

class PaymentMethod{

    constructor(payername){
      if(new.target === PaymentMethod){
        throw new Error("Cannot instantiate PaymentMethod directly. Use a specific payment method.")
      }
      this.payername=payername
    }

    pay(amount){
        throw new Error("Method 'pay(amount)' must be implemented by subclass.")
    }
}

class UpiPayemnt extends PaymentMethod{
      #upiId
      constructor(payername,upidId,amount){
         super(payername);
         this.#upiId=upidId;
         this.amount=amount
      }

      //Hidden intern steps
      #verifyVPA(){
         return this.#upiId.includes("@")
      }

      #sendIntentToPSP(amount) {
     return `UPI txn of ₹${amount} approved via ${this.#upiId}`;}

     // Public abstracted method
     pay(amount){
        if(!this.#verifyVPA()){
            throw new Error("Invalid upi id")
        }
        return this.#sendIntentToPSP(amount)
     }
}

// Concrete implementation 2: hides card tokenization & bank auth details




let user1=new UpiPayemnt("rakesh","rakesh9298@ibl")
console.log(user1.pay(900))
console.log(user1.pay(800))