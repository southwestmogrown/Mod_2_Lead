function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(this)
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// will print "undefined eats fish food"
// eat(); 


/********************************* Scenario 2 *********************************/
// prints "Nemo eats fish food"
// nemo.eat = eat;
// nemo.eat(); // ?


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // prints "undefined eats fishfood"


/********************************* Scenario 4 *********************************/
// nemo.swim(); // prints "Nemo swimming in the water"


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // throws an error
