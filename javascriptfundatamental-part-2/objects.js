const jonasArray = [
  'Arun',
  'Singh',
  2022 - 1997,
  'teacher',
  ['Rahul', 'Rohan', 'Mohit'],
];

const jonasObject = {
  name: 'Arun ',
  last_name: 'Singh',
  birthYear: 2022 - 1997,
  occupation: 'Teacher',
  friends: ['Rahul', 'Rohan', 'Mohit'],
};
console.log(jonasObject.last_name)

const jonas = prompt('Input your inquiry')

if (jonasObject[jonas]) {
  console.log(jonasObject[jonas])
}else {
  console.log('this data in not in our system data')
}
