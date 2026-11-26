//OCP = Open close principle
//-> A class should be open for extention but close for modification

class Discount{
    calculate(total,typeClass){//total and type class
        return typeClass.apply(total)
    }
}

class RegularDiscount{
    apply(total){
       return total*0.95
    }
}

class PremiumDiscount{
    apply(total){
        return total*0.90
    }
}

class VipDiscount{
    apply(total){
        return total*0.80
    }
}

class StudentDiscount{
    apply(total){
        return total* 0.75
    }
}

//Festival Dhamaka offer
class FestivalDiscount{
    apply(total){
        return total * 0.5
    }
}

let regular1=new Discount().calculate(1000,new RegularDiscount())
console.log(regular1)

//stundent discount
let student=new Discount().calculate(1000,new StudentDiscount())
console.log(student)

//Festival discount
let festival=new Discount().calculate(1000,new FestivalDiscount())
console.log(festival)
