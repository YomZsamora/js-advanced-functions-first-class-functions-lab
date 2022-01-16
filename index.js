// Returns a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = drivers => { return drivers.slice(0, 2); }

// Returns a new array containing the first two drivers from the passed-in array
const returnLastTwoDrivers = drivers => { return drivers.slice(-2); }

// selectingDrivers has the `returnFirstTwoDrivers` function to as its first element and `returnLastTwoDrivers` function to as its last element
let selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

// createFareMultiplier()returns a function that should multiply a given value using the created multiplier
function createFareMultiplier() {
    return function(multiplier) {
        return multiplier * 5;
    }
}

// fareDoubler() is a function that doubles fare
let fareDoubler = fare => fare * 2 