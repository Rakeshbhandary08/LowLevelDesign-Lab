// ***************    Exercise: Build a SmartPhone

// Create three classes where a SmartPhone has a Battery and has a Camera:

// Battery class
// Store charge Level in the constructor (default to 100).
// Add a useBattery(amount) method that subtracts amount from chargeLevel (don't let it go below 0) and returns a status message like "Battery at 80%".

// Camera class
// Add a takePhoto(subject) method that returns a string like "Clicked a photo of Sunset".

// SmartPhone class
// Accept model, battery, and camera in its constructor (this.model, this.battery, this.camera).
// Add a captureMoment(subject) method that:

// Checks if this.battery.chargeLevel < 10 (if so, returns "Battery too low to take a photo!").

// Otherwise, calls this.camera.takePhoto(subject) and this.battery.useBattery(10), then returns both results together.

class SmartPhone{
   constructor(model,battery,camera){
    this.model=model,
    this.battery=battery,
    this.camera=camera
   }

   captureMoment(subject){
    if(this.battery.chargeLevel <= 10){
        return `Battery too low to take a photo!`
    }
    else{
        this.battery.useBattery(10)
        return this.camera.takePhoto(subject);
        
    }
   }
}

class Battery{
    constructor(level=100){
        this.chargeLevel=level
    }

    useBattery(amount){
         this.chargeLevel=Math.max(this.chargeLevel-amount,0)
         return `Battery at ${this.chargeLevel}%`;
    }
}


class Camera{
   takePhoto(subject){
    return `Clicked a photo of ${subject}`
   }
}

let phone1=new SmartPhone('Realme',new Battery(11),new Camera())
console.log(phone1.captureMoment("Sunset"))
console.log(phone1.captureMoment("Sunrise"))