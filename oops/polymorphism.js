//Polymorphism means many forms- Means different objects or classes have ability to call the same method to its thier specific way.

class Notifications{
    send(){
        throw new Error("Method 'send(message)' must be implemented.")
    }
}

class EmailChannel extends Notifications{
     constructor(email){
        super()
        this.email=email
     }

     //Email delivery
     send(message){
        return `Email send to this ${this.email},Body: ${message}`
     }
}

class WhatsappChannel extends Notifications{
    constructor(number){
        super()
        this.number=number
    }

    send(message){
        return `Whatsapp message send to ${this.number}: ${message}`
    }
}

const channels = [
  new EmailChannel("rohan@example.com"),
  new WhatsappChannel("+919876543210"),
];

function notify(channels,alert){
   for(const channel of channels){
     console.log(channel.send(alert))
   }
}

notify(channels," Your message has been sent")

