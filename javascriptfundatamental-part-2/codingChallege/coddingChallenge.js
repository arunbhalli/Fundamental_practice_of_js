const bills = [125, 55, 44];
const calTip = (bill) => {
  return bill >= 50 && bill <= 55 ? bill * 0.15 : bill * 0.2;
};
const tip = [
  calTip(bills[0]),
  calTip(bills[1]),
  calTip(bills[bills.length - 1]),
];
console.log(tip);
const TotalBills = [bills[0] + tip[0], bills[1] + tip[1], bills[bills.length - 1] + tip[tip.length - 1]];
console.log(TotalBills);

//const tips = [typeof tip1, tip2, tip3];

//et tip2 =;
//let tip3 = calTip(allBills[allBills.length - 1]);
/*const arrayOfTotalBills = [
  calTip(allBills[0]),
  
  calTip(allBills[allBills.length - 1]),
];*/
//let tips = [tip1, tip2, tip3];
//console.log(arrayOfTotalBills[0])
