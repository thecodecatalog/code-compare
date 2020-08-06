class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.drinksConsumed = 0


    def is_adult(self):
        return self.age >= 18


    def drink(self):
        self.drinksConsumed += 1


def main():
    person = Person('John Smith', 12)
    if person.is_adult():
        person.drink()
        person.drink()
    print('%s consumed %s drinks' % (person.name, person.drinksConsumed))


if __name__ == "__main__":
    main()
