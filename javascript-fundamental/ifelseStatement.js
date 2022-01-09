// Checking person can get driving licence or not.

const age = 15;
const ageOldEnough = age >= 18;
let result;
if (age >= 18) {
  result = 'Can get a driving licence';
} else {
  const remainingAge = 18 - age;
  result = `You can apply for licence after ${remainingAge} years`;
}
console.log(result);

// Checking for for the person born before 20 centuary or after 20 centuary and printing centuary also...............

const birtYear = 1997
let centuary;
if (birtYear <= 2000){
centuary = 20
}
else{
  centuary = 21;
}
console.log(centuary)
