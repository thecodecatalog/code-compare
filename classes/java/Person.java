public class Person {
  private String name;
  private int age;
  private int drinksConsumed = 0;

  public Person(final String name, final int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() {
    return name;
  }

  public int getNumberOfDrinksConsumed() {
    return drinksConsumed;
  }

  public boolean isAdult() {
    return age >= 18;
  }

  public void drink() {
    this.drinksConsumed++;
  }
}
