/*
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console

*/
let country = 'India';
let continent = 'Asia';
let population = 1380;
population++;
let description = `name of country ${country}
Continent of ${country}  ${continent}
Population of ${country} ${population} Million.
`;
console.log(country, continent, population);
console.log(`name of country ${country}
Continent of ${country}  ${continent}
Population of ${country} ${population} Million.
`);
let isIsland = false;
let languages;
console.log(typeof isIsland, languages, country, continent, population);
console.log(description);
console.log(
  'population in half of country: ' + population / 2 + ' ' + 'Million'
);

/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/
if (population > 13) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is below average`);
}

let numNeighbours = 2;
//let numNeighbours = prompt('How many neighbour countries does your country have?')
numNeighbours = Number(numNeighbours);
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('you have more than 1 neighbour border');
} else {
  console.log('you have no neighboure');
}
language = 'Hindi';
language = language.toLowerCase();
console.log(language);
if (language == 'English' && population == 50 && isIsland == true) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`You should not live in ${country}`);
}

switch (language) {
  case 'chinese':

  case 'mandarine':
    console.log('Most no of speaking language');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('2nd place in number of native speakers');
    break;
  case 'hindi':
    console.log('2nd place in number of native speakers');
    break;
  case 'arabic':
    console.log('2nd place in number of native speakers');
    break;
  default:
    console.log('Great language too');
    break;
}

/* 

*/
