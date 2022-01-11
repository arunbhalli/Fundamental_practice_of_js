//

const friends = ['michel', 'Steven', 'Peter'];
const newLength = friends.push('Jacky');
friends.unshift('john');
console.log(friends);
console.log(newLength);
console.log(friends.includes('john'));
const popped = friends.pop();
friends.shift();

console.log(popped);
console.log(friends);
