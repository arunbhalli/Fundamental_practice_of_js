// String and Template literal................................

const name = 'Arun';
const job = 'junior developer ';
const birthYear = 1997;
const presentYear = 2022;
const arun =
  'i am ' + name + ' a ' + (presentYear - birthYear) + ' Years old ' + job;
  console.log(arun);
const arunNew = `i am ${name} a ${(presentYear - birthYear)} years old ${job} !`
console.log(arunNew);
