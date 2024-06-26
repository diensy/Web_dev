let obj = {
  name: "dinesh",
  age: 18,
  course: "MCA",
};
let animal = {
  eat: true,
};
let rabbit = {
  jumps: true,
};
rabbit._proto_ = animal; // set proto type using animal

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Objected is created.....");
  }
  eats() {
    console.log("animal is eating");
  }
  jumps() {
    console.log("animal is jumping");
  }
  run() {
    console.log("animal is running");
  }
  drink() {
    console.log("The animal is Drinking");
  }
}
let Tiger = new Animal("Bagha");
console.log(Tiger);
class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Animal was created and its a lion");
  }
  Roar() {
    console.log("The lion is Roaring");
  }
}
let simba = new Lion("Simba");
console.log(simba);
