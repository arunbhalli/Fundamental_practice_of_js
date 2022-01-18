// codding challenge 3

const johnData = {
  first_name: 'John',
  last_name: 'Singh',
  birthYear: 1997,
  mass: 78,
  height: 1.69,
  occupation: 'Teacher',
  friends: ['Rahul', 'Rohan', 'Mohit', 'Gaurav', 'Ajay'],
  hasDriversLicense: true,
  johnBmi: function () {
    bmiOfJohn = this.mass / this.height ** 2;
    return bmiOfJohn;
  },
};
console.log(johnData.johnBmi());
const markData = {
  first_name: 'Mark',
  last_name: 'Singh',
  birthYear: 1997,
  mass: 60,
  height: 1.2,
  occupation: 'Teacher',
  friends: ['Rahul', 'Rohan', 'Mohit', 'Gaurav', 'Ajay'],
  hasDriversLicense: true,
  markBmi: function () {
    bmiOfMark = this.mass / this.height ** 2;
    return bmiOfMark;
  },
};
if (johnData.johnBmi() > markData.markBmi()) {
  return console.log(`${johnData.first_name} ${johnData.last_name}
  He works as a ${johnData.occupation}.
  He was born in ${johnData.birthYear}.
  He has ${johnData.johnBmi()} BMI greater than ${
    markData.first_name
  }'s ${markData.markBmi()} BMI
  `);
} else
  console.log(`${markData.first_name} ${markData.last_name}
He works as a ${markData.occupation}.
He was born in ${markData.birthYear}.
He has ${markData.markBmi()} BMI greater than ${
    johnData.first_name
  }'s ${johnData.johnBmi()} BMI
`);
