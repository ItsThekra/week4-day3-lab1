
// 3 functions inside object "saudiaAirlines"
let saudiaAirlines = {
    airlineName: "الخطوط الجوية السعودية",
    country: "السعودية",
    fleetSize: 560,
    destinations: ["الرياض", "جدة", "دبي", "نيويورك"],
    inOperation: true,
  
    // function 01:
    bookFlight: function(destination) {
      if (this.destinations.includes(destination)) {
        console.log(`Booked trip to ${destination}`);
      } else {
        console.log(`Sorry! there is no trips to ${destination} rigth now`);
      }
    },
  
    // function 02:
    addDestination: function(newDestination) {
      if (!this.destinations.includes(newDestination)) 
        {
        this.destinations.push(newDestination);
        console.log(`Add new destinataion: ${newDestination}`);
      } else {
        console.log(`The destination  ${newDestination} is alreday exits`);
      }
    },
  
    // function 03:
    getSummary: function() {
      console.log(`${this.airlineName} worked in ${this.country} and have  ${this.fleetSize} flight, and flights to  ${this.destinations.length} destination`);
    }
  };
  

saudiaAirlines.bookFlight("دبي");
saudiaAirlines.bookFlight("اليابان");
// saudiaAirlines.addDestination("باريس");
saudiaAirlines.addDestination("اليابان");
console.log(saudiaAirlines)
saudiaAirlines.getSummary("السعودية")



  

  