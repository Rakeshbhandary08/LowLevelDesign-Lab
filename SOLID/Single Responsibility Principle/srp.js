//SRP=Single Responsibility Principle
// It means a class should have only one reason to change.

class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary
    }
}

class TaxCalculator{
   calculate(user){
     return user.salary * 2/100
   }
}

class SaveToDB{
    savingUser(user){
      console.log(`Saving ${user.name} to Database...`)
    }
}

class GenerateReport{
    reportGeneration(user){
       console.log(`Report: Name ${user.name}, Salary ${user.salary}`)
    }
}

//Register the user
let user1=new Employee("Rakesh",10000)

let tax=new TaxCalculator().calculate(user1)
console.log(tax)
new SaveToDB().savingUser(user1)

new GenerateReport().reportGeneration(user1)

