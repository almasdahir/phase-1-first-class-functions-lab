// Code your solution in this file!


function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  function fareDoubler(fare) {
    return fare * 2;
  }

  function fareTripler(fare) {
    return fare * 3;
  }
  
  