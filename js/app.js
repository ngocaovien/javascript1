//
// /*var firstName = prompt("What is your first name?");
//
// var lastName = prompt("What is your last name?");
//
// console.log(firstName,'is your first name.');
//
// alert(lastName + ' is your last name.');
//
// birthDate = confirm('Is your birthday 1/1/18?');
//
// if (birthDate === true) {
//   alert('1/1/18 is your birthday.')
// }
//
// //if (window.confirm("Do you really want to leave?")) {
//   //window.open("Thanks for Visiting!");
// //}
// */
//
//
// /*
// var newVariable = "hungry and hungry";
// var anotherVariable = new String(newVariable);
//
// console.log(newVariable === anotherVariable);  //false; one is a string one is an object the other primitive
// console.log(newVariable == anotherVariable); //true because they are the same value.
//
// var primitive ="hello world";
// var stringObject = new String("Hello World");
// console.log(primitive == stringObject); //the value is the SAME
// console.log(primitive === stringObject); // why is it false ?? look below.
// console.log(typeof(primitive));
// console.log(typeof(stringObject));
//
// console.log(primitive.length); //only temporarily changes it, then changes right back.
// console.log(typeof(primitive));
//
//
//
// var number1 =12;
// var number2 = 780;
//
// number1 += 12; //redlecaring the varialbe again on this line.
// console.log(number1)
// */
//
// var valueTen = prompt("Give me a number", "10");
// var valueSecond = prompt("Give me another number", "please be 10");
//
// // // 3 ways to convert them into a number.
// //
// // //one is number1= new Number(number1
// // //look UP parse
// //
// // //CONTROL FLOW -3 differnt type that be used to make all programs and interchangeable.
// // /* number one: if else.-- you your program a test, if this thing is truthy..then do this, else do this.
// //
// // fucntion testNum(a){
// //   if (a>0)
// // } else { do this!}
// //  */
// //
// //  CONST bestMovie = "Hero";
// //
// // if(typeof(bestMovie)) ==='string' { //typeof is how we check it to check the type of var
// //   alert("yay it's a string!");
// // } else {
// //   alert("It's not a string!")
// // }

var userAge = confirm('Are you over 18?', 'no');
if (userAge === true ) { //use console.log to test it
  underEighty = confirm("Are you under 80");
  if(underEighty) {
    var starWars = confirm("do you like star wars?");
    if(starWars) {
      alert('You rock');
    }

  } else {
  confirm("Do you like prunes");
}
} else {
  alert('Youre not old enought...thats great kid');
}
