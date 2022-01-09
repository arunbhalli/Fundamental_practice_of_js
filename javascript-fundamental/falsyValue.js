//falsy values


console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

//const money =0// it will give ans You should get a job because condition will convert 0 into false because it is a falsy value
let money 
//const money =Nun
//const money =0
if (money) {
  console.log("Dont spend it all") 
}
else {
  console.log("You should get a job")
}

const balance =12// it is a truthy value ans will be Dont spend it all
if (balance) {
  console.log("Dont spend it all") 
}
else {
  console.log("You should get a job")
}