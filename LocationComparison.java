import java.util.*;
import java.lang.*;

//Harit Talwar
//Smriti Wadhwa

class Main {
    public static double calculatedTotalDistance(double firstLatitudeValue, double firstLongitudeValue, double secondLatitudeValue, double secondLongitudeValue){
      // use the math module class fucntion "toRadians" in order to convert all user inputted values into radians from degree measurements
      firstLatitudeValue = Math.toRadians(firstLatitudeValue);
      secondLatitudeValue = Math.toRadians(secondLatitudeValue);
      firstLongitudeValue = Math.toRadians(firstLongitudeValue);
      secondLongitudeValue = Math.toRadians(secondLongitudeValue);

      // represented below, is the application of the Haversine formula (provide more detailed explanation in the README.md file!)

      // Haversine formula explanation via wikipedia.org: 
      //"The haversine formula determines the great-circle distance between two points on a sphere given their longitudes and latitudes. Important in navigation, it is a special case of a more general formula in spherical trigonometry, the law of haversines, that relates the sides and angles of spherical triangles."

      double distanceForLongitude = secondLongitudeValue - firstLongitudeValue;
      double distanceForLatitude = secondLatitudeValue - firstLatitudeValue;
      double formulaRepresentation = Math.pow(Math.sin(distanceForLatitude/2),2) + Math.cos(firstLatitudeValue) * Math.cos(secondLatitudeValue) * Math.pow(Math.sin(distanceForLongitude/2),2);

      double newVariable = 2 * Math.asin(Math.sqrt(formulaRepresentation)); // change the name of this variable in order to help reader interpret the mathematical operation in an easier manner

      // radius value representation of Earth in miles (approximately 6371 kilometers):
      double radiusInMiles = 3958.8;

      // result calculation
      return (newVariable * radiusInMiles);
    }

    // representation of driver code (allows user to implement locations and track distances)
public static void main(String[] args) {
    System.out.println("Calculating distance between two points of latitude and longitude at any given points on planet Earth");

    System.out.println("Harit Talwar");
    // user input values: 
    double firstLatitudeValue = 34.121202956585776 ;
    double firstLongitudeValue = -118.02190312380023;
    double secondLatitudeValue = 34.119570;
    double secondLongitudeValue = -118.053080;
    System.out.println(calculatedTotalDistance(firstLatitudeValue, firstLongitudeValue, secondLatitudeValue, secondLongitudeValue) + " miles is the total distance between the first inputted latitude/longitude value and the second inputted latitude/longitude value");
  }
}

// post text: make sure to attach screrenshots of the google maps AND replit.com console for program verification
