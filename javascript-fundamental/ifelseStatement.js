// Checking person can get driving licence or not.

const age = 15;
const ageOldEnough = age >= 18;
let result;
if (age >= 18) {
  result = 'Can get a driving licence';
} else {
  const remainingAge = 18 - age;
  result = `You can apply for license after ${remainingAge} years`;
}
console.log(result);

// Checking for for the person born before 20 centaury or after 20 centaury and printing centuary also...............

const birthYear = 1997
let centaury;
if (birthYear <= 2000){
centaury = 20
}
else{
  centaury = 21;
}
console.log(centaury)
