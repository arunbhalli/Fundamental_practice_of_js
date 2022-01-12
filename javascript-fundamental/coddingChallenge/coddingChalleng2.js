/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/
const markmass = 78;
const johnmass = 92;
const markHeight = 1.69;
const johnHeight = 1.62;

const BMIMarks = markmass / markHeight ** 2;
console.log(BMIMarks);
const BMIJohn = johnmass / johnHeight ** 2;
// const markHigherBMI=(BMIJohn < BMIMarks)
if (BMIMarks > BMIJohn) {
  result = `Mark's BMI (${BMIMarks.toFixed(
    1
  )}) is  higher than John's (${BMIJohn.toFixed(1)}) BMI !`;
} else
  result = `John's (${BMIJohn.toFixed(
    1
  )}) BMI is  higher than  Mark's BMI (${BMIMarks.toFixed(1)}) ! `;
console.log(BMIJohn);
console.log(result);
