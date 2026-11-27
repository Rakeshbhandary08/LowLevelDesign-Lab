
//Id should be greater than 0 always (rule bana diya -> class variant)

class UserRepository {
  findById(id) {
    return { id, name: "Rahul" };        // always an object
  }
}

class CachedUserRepository extends UserRepository {
  findById(id = 1) {      
    return {id, name:"Rahul"}             // an array, not an object
  }
}

function greet(repo, id) {
  const user = repo.findById(id);
  console.log(`Hello ${user.name}`);     // breaks for null; prints "Hello undefined" for an array
}

greet(new UserRepository(),1)
greet(new CachedUserRepository(),1)