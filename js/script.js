// console.log("I Am Totally Connected");

// var Random = "anyone";
// var People = true;
// var age = 30;
// console.log(Random);
// console.log(People);
// console.log(age);

// {
//   var solar_system = "sun";
// }
// console.log(solar_system);

// {
//   var weather = "winter";
//   console.log(weather);
// }

// let x = 15;
// x = 30;
// console.log(x);

// {
//   let x = 11;
//   let y = 12;
//   console.log(x);
//   console.log(y);
//   console.log(x + y);
// }

// {
//   let x = 10;
//   let y = 450;
//   let z = 20;
//   let w = 80;
//   console.log(x + y);
//   console.log(x - y);
//   console.log(w / z);
//   console.log(w * z);
// }

// {
//   let variable = "scope";
//   console.log("Let ", variable);
// }
// {
//   let variable = "scope ";
//   console.log("Let" + " " + variable + "using variable");
// }

// {
//   let variable = "scope";
//   console.log(typeof variable);
// }
// {
//   let variable = 2507;
//   console.log(typeof variable);
// }
// {
//   let variable = false;
//   console.log(typeof variable);
// }

// const pi = 3.141617;
// console.log(pi);

// {
//   let multiplication_table = 16;
//   let number = "multiplication table";
//   console.log(number);
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "1" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 1
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "2" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 2
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "3" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 3
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "4" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 4
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "5" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 5
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "6" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 6
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "7" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 7
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "8" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 8
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "9" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 9
//   );
//   console.log(
//     multiplication_table +
//       " " +
//       "x" +
//       " " +
//       "10" +
//       " " +
//       "=" +
//       " " +
//       multiplication_table * 10
//   );
// }




// welcome

// Grading System with vanila javascrpt

let marks = -76;
if (marks > 100 || marks < 0) {
  console.log("Your marks is invalid please enter correct marks!!!");
}
else if (marks > 32 && marks <= 39) {
  console.log(
    "You just pass the exam and you got D . But very poor performance"
  );
}
 else if (marks > 39 && marks < 50) {
  console.log("You have got C . Also very poor needs to improve!");
}
 else if (marks >= 50 && marks < 60) {
  console.log("You have got B . Also very poor needs to improve!");
} 
else if (marks >= 60 && marks < 70) {
  console.log("You have got A- . Also very poor needs to improve!");
} 
else if (marks >= 70 && marks < 80) {
  console.log("You have got A . Not bad but improvement needed!");
} 
else if (marks >= 80 && marks <= 100) {
  console.log("You have got A+ .Great result , good luck for future!");
} 
else {
  console.log("Your are failed!!");
}

// Grading system end here


// Males Marrige System  in Bangladesh 

let gender = 'Male';
let minIncome = 100000;
let location = "Dhaka";
let age = 21;
let jobCriteria = "governmentJob";

if(gender!== 'Male'){
    console.log('Ohh , We are looking or a perfect Male candidate in planet Earth. You just leave!!!')
}
else if(minIncome < 100000 ){
    console.log('You are too poor to marry. Income ennough money first.')
}
else if(location !== 'Dhaka'){
    console.log('Only Dhakaiya pola needed.')
}
else if(age < 21){
    console.log('Hey kid what are you doing here. Grow up first!!')

}
else if(jobCriteria !== 'governmentJob') {
    console.log('We only want Shorkai Takla . private job has no Garunttee')
}
else{
    console.log('Congratulation you qualified to marry my daughter!!')
}
// Marrige system ends here
 