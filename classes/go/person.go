package main

// lowercase p in person so this isn't exported
// if it was in a separate package then 
// it would enforce only creating a new person using New
type person struct {
	name           string
	age            int
	drinksConsumed int
}

// golang convertion is to use a method called New as a constructor
// if a package has multiple exports then conversion is NewType, e.g. NewPerson
func New(name string, age int) person {
	drinksConsumed := 0
	person := person{name, age, drinksConsumed}
	return person
}

// (arguments) functionName() returnType
func (person person) isAdult() bool {
	return person.age >= 18
}

// takes a pointer to person so it can be modified
func (person *person) drink() {
	person.drinksConsumed++
}
