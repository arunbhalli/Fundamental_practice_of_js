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
  friends: ['Rahul', 'Rohan', 'Mohit', 'Gaurav', 'Ajay'],
};
console.log(jonasObject.last_name);

//const jonas = prompt('Input your inquiry')

/*if (jonasObject[jonas]) {
  console.log(jonasObject[jonas])
}else {
  console.log('this data in not in our system data')
}*/

const bestfriend = 'Rohan';

let n = jonasObject.friends.length;
n = n - 1;
if (jonasObject.friends[0] == bestfriend) {
  console.log(`best friend is ${bestfriend}`);
} else if (
  jonasObject.friends[1] == bestfriend ||
  jonasObject.friends[n] == bestfriend
) {
  console.log(` ${bestfriend} is a good friend`);
} else {
  console.log(`${bestfriend} is not in the friends list `);
}
