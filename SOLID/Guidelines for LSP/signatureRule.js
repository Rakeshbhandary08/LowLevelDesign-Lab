class Printer {
  print(text) {
    console.log(text);
  }
}

class ColorPrinter extends Printer {
  print(text, color = 'Red') {    //method overing           // new required parameter
    if (!color) throw new Error("color is required");
    console.log(`[${color}] ${text}`);
  }
}

function printReport(printer) {
  printer.print("Monthly report");      // caller only knows about `text`
}

printReport(new Printer());       // works
printReport(new ColorPrinter());  // crashes


//Return should be same too

class UserRepository {
  findById(id) {
    return { id, name: "Rahul" };        // always an object
  }
}

class CachedUserRepository extends UserRepository {
  findById(id = 1) {
    if (id === 0) return null;           // different shape
    return {id, name:"Rahul"}             // an array, not an object
  }
}

function greet(repo, id) {
  const user = repo.findById(id);
  console.log(`Hello ${user.name}`);     // breaks for null; prints "Hello undefined" for an array
}

greet(new UserRepository(),1)
greet(new CachedUserRepository(),1)