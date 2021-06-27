import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    System.out.println("Location Tracker User Input (Personal Profile Navigation Bar Tag)");

    Scanner newInput = new Scanner(System.in);
    System.out.println("First Name: ");
    String product_name = newInput.next();
    System.out.println("Value entered for first name: " + product_name);

    System.out.println("Last Name:");
    String last_name = newInput.next();
    System.out.println("Last name entry: " + last_name);

    Scanner scanner = new Scanner (System.in);
    System.out.println("Age:"); // may change this to DOB instead in order to be more formal

    String input = scanner.nextLine();
    int ageNumber = Integer.parseInt(input);

    System.out.println("Age: " + input);

    //int ageNumberTwo = newInput.next(); - apparently this line of code does not work
    if (ageNumber >= 65){
      System.out.println("you are a senior citizen");
    }
    else if (ageNumber >= 0 && ageNumber < 18){
      System.out.println("you are a child");
    }
    else{
      System.out.println("you are an adult");
    }

// this entire subset of code (underneath) does not work. Although no errors have been 
// represented, the code is not executing properly - please find errors

    System.out.println("Hvae you been vaccinated?");
    String questionNumberOne = newInput.next();
    if (questionNumberOne.equals("yes")){
      System.out.println("continued questioning: ");
      String questionOneExtension = newInput.next();
      System.out.println("continued questioning: ");
      System.out.println("What vaccination have you received?");
      if (questionOneExtension.equals("Pfizer") || questionOneExtension.equals("Moderna")){
        System.out.println("continued questioning: ");
        System.out.println("Have you recieved your first vaccination?");
        String oneExtensionTwo = newInput.next();
        if (oneExtensionTwo.equals("no")){
          System.out.println("continued questioning: ");
          System.out.println("okay");
        }
      }
    }

  }
}
