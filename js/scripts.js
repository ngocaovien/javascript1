// // // // /*
// // // //
// // // // //this is a string, anything inside quotes
// // // // var sentence="foodie is cool";
// // // // console.log(sentence);
// // // //
// // // // /*this is a number, any number, decimals ok. Not negative infinity or unreal #
// // // // no greek number...yet*/
// // // // /*
// // // // var number=2
// // // // console.log(number)
// // // //
// // // // /*console.log is only for us (the programmer). or development. good for
// // // // trouble shooting.*/
// // // //
// // // // /*boolean is true or false. logical operator. there are two states:
// // // // open  or close, yes or no. etc.*/
// // // // /*
// // // // var yes = true
// // // // console.log(yes)
// // // //
// // // // /* type for the above is boolean, but it's true. --if something exists that
// // // // return as true.
// // // //  think about naming things that make sense. var yes=true, don't do the other way around.
// // // //
// // // //  boolean makes your code dynamic. base on user's input. this is how we can make games.
// // // // */
// // // //
// // // //
// // // // /*undefined is PRIMITVE value assginet o variables that have just been declared
// // // // but have no definition for it.
// // // //
// // // // undefined = NOT DEFINE*/
// // // //
// // // // /* NULL the thing does not exist. the absensce of something. NOTHING. primitive.*/
// // // //
// // // // /* a block of code anything inside of two { }
// // // // block can be inifintely nested. inherit from parents but does know their kids
// // // // */
// // // //
// // // // //THREE different types of varibles
// // // // /*
// // // //
// // // // var firstNumber = 22; //declaration and definition
// // // // var secondNumber = 11;
// // // //
// // // // //line 39 in other program will be two steps: var firstNumber; firstNumber = 22;
// // // //
// // // // //static code, if you already know the varible (22-11).
// // // //
// // // // /*if console.log(firstNumber) is before but defined underneath, we get undefined
// // // // JAVAscript hoist for all the varibles in the script. HOIST the declaration NOT
// // // // the definitation.
// // // //
// // // // hositing is only for var.
// // // //
// // // // what if there are two different definition for the same var? depends where it
// // // // happens.
// // // //
// // // // var can be declare and define in the same line. var can also be hosited from the
// // // // beginning. and it can be re-define later in the script.
// // // //
// // // //
// // // // Let is another type of variable. a differnt kind of pointer. pointer because it
// // // // the varible points to a spot for look up. */
// // // //
// // // // //let firstNumber =22;
// // // //
// // // // /* let will not be hoist to the top as oppose to varible. solely created for
// // // // that reason. chances are, when you have many many, you might re-define varibles.
// // // // inside of any block of code, LET don't get hoisted.
// // // //
// // // // a let firstNumber and a var firstNumber is not the same thing.
// // // // let varibles only exist inside their scope or {}. var will get pull
// // // // from anywhere. let can be delcare and define at the same time.
// // // //
// // // // inferred variable declaration: see below.
// // // //
// // // // secondNumber =23;
// // // // console.log(secondNumber);
// // // //
// // // // var secondNumber=11;
// // // // var secondNumber=222;  --> points to 2 different places.
// // // //
// // // // TIME FOR CONSTANT*/
// // // //
// // // // //console.log(truth)
// // // // //const truth = "ep8 was terrible"; --> DOES NOT HOISTED.
// // // //
// // // // /* can not change/redefine/re-declared the value of a constant.
// // // // constant is like a let. stuck inside it's scope.
// // // //
// // // // Any time you want one value to BE THAT VALUE. use the constant.
// // // //
// // // // there's a reason why let and const can't be redefine the way var is. */
// // // //
// // // // // javascript built in date to stuff.
// // // //
// // // // /*NEW is a keyword in JAVAscript. it's reserved like console.*/
// // // //
// // // //
// // // // //let rightNow = new Date(); //new gives you one copy or instance of what you're
// // // // //console.log(rightNow); //asking for (rightNow will only equal to the date.)
// // // //
// // // // //FUNCTIONS and METHODS are same. date.parse ()
// // // //
// // // // //1/1/1970 epoch first time computer to computer communication. how many milliseconds since epoch.
// // // //
// // // // /* use parse if you get information that is wrong.
// // // //
// // // // ALSO date.utc()--> universal time. */
// // // //
// // // // //Math //is a reserved keyword
// // // // /*
// // // // var iLikePi = Math.PI;
// // // // console.log(iLikePi);
// // // //
// // // //
// // // // var string ="lalalalal" //primitive
// // // // var newString = new String ('lalalal')
// // // // console.log(newString);//--> string printed as a OBJECT
// // // //
// // // //
// // // // console.log(newString.toUpperCase()) //object can be plugged into a function.
// // // // //toUpperCase amkes it all upppercase. Not declaring and using uppercase function
// // // // //will take up more resources. Primitive version is not good in that sense.
// // // //
// // // // /* anytime you take a function and add a method, it will be the value that
// // // // you requested. and it will be appear not as the object. llok at the uppercase ahead*/
// // // // /*
// // // // var number=6;
// // // //
// // // // var objNumber = new Number(6)
// // // //
// // // // console.log(number);
// // // // console.log(objNumber);
// // // //
// // // // //always use the primitive form of boolean.
// // // //
// // // // /* ARRAY is a way to store information*/
// // // // /*
// // // // var fruits = ['Apple', 'Banana']
// // // //
// // // //
// // // //
// // // // //NOTES FOR 1/23/18
// // // //
// // // // /* primitves can't be change. it is what it is.
// // // //
// // // // 6 PRIMITIVES: string, number, boolean, undefined, null.
// // // //
// // // // BLOCKS of code. anything inside the {}
// // // //
// // // // VARIBLES:
// // // //
// // // // hoisting= java grabs the varible declarations from the beginning. takes them al
// // // // to the top of the program. only VAR gets hoisted. hoisted to the top.
// // // //
// // // // one difference between VAR and LET, LET is local and won't get hoisted. LET can
// // // // not be redefined in the same {{}}.
// // // //
// // // // CONST can not be change in the same {}. BLOCK.
// // // //
// // // // ----ARRAYS---
// // // //
// // // // anything inside of [] is an array. */
// // // //
// // // // /*var myArray=[];
// // // //
// // // // //length of the array is how many items are in the array.
// // // // , null
// // // // var myArray = ["Hello World", 22, true, {}, null ];
// // // // console.log(myArray.length);
// // // //
// // // // //as long as you separate by comma, you can have as many data as you want.
// // // //
// // // // /* object are similar but, must have key/properties
// // // // */
// // // //
// // // // /*var myObject = {
// // // //   myString: "Hello World",  //mySting is an object property, not a varible.
// // // //   magicNumber: 42  //you can add more, just use a comma. you can objects nested
// // // //   //inside other objects.
// // // // };
// // // //
// // // // //arrays are more compact, comapared to objects. quicker transfer of information.
// // // // //array is a set. objects is a set of set.
// // // //
// // // // //ALERT, CONFRIM and PROMPT; ways to talk to user.
// // // // /* Alert, just tell the user something.
// // // // */
// // // // /*
// // // // let helloMessage = alert("Hello, there! My books is only $9.99");
// // // //
// // // // let confirmMessage = confirm("Is your name Jesus?");
// // // // console.log(confirmMessage);
// // // //
// // // // let promptMessage = prompt("Tell me the password....", "password");
// // // // console.log(promptMessage);
// // // //
// // // // // alert, confirm, and prompt are all funcitons. FUNCTIONS return something.
// // // //
// // // // /*var firstName = prompt("What is your first name?");
// // // //
// // // // var lastName = prompt("What is your last name?");
// // // //
// // // // console.log(firstName,'is your first name.');
// // // //
// // // // alert(lastName + ' is your last name.');
// // // //
// // // // birthDate = confirm('Is your birthday 1/1/18?');
// // // //
// // // // if (birthDate === true) {
// // // //   alert('1/1/18 is your birthday.')
// // // // }*/
// // // // /*
// // // // const firstName = prompt("what is your first name?", "Maria");
// // // // const lastName = prompt("What is your last name?", "is the best...duh");
// // // // console.log(firstName);
// // // // alert(lastName);
// // // //
// // // // //tricky parents
// // // //
// // // // let birthday = prompt("What's your birthday?", "Please answer in the following format 1/1/1990");
// // // // //how do we take this info and make it an objects
// // // // confirm( new Date(birthday)); //break this line down into parts. new date for constructive version.
// // // // //this is my gh-pages branch
// // // //
// // // //
// // // // //REAL DAY 3 stuff
// // // //
// // // // /*logical operator, how to think like a computer.
// // // // var a = 3;
// // // // var b = -2;
// // // // logical AND (&&) both have to match.
// // // // log ( a > 0 && b > 0);// expected output false
// // // //
// // // // locigal or
// // // // console.log( a > 0 || b >0) /expected output: true
// // // //
// // // // logical NOT (!)
// // // // */
// // // // //const bestNumber = 42;
// // // // //console.log(!bestNumber); //the hell does ! do? what evers comes after the !, can it come back as true? it will return false.
// // // //
// // // // // ! checks for if what's after it is null. is it null? false, it is declared.
// // // //
// // // // //const bestNumber = "";
// // // // //console.log(!bestNumber);
// // // //
// // // // //memorize when things are falsy and truthy
// // // //
// // // //
// // // // /*why do we use this ?? ! ? ; we can use it in our first and last name scenario.
// // // // look below for that example..*/
// // // //
// // // // //console.log(!firstName && !lastName)
// // // //
// // // // /*COMPARSION operators
// // // //
// // // // java is a loosely type language.
// // // //
// // // // loose vs strict */
// // // // /*
// // // // var string = "1"; //different type, string and number.
// // // // var number = 1;
// // // //
// // // // console.log(string == number); //not the same type but are the same value.
// // // // console.log(string === number); //false, they are not the same type
// // // //
// // // // // type and value for === strict
// // // // // type for == loosely
// // // //
// // // // //TRUE OR FALSE
// // // //
// // // // //quick not about objects: if you declare two objects that are exactly the same, they are not the same.
// // // //
// // // // let obj1 = {name:"Vien"}; //object is not a value, but -->location of the memory.
// // // // let obj2 = {name:"Vien"};
// // // //
// // // //
// // // // /*var firstName = prompt("What is your first name?");
// // // //
// // // // var lastName = prompt("What is your last name?");
// // // //
// // // // console.log(firstName,'is your first name.');
// // // //
// // // // alert(lastName + ' is your last name.');
// // // //
// // // // birthDate = confirm('Is your birthday 1/1/18?');
// // // //
// // // // if (birthDate === true) {
// // // //   alert('1/1/18 is your birthday.')
// // // // }
// // // //
// // // // //if (window.confirm("Do you really want to leave?")) {
// // // //   //window.open("Thanks for Visiting!");
// // // // //}
// // // // */
// // // // /*
// // // // var newVariable = "hungry and hungry";
// // // // var anotherVariable = new String(newVariable);
// // // //
// // // // console.log(newVariable === anotherVariable);  //false; one is a string one is an object the other primitive
// // // // console.log(newVariable == anotherVariable); //true because they are the same value.
// // // //
// // // // var primitive ="hello world";
// // // // var stringObject = new String("Hello World");
// // // // console.log(primitive == stringObject); //the value is the SAME
// // // // console.log(primitive === stringObject); // why is it false ?? look below.
// // // // console.log(typeof(primitive));
// // // // console.log(typeof(stringObject));
// // // //
// // // // console.log(primitive.length); //only temporarily changes it, then changes right back.
// // // // console.log(typeof(primitive));
// // // //
// // // // */
// // // //
// // // // //MATH stuff
// // // // /*console.log(12 + 33)
// // // //
// // // // var number= "a";
// // // // var number2 = "90";
// // // //
// // // // console.log(number + number2);
// // // //
// // // // // % modulus. modular gives back the remainder.
// // // // // FIZZ BUZZ common way tech company test you out.
// // // //
// // // // //incrementer add 1 to the number(++)
// // // //
// // // // console.log(isNaN(number1)); // isNAN meanss "is it not" a number.
// // // // // Nan is an Object.
// // // //
// // // // // is NaN === NaN? no, they are both an object.
// // // //
// // // // //ASSIGNMENT operators
// // // //
// // // // // x+= y is equal to this:  x = x + y */
// // // // /*
// // // // var number1 =12;
// // // // var number2 = 780;
// // // //
// // // // number1 += 12; //redlecaring the varialbe again on this line. CHANGES THE VALUE OF number1
// // // // console.log(number1) //number1 here is no longer 12.
// // // //
// // // // // 3 ways to convert them into a number.
// // // //
// // // // //one is number1= new Number(number1
// // // // //look UP parse
// // // //
// // // // //CONTROL FLOW -3 differnt type that be used to make all programs and interchangeable.
// // // // /* number one: if else.-- you your program a test, if this thing is truthy..then do this, else do this.
// // // //
// // // // fucntion testNum(a){
// // // //   if (a>0)
// // // // } else { do this!}
// // // //  */
// // // // /*
// // // //  const bestMovie = "Hero";
// // // //
// // // // if(typeof(bestMovie) === 'string') { //typeof is how we check it to check the type of var
// // // //   alert("yay it's a string!");
// // // //
// // // // } else if(typeof(bestMovie === 'number') {
// // // //   alert('Its a number');
// // // //   }
// // // // } else {
// // // //   alert("It's not a string!");
// // // // }
// // // // */
// // // //
// // // // //Swtich statement, youwould use when many many different conditions that all
// // // // //can be resolved with sort lines of code. Much quicker in that scenario than if else.
// // // // // const bestMovie = [];
// // // // // switch(typeof(bestMovie)) {
// // // // //   case 'string': //everything after : is what we what to happen if the var is a stirng
// // // // //     alert('Yay its a string!');
// // // // //     break; //neneded after every switch statement, like the {} in a if else.
// // // // //   case "number":
// // // // //     alert("It's a number!");
// // // // //     break;
// // // // //   case "boolean":
// // // // //     alert("It's a bool!");
// // // // //     break;
// // // // //   case "object":
// // // // //     alert('object');
// // // // //     break;
// // // // //     default: //in any other case do this.
// // // // //     alert("its an array");
// // // // //     break;
// // // // // }
// // // //
// // // // //TENARIES good for yes or no, true or false questions, but don't nest them.
// // // //
// // // //
// // // // const bestMovie= [];
// // // //
// // // // bestMovie !== undefined ? alert('it exists') : alert('it doesn\'t exist');
// // // // //if it is true, what i write after the ? will happen, then : is what to do if it's not true. DONT NEST
// // // //
// // // // //Quick word on edge cases: think that your client are hecka dumb, but they will always come up with something you didn't catch.
// // // //
// // // // ``
// // // //
// // //
// // //
// // // /// DAY 4/... array are for storing data. Array starts with a 0. Array have differnt methods. more
// // // // way to do array than string.
// // //
// // // var arr = ["thingOne", 22 , true , {}, []];  //array inside array/muiltidimensional
// // // //the pposition or index..index for 22 is 1. and the empty array is 4.
// // //
// // // console.log(arr[4], arr[1]);
// // //
// // // var myVariables = ["John Wick2", 8, true, 2000 ];
// // // console.log(myVariables,  myVariables.length, "ORIGNAL");
// // //
// // //
// // // //ALL the fund stuff. Methods to manipulate ARRAYS
// // // //how do we know it's an array. array.isArray(nameofarray)
// // // //
// // // // console.log(typeof(myVariables));
// // // // console.log(Array.isArray(myVariables));
// // //
// // // //why do we need to check if something is an Array? Due tor API and communicating
// // // //with other software/ network, hence we need to check. Before you do anything
// // // //with the data you get back you gotta check it ot know what it is.
// // //
// // // //isArray. to check if it's an array.
// // //
// // // //push is a way to add to an array.
// // //
// // // // var bestTeacher = prompt("Who is the best teacher?", "Damon");
// // // // myVariables.push(bestTeacher); //arrra.push.(whattopush)
// // // // console.log(myVariables);
// // //
// // // //ANOTHER method UNSHIFT will put it in the front.
// // // //
// // // // var bestTeacher = prompt("Who is the best teacher?", "Damon");
// // // // myVariables.unshift(bestTeacher); //arrra.push.(whattopush)
// // // // console.log(myVariables);
// // //
// // // //POP and takes the last element out of the array.
// // // //SHIFT remove the first element
// // //
// // // //push and unshift change the original array. POP and SHIFT change then//original
// // // //array and ALSO gives us access to it.
// // //
// // // // var removedItem = myVariables.pop(); //remove and store
// // // // myVariables.pop; //removes item
// // // // console.log(myVariables);
// // // // console.log(removedItem);
// // //
// // // //way to manipulate array.
// // //
// // // // var removedItem = myVariables.shift(); //remove and store
// // // // myVariables.shift; //removes item
// // // // console.log(myVariables);
// // // // console.log(removedItem);
// // //
// // // //SPLICE removes element and optionally add others. AND returns it in an array.
// // // //you need to at least know the index when using splice.
// // //
// // // // myVariables.splice(2,1, false); //2 is go to 2 index; 1 is delete index 2 item.
// // // // console.log(myVariables);
// // // //
// // // // myVariables.splice(2, 0, false); //this will sequeeze in false at index 2 because 0/nothing is deleted.
// // // // console.log(myVariables);
// // //
// // // //splice also lets you start from the end ofthe array and move into back.
// // // // myVariables.splice(-2,1); //2 is go to 2 index; 1 is delete index 2 item.
// // // // console.log(myVariables);
// // // //
// // // // myVariables.splice(2, 0, false); //this will sequeeze in false at index 2 because 0/nothing is deleted.
// // // // console.log(myVariables);
// // //
// // // //SLICE method don't confuse it with splice. makes a photocopy of the array.
// // //
// // // var removeItem =myVariables.slice(0,2); //up to but not including the 2 index.
// // // console.log(removeItem, myVariables);
// //
// // //day 3 takehome
// //
// // var userName = prompt("What is your name?" ,"Vin");
// // var favoriteColor = prompt("What is your favorite color?" ,
// // "red, orange, yellow, green, blue, pink, purple, black, white, grey");
// // // /*if(favoriteColor == "red"){
// // //   console.log("Roses are red." , userName);
// // // } else if(favoriteColor == "blue") {
// // //   console.log("I'm blue.");
// // // }else{
// // //   console.log("No good.");
// // // }*/
// // //
// // // favoriteColor = favoriteColor.toLowerCase(); //this deasls with the lowercase scenario i was stuck on.
// // // switch(favoriteColor) {
// // //   case'blue':
// // //     alert(userName + ", You're blue, da ba bi da bi da...");
// // //     break;
// // //   case'yellow':
// // //     alert("You're so yellow");
// // //     break;
// // //     deafault:
// // //     alert('Please answer with a color');
// // //     break
// // // }
// // //
// // //
// // // /* string that will include a variable in it.
// // // one to add a string with varible is to add the plus sign. you're gonna need that space:
// // // alert( userName + " is the coolest."); --> supported by everyone, oldest way.
// // //
// // // var userName
// // // var firstName
// // // var lastName
// // // var favoriteColor
// // // */
// // // alert( "Hey there " + userName " it looks like you love "+ favoriteColor)
// // // alert(`Hey there, ${first name} it looks lke you love ${favorite} and your last name is ${lastName}.`)
// // //
// // //
// // // //how would we use the -1 array
// // //
// // // var arr=[1,2,3,4,5];
// // //
// // // if(arr.indexof(6)) !== -1) {
// // //   //do some logic here. makes sure we have the right set of data.
// // // } else}
// // //   //do something here.
// // //
// //
// // var favoriteMovie = ['Star Wars VI', '1983'];
// // var secondFavorite = ['Return of the King', '2003'];
// // var thirdFavorite = ['Equilibrium', '2002'];
// // var myFavoriteMovies = [];
// // myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
// // //Result:
// // //[['Star Wars VI', '1983'], ['Return of the King', '2003'], ['Equilibrium', '2002']];
// //
// // console.log( myFavoriteMovies);
// //
// // var movieYears = [];
// // movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1],myFavoriteMovies[2][1]);
// // alert(movieYears);
//
 var favMovieOne =['Hero' , "Broken Sword"];
 var favMovieTwo = ['Grandmaster' , 'Ip Man'];
 var favMovieThree = ['In the Mood for Love' , 'Tony'];
var favMovieFour = ['Ashes of Time' , 'Evil East'];
 var FavMovieFive = ['A Better Tomorrow' , 'Ken'];
// //steps 2
 var favoriteMovies =[]
 favoriteMovies.push(favMovieOne, favMovieTwo, favMovieThree, favMovieFour, FavMovieFive);
// alert(favoriteMovies);
//
// movieTitle=[];
// movieTitle.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);
// alert(movieTitle);
//
// leastFavorite=[];
// leastFavorite.push(favMovieFour, favMovieOne);
// alert(leastFavorite);
// //moreFavorite=[];
// //moreFavorite.push(favMovieTwo, favMovieThree, FavMovieFive);
// alert(favoriteMovies.length);


// let i = 0;
//
// while (i < favoriteMovies.length) {
//     console.log(favoriteMovies[i])
//     i++;
// }


// for(var i=0; i < favoriteMovies.length; i++) {
//   console.log(favoriteMovies[i]);
// }
//
// var i=0;
//
// do {
//   console.log(favoriteMovies);
//   i++
// }while(i < favoriteMovies.length);
//
//
// //going backwards
// for(var i= favoriteMovies.length -1; i >0; i--) {
//   console.log(favoriteMovies[i]);
// }

for(var i=0; i < favoriteMovies.length; i++) {
    if (favoriteMovies[i][0] === "Grandmaster") {
      alert(`${favoriteMovies[i][0]} is my favorite movie with ${favoriteMovies[i][1]}.`);
      break;
    }
}

for(let i=0; i < favoriteMovies.length; i++) {
    if (favoriteMovies[i][0] === "Grandmaster") {
      alert(`${favoriteMovies[i][0]} is my favorite movie with ${favoriteMovies[i][1]}.`);
      break;
    }
}
