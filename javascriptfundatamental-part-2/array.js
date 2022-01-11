const friends = ['michel', 'Steven', 'Peter'];

const years = new Array(1991, 1995, 1999, 1987, 1990);
console.log(friends, years);

console.log(friends[0], years[0]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'jay';

console.log(friends, years);

const jonas = ['Jonas', 'Swordsman', 2037 - 1991, 'teacher', friends];

console.log(jonas);

console.log(jonas.length);
// Exercise for practice

let yearsData = [1997, 1998, 1995];
function myAge(birthYear) {
  return 2022 - birthYear;
}
//age = myAge(1997)
//console.log('My age is'+' '+ age);

let age1 = myAge(yearsData[0]);
let age2 = myAge(yearsData[1]);
let age3 = myAge(yearsData[yearsData.length - 1]);
const ages = [
  myAge(yearsData[0]),
  myAge(yearsData[1]),
  myAge(yearsData[yearsData.length - 1]),
];
console.log(ages);
console.log('My age is' + ' ' + age1, age2, age3);
