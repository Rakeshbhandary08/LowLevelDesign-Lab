You're working on an e-commerce app. This class calculates the shipping cost at checkout:

#javascript:

  class ShippingService {
    calculateCost(type, weightKg, distanceKm) {
      if (type === "standard") {
        return 40 + weightKg * 10;
      } else if (type === "express") {
        return 80 + weightKg * 15 + distanceKm * 2;
      } else if (type === "sameDay") {
        return 150 + weightKg * 20 + distanceKm * 5;
      } else {
        throw new Error("Unsupported shipping type");
      }
    }
  }  

const shipping = new ShippingService();
console.log(shipping.calculateCost("standard", 2, 10));  // 60
console.log(shipping.calculateCost("express", 2, 10));   // 130
console.log(shipping.calculateCost("sameDay", 2, 10));   // 240
The business situation

The product team just sent these requests, one after another:

"Add Store Pickup. It should be free."
"Add Drone Delivery: 200 base, plus 25 per km, only for parcels under 5 kg."
"Add International shipping next quarter."

With the current code, every request means opening ShippingService and adding another else if.

Your tasks
Explain why ShippingService violates OCP.
Refactor so each shipping type is its own class with the same method name.
Make ShippingService closed for modification. It should have no if/else on shipping type.
Add StorePickup and DroneDelivery without editing ShippingService or any existing shipping class.
Keep the output the same for standard, express and sameDay with the test values above.