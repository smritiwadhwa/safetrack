     function calculatedDistance(firstLatitude, firstLongitude, secondLatitude, secondLongitude, radiusInMiles){

       raidusInMiles = 3958.8;

       firstLongitude = firstLongitude * Math.PI / 180;
       firstLatitude = firstLatitude * Math.PI / 180;
       secondLongitude = secondLongitude * Math.PI / 180;
       secondLatitude = secondLatitude * Math.PI / 180;

       let distanceLatitude = secondLatitude - firstLatitude;
       let distanceLongitude = secondLongitude - firstLongitude;

       let haversineAlgorithm = Math.pow(Math.sin(distanceLatitude/2), 2) + (Math.cos(firstLatitude)) * (Math.cos(secondLatitude)) * (Math.pow(Math.sin(distanceLongitude/2), 2));

       let equation = 2 * Math.asin(Math.sqrt(haversineAlgorithm));

       return(equation * radiusInMiles);
     }

     // driver code:
     let firstLatitude = 34.121202956585776;
     let firstLongitude = -118.02190312380023;
     let secondLatitude = 34.119570;
     let secondLongitude = -118.053080;
     let radiusInMiles = 3958.8;

     document.write(calculatedDistance(firstLatitude, firstLongitude, secondLatitude, secondLongitude, radiusInMiles) + " is the toal distance (in miles) of the two longitude/latitude values");


     if (calculatedDistance(firstLatitude, firstLongitude, secondLatitude, secondLongitude, radiusInMiles) <= 2.00){
       alert("portray the distance + proifle of other user");
     }
