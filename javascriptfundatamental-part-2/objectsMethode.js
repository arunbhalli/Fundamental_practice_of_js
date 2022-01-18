const jonasObject = {
  name: 'Arun ',
  last_name: 'Singh',
  birthYear: 1997,
  occupation: 'Teacher',
  friends: ['Rahul', 'Rohan', 'Mohit', 'Gaurav', 'Ajay'],
  hasDriversLicense: true,

  calcAge: function () {
    myAge = 2022 - this.birthYear;
    console.log(myAge);
    return myAge;
  },

  getSummary: function () {
    if (this.hasDriversLicense == true) {
      console.log('He has a driving licence');
    } else {
      console.log('No driving licence');
    }
    userData = ` 
    ${this.name}${this.last_name} 
    He works as a ${this.occupation}.
    He was born in ${this.birthYear}.
    He is ${this.calcAge()} Years old.`;
    return userData;
  },
};
console.log(jonasObject.getSummary());
console.log(jonasObject.birthYear);
console.log(jonasObject.calcAge());
