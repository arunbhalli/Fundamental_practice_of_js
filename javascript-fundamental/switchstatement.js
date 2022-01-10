//let day = prompt('Type the day');
const day= 'saturday'
//let dayup = day.toLowerCase(); // if input value contains any uppercase it will be converted to lower case
console.log(day);
switch (day) {  //replace dayup with day to use prompt
  case 'monday':
    console.log('Go to sfi school');
    break;
  case 'tuesday':
    console.log('finish Fundamental of Js');
    break;
  case 'wednesday':
    console.log('GO for groceries');
    break;
  case 'thusrsday':
    console.log('Cook food for the weekend');
    break;
  case 'friday':
    console.log('Bake pizza for the weekend');
    break;
  case 'saturday':
    console.log('go for ice skating');
    break;
  case 'sunday':
    console.log('apply for jobs');
    break;
  default:
    console.log('Not a valid day ');
}
