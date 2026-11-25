class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateTax() {
    return this.salary * 0.2; // Finance logic
  }

  saveToDatabase() {
    console.log(`Saving ${this.name} to DB`); // Database logic
  }

  generateReport() {
    console.log(`Report: ${this.name}, ${this.salary}`); // Reporting logic
  }
}