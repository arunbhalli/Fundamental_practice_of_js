// function declarations
let age = myAge(1997);
function myAge(birthYear) {
  return 2022 - birthYear;
}
//age = myAge(1997)
console.log('My age is'+' '+ age);


// function expressions

const myAge2 = function (birthYear) {
  return 2022 - birthYear;
}
let age2 = myAge2(1997)
console.log('My age is'+' '+ age2);