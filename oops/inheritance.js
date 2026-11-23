
//Single Inheritance
class Attendence{
    constructor(attendence){
       this.attendence=attendence
    }

    isPresent(){
       if(this.attendence === true){
        return "YES"
       }
       else{
        return "NO"
       }
    }
}

class Employee{
    constructor(name,salary){
       this.name=name;
       this.salary=salary
    }

    getSummary(){
        return `${this.name} is person salary is ${this.salary}`
    }
}

class Developer extends Employee{
    constructor(name,salary,designation,attendence){
        super(name,salary);
        this.designation=designation;
        this.attendence=new Attendence(attendence)
    }

    getSummary(){
        return `${super.getSummary()} and his designation is ${this.designation}`
    }
}

let emp1=new Developer('Rakesh',1000,'Software Engineer',true);
console.log(emp1)
// console.log(emp1.getSummary())
console.log(emp1.attendence.isPresent())