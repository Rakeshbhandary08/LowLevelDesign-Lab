// LSP = Liskov substitution principle

//If code works with a parent class, it should work just as correctly with any of its child classes, without knowing which child it got.

class Bird{
    eat(){
        console.log("I'm Eating")
    }
}

class FlyingBird extends Bird{
    fly(){
        console.log("I'm flying")
    }
}

class Penguin extends Bird{}
class Sparrow extends FlyingBird{}

function flyBirds(birds){
   for(let bird of birds){
     bird.eat()
     bird.fly()
   }
}
flyBirds([new Sparrow(),new Sparrow()])
