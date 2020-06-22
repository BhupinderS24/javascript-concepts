console.log(typeof variable); // Output: undefined

//In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.


console.log(variable); // Output: ReferenceError: variable is not defined

//In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.

//The following is the JavaScript lifecycle and indicative of the sequence in which variable declaration and initialisation occurs.

//Declaration(var a)  -----> Initialisation/assignment(a=5) --------> Usage(a+30)

var a = 100;

//variable declarations are processed before any code is executed.
//undeclared variables do not exist until code assigning them is executed.
//all undeclared variables are global variables. (a=30)


function hoist() {
    a = 20;
    var b = 100;
  }
  
  hoist();
  
  console.log(a); 
  /* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */
  
  console.log(b); 
  /*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */





  /************************************global variables*****************************/

console.log(hoist); // Output: undefined

var hoist = 'The variable has been hoisted.';
//We expected the result of the log to be: ReferenceError: hoist is not defined, but instead, its output is undefined.

//JavaScript has hoisted the variable declaration. This is what the code above looks like to the interpreter:

var hoist;

console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';



/***************************************************Function scoped variables************************** */


function hoist() {
    console.log(message);
    var message='Hoisting is all the rage!'
  }
  
  hoist();  // Ouput: undefined

  //This is how the interpreter views the above code:

  function hoist() {
    var message;
    console.log(message);
    message='Hoisting is all the rage!'
  }
  
  hoist(); // Ouput: undefined


  //we would make sure to declare and initialise the variable before we use it:
  function hoist() {
    var message='Hoisting is all the rage!'
    return (message);
  }
  
  hoist(); // Ouput: Hoisting is all the rage!


  //*****************************************************Strict Mode ****************************************/

  //utility of the es5 version of JavaScript known as strict-mode, we can be more careful about how we declare our variables.

  'use strict';

console.log(hoist); // Output: ReferenceError: hoist is not defined
hoist = 'Hoisted'; 

//hoisting is not performed in strict mode.

//in ES6 let and const are used.
//we should declare then assign our variables to a value before using them.


/***************************************************Hoisting functions********************************************/
//JavaScript functions can be loosely classified as the following:
//Function declarations
//Function expressions

/***********Function declarations***********/
hoisted(); // Output: "This function has been hoisted."   //COrrection - function are not hoisted but store in memory in creation see below in details about this misconceptions.

function hoisted() {
  console.log('This function has been hoisted.');
};

//hoisted completely to the top

/*************Function expressions *****************/
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

//Function expressions, however are not hoisted


//Let's try the combination of a function declaration and expression.

expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log('Will this work?');
};

//the variable declaration var expression is hoisted but it's assignment 
//to a function is not. Therefore, the intepreter throws a TypeError since it sees expression as a 
//variable and not a function.


/*****
 * 
 * There are two processes involved in the creation of the execution context viz:

The creation phase: During this phase, the variables and the functions are added to memory. Here the 
JS engine goes through your code line by line and adds all your variables to your computer's memory but 
it does not assign them values just yet. The functions, however, are added to memory in their entirety. 
That is the whole function (name and code block) is added to memory in this phase.

The second phase is the execution phase: During this phase values are assigned to variables and functions
 are called. so even if you initialize a variable with a value it is in this second phase that that value 
 is assigned to it. In the first phase, the value is not assigned to the variable. It is added to memory 
 and initialized with undefined.
 */


 //In case you don't already see it, the whole misconception occurs because of the first (creation) phase 
 //of the execution context. Before the functions are eventually executed they are already in memory during 
 //the creation phase of the execution context so the Javascript engine knows where that function, in its 
 //entirety sits in memory. It did not move it to the top.


//MISCONSEPTIONS CLEAR -- https://dev.to/lawrence_eagles/demystifying-hoisting-in-javascript-4kcj


// A function declaration is hoisted and initialized to its function value (again, called function hoisting). 
//A var variable is also hoisted, and then auto-initialized to undefined.
// Any subsequent function expression assignments to that variable don't happen until that assignment is processed during runtime execution.



//The "rule" of the hoisting metaphor is that function declarations are hoisted first, then variables are hoisted
// immediately after all the functions.


studentName = "Suzy";
greeting();
// Hello Suzy!

function greeting() {
    console.log(`Hello ${ studentName }!`);
}
var studentName;


/*Reaarangement by js enginer */

function greeting() {
  console.log(`Hello ${ studentName }!`);
}
var studentName;

studentName = "Suzy";
greeting();
// Hello Suzy!



/***********************Re-declaration?***********************************/

// when a variable is declared more than once in the same scope

var studentName = "Frank";
console.log(studentName);
// Frank

var studentName;
console.log(studentName);   // ???


// the code would be re-arranged like this for execution purposes
var studentName;
var studentName;    // clearly a pointless no-op!

studentName = "Frank";
console.log(studentName);
// Frank

console.log(studentName);
// Frank


//It's also important to point out that var studentName; doesn't mean var studentName = undefined;

var studentName = "Frank";
console.log(studentName);   // Frank

var studentName;
console.log(studentName);   // Frank <--- still!

// let's add the initialization explicitly
var studentName = undefined;
console.log(studentName);   // undefined <--- see!?

// See how the explicit = undefined initialization produces a different outcome than assuming it happens implicitly when omitted

/**************another illustration, this time across a function of the same name:********** */

var greeting;

function greeting() {
    console.log("Hello!");
}

// basically, a no-op
var greeting;

typeof greeting;        // "function"

var greeting = "Hello!";

typeof greeting;        // "string"

/*******************What about repeating a declaration within a scope using let or const?*********/

let studentName = "Frank";

console.log(studentName);

let studentName = "Suzy";
//This program will not execute, but instead immediately throw a SyntaxError

// If either declaration uses let, the other can be either let or var, and the error will still occur

var studentName = "Frank";
let studentName = "Suzy";

// and:

let studentName = "Frank";
var studentName = "Suzy";

// when ES6 introduced let, they decided to prevent "re-declaration" with an error.
// When Compiler asks Scope Manager about a declaration, if that identifier has already
//  been declared, and if either/both declarations were made with let, an error is thrown. 


/**********************************Const***************************** */

//const declarations cannot be re-assigned, and const declarations always require assignments

// The const keyword requires a variable to be initialized, so omitting an assignment from the declaration results in a SyntaxError:

const empty;   // SyntaxError

// const declarations create variables that cannot be re-assigned:

const studentName = "Frank";
console.log(studentName);
// Frank

studentName = "Suzy";   // TypeError
//e error thrown when re-assigning studentName is a TypeError, not a SyntaxError





/***********************************************************Loops**************************************/
var keepGoing = true;
while (keepGoing) {
    let value = Math.random();
    if (value > 0.5) {
        keepGoing = false;
    }
}

// Is value being "re-declared" repeatedly in this program? Will we get errors thrown? No.