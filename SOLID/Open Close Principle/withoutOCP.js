class DiscountCalculator {
  calculate(customerType, total) {
    if (customerType === "regular") {
      return total * 0.95;      // 5% off
    } else if (customerType === "premium") {
      return total * 0.90;      // 10% off
    } else if (customerType === "vip") {
      return total * 0.80;      // 20% off
    }
    return total;
  }
}

let total=new DiscountCalculator().calculate("vip",1000)
console.log(total)