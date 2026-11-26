class Bird {
  fly() {
    console.log("Flying high");
  }
}

class Sparrow extends Bird {}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}