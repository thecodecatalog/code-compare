class Person {
    // Public readonly instead of getter so these can only be set during instantiation
    public readonly name: string
    public readonly age: number
    // Since member and getter cannot share the same name, in order to use a getter,
    // any member would have to be prefixed with an underscore by convention

    private drinksConsumed: number = 0

    public constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    get numberOfDrinksConsumed(): number {
        return this.drinksConsumed
    }

    get isAdult(): boolean {
        return this.age >= 18
    }

    public drink() {
        this.drinksConsumed++
    }
}

const person = new Person("John Smith", 12)

if(person.isAdult) {
    person.drink()
    person.drink()
}

console.log(`${person.name} consumed ${person.numberOfDrinksConsumed}`)
