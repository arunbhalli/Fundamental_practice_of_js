//There 7 types of data types
//(1)Number datatype type

let age =23;
console.log(age)
console.log(typeof age)

//(2)String datatype type

let Name="Arun"
console.log(Name, typeof Name)//console.log(typeof Name)

//(1) Boolean datatype type
 true;

console.log(true)

let javascriptisFun=true;
console.log(javascriptisFun)
console.log(typeof javascriptisFun)

//(3) Undefined datatype type

let Arun;
console.log(Arun,typeof Arun)
//(4) Null datatype type

let ageofArun = null;
console.log(ageofArun)
console.log(typeof ageofArun)
//(5) Object datatype type
let nameofPerson = {first:"Jane", last:"Doe"};
console.log(nameofPerson.first + " " + nameofPerson.last,typeof nameofPerson)
//(6) Symbol datatype type 
//A value having the data type Symbol can be referred to as a "Symbol value". 
//In a JavaScript runtime environment,
 //a symbol value is created by invoking the function Symbol,
 // which dynamically produces an anonymous, unique value. 
//A symbol may be used as an object property.
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")

console.log(Sym1 === Sym2)
console.log(typeof Sym1)
//(7)Big int  datatype type