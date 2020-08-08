class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.drinksConsumed = 0;
  }

  // getter when checking a property (noun)
  get isAdult() {
    return this.age >= 18;
  }

  // method when doing something (verb)
  drink() {
    ++this.drinksConsumed;
  }
}

const person = new Person('John Smith', 43);
if (person.isAdult) {
  person.drink()
  person.drink()
}

console.log(`${person.name} consumed ${person.drinksConsumed} drinks`)
