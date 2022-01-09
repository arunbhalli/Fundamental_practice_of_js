

// let allows to change the value of variable
let age =24
age = 27
console.log(age)
// we can not reassingn the value for a variable if we are using const variable...
const Name="Arun"
Name="rahul"
console.log(Name,typeof Name)//TypeError: Assignment to constant variable.


var variable1 // declared using var
const variable2 // declared using const

myFunction1();

function myFunction1() {
  variable1 = "hello!";
  console.log(variable1);
  // "hello!"
}

myFunction2();

function myFunction2() {
  variable2 = "hello!";
  // error: variable2 is a constant and can not be redifined
}

myFunction3(true);

myFunction3(codition) {
  if(condition) {
    let variable3 = "helo!" // declared using const
  }
  variable3 = "hello!";
  // error: variable3 is out of scope
}


/*var:
 -can be declared outside any function to be used inside any function
 -can be declared inside any function or any other {} which are of only if or if-else or switch etc. and can be used anywhere inside the function
 -can be changed again and again anywhere



let:
 -can be declared outside any function to be used inside any function
 -if declared inside any function or any other {} which are of only if or if-else or switch etc. and can't be used anywhere inside the function and can be only used inside statement
 - can be changed again and again only inside the statement in which they are made in
 const:
 -can be declared outside any function to be used inside any function
 -can be declared inside any function or any other {} which are of only if or if-else or switch etc. and can be used anywhere inside the function
 -cannot be changed again and agan anywhere, if tried to, will result in an error
*/