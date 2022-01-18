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
  first_name: 'John',
  last_name: 'Singh',
  birthYear: 1997,
  mass: 92,
  height: 1.95,
  occupation: 'Teacher',
  friends: ['Rahul', 'Rohan', 'Mohit', 'Gaurav', 'Ajay'],
  hasDriversLicense: true,
  markBmi: function () {
    bmiOfMark = this.mass / this.height ** 2;
    console.log(bmiOfMark);
    return bmiOfMark;
  },
};
if (johnData.johnBmi > markData.markBmi) {
  return console.log(`${this.name}${this.last_name} 
  He works as a ${this.occupation}.
  He was born in ${this.birthYear}.
  He is ${this.calcAge()} Years old.`);
}

console.log(markData.markBmi());
