public class JavaClassExample {
  public static void main(String[] args) {
    Person person = new Person("John Smith", 12);

    if (person.isAdult()) {
      person.drink();
      person.drink();
    }

    System.out.printf("%s consumed %s drinks\n", person.getName(), person.getNumberOfDrinksConsumed());
  }
}
