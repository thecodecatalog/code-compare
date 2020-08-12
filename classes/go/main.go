package main

import "fmt"

func main() {
	person := New("John Smith", 43)

	if person.isAdult() {
		person.drink()
		person.drink()
	}

	fmt.Printf("%s consumed %d drinks\n", person.name, person.drinksConsumed)
}
