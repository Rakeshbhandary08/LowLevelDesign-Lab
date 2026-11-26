
//total types=standard,express,sameDay,storepickup and droneDelivery

class ShippingService{
    calculateCost(typeClass,weight,distance){
      return typeClass.calculate(weight,distance)
    }
}

class Standard{
    calculate(weight,distance){
      return 40 + weight *10
    }
}

class Express{
    calculate(weight,distance){
        return 80 + weight * 15 + distance *2
    }
}

class SameDay{
    calculate(weight,distance){
        return 150 + weight * 20 + distance * 2
    }
}

//Add store pickup
class StorePickup{
    calculate(weight,distance){
        return 0
    }
}

//Add DroneDelivery
class DroneDelivery{
    calculate(weight,distance){
        if(weight < 5){
            return 200 + 25 * distance
        }
    }
}

//one regular user
let standard=new ShippingService().calculateCost(new Standard(),2,10)
console.log(standard)

//one express user
let express=new ShippingService().calculateCost(new Express(),2,10)
console.log(express)

//one user from store
let storeUser=new ShippingService().calculateCost(new StorePickup(),2,10)
console.log(storeUser)

//Drone user
let droneUser=new ShippingService().calculateCost(new DroneDelivery(),2,10)
console.log(droneUser)