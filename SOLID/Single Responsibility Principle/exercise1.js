class Order {
  constructor(orderId, customerEmail, items) {
    this.orderId = orderId;
    this.customerEmail = customerEmail;
    this.items = items // [{ name: "Pen", price: 10, quantity: 3 }]
  }

}

class CalculateTotal{
      calculate(userData){
          let total=0;
          let data=userData.items || []
          for(let item of data){
             total=total + (item.price * item.quantity)
          }

          return total;
      }
}

class SaveToDB{
    savingToDatabase(userData){
       console.log(`Saving order ${userData.orderId} to database...`)
    }
}

class SendEmail{
   sendingMail(userData){
    console.log(`Sending email to ${userData.customerEmail}: OrderId ${userData.orderId} confirmed. Total: ${new CalculateTotal().calculate(userData)})}`);
   }
}


let user=new Order(1,"rakesh9298@gmail.com",[{"name": "Pen", "price": 10, "quantity": 50}])
console.log(user)

//find out the total cost
let cost=new CalculateTotal().calculate(user)
console.log(cost)

//Save to Database
new SaveToDB().savingToDatabase(user)

//Send the email
new SendEmail().sendingMail(user)




