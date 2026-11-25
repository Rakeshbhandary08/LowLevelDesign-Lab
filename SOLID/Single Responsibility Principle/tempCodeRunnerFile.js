}

class SendEmail{
   sendingMail(userData){
    console.log(`Sending email to ${userData.customerEmail}: OrderId ${userData.orderId} confirmed. Total: ${new CalculateTotal().calculate(userData)})}`);
   }
}
