//this is a string, anything inside quotes
var sentence="foodie is cool";
console.log(sentence);

/*this is a number, any number, decimals ok. Not negative infinity or unreal #
no greek number...yet*/

var number=2
console.log(number)

/*console.log is only for us (the programmer). or development. good for
trouble shooting.*/

/*boolean is true or false. logical operator. there are two states:
open  or close, yes or no. etc.*/

var yes = true
console.log(yes)

/* type for the above is boolean, but it's true. --if something exists that
return as true.
 think about naming things that make sense. var yes=true, don't do the other way around.

 boolean makes your code dynamic. base on user's input. this is how we can make games.
*/


/*undefined is PRIMITVE value assginet o variables that have just been declared
but have no definition for it.

undefined = NOT DEFINE*/

/* NULL the thing does not exist. the absensce of something. NOTHING. primitive.*/

/* a block of code anything inside of two { }
block can be inifintely nested. inherit from parents but does know their kids
*/

//THREE different types of varibles

var firstNumber = 22; //declaration and definition
var secondNumber = 11;

//line 39 in other program will be two steps: var firstNumber; firstNumber = 22;

//static code, if you already know the varible (22-11).

/*if console.log(firstNumber) is before but defined underneath, we get undefined
JAVAscript hoist for all the varibles in the script. HOIST the declaration NOT
the definitation.

hositing is only for var.

what if there are two different definition for the same var? depends where it
happens.

var can be declare and define in the same line. var can also be hosited from the
beginning. and it can be re-define later in the script.


Let is another type of variable. a differnt kind of pointer. pointer because it
the varible points to a spot for look up. */

//let firstNumber =22;

/* let will not be hoist to the top as oppose to varible. solely created for
that reason. chances are, when you have many many, you might re-define varibles.
inside of any block of code, LET don't get hoisted.

a let firstNumber and a var firstNumber is not the same thing.
let varibles only exist inside their scope or {}. var will get pull
from anywhere. let can be delcare and define at the same time.

inferred variable declaration: see below.

secondNumber =23;
console.log(secondNumber);

var secondNumber=11;
var secondNumber=222;  --> points to 2 different places.

TIME FOR CONSTANT*/

//console.log(truth)
//const truth = "ep8 was terrible"; --> DOES NOT HOISTED.

/* can not change/redefine/re-declared the value of a constant.
constant is like a let. stuck inside it's scope.

Any time you want one value to BE THAT VALUE. use the constant.

there's a reason why let and const can't be redefine the way var is. */

// javascript built in date to stuff.

/*NEW is a keyword in JAVAscript. it's reserved like console.*/


//let rightNow = new Date(); //new gives you one copy or instance of what you're
//console.log(rightNow); //asking for (rightNow will only equal to the date.)

//FUNCTIONS and METHODS are same. date.parse ()

//1/1/1970 epoch first time computer to computer communication. how many milliseconds since epoch.

/* use parse if you get information that is wrong.

ALSO date.utc()--> universal time. */

//Math //is a reserved keyword

var iLikePi = Math.PI;
console.log(iLikePi);


var string ="lalalalal" //primitive
var newString = new String ('lalalal')
console.log(newString);//--> string printed as a OBJECT


console.log(newString.toUpperCase()) //object can be plugged into a function.
//toUpperCase amkes it all upppercase. Not declaring and using uppercase function
//will take up more resources. Primitive version is not good in that sense.

/* anytime you take a function and add a method, it will be the value that
you requested. and it will be appear not as the object. llok at the uppercase ahead*/

var number=6;

var objNumber = new Number(6)

console.log(number);
console.log(objNumber);

//always use the primitive form of boolean.

/* ARRAY is a way to store information*/

var fruits = ['Apple', 'Banana']
