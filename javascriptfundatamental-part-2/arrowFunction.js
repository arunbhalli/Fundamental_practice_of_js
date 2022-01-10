// Arrow function
const myAge3 = (birthYear) => 2022 - birthYear;
let age3 = myAge3(1997);
console.log('My age is' + ' ' + age3);

const yearOfRetirement = (birthYear,name) => {
  const age = 2022 - birthYear;
  const retirement = 63 - age;
  return `${name} retires in ${retirement}`;
};
//const leftYears = yearOfRetirement(1997)
console.log(yearOfRetirement(1997,'Arun'))