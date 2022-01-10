const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71).toFixed(1);
let scoreKoalas = calcAverage(65, 54, 49).toFixed(1);
console.log(scoreDolphins, scoreKoalas);

const checkWinners = (avgDolphines, avgKoalas) => {
  if (avgDolphines >= 2 * avgKoalas) {
    let winner = `Winner is dolphines and scores are ${avgDolphines} and ${avgKoalas}`;
    console.log(winner);
  } else if (avgKoalas >= avgDolphines * 2) {
    let winner = `Winner is Koalas and scores are ${avgKoalas} and${avgDolphines} `;
    console.log(winner);
  } else {
    console.log('It is a tie');
  }
};
 scoreDolphins = calcAverage(44, 23, 71).toFixed(1);
 scoreKoalas = calcAverage(650, 54, 49).toFixed(1);

checkWinners(scoreDolphins, scoreKoalas);
