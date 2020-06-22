//Syntax errors from the start

/*var greeting = "Hello";

console.log(greeting);

greeting = ."Hi";    */  // syntax error - unexpected token   //Syntax errors

//This program produces no output ("Hello" is not printed), but instead throws a SyntaxError about the 
//unexpected . token right before the "Hi" string. Since the syntax error happens after the well-formed 
//console.log(..) statement, if JS was executing top-down line by line, one would expect the "Hello" message
//being printed before the syntax error being thrown. That doesn't happen.

//In fact, the only way the JS engine could know about the syntax error on the third line, before executing 
//st and second lines, is by the JS engine first parsing the entire program before any of it is executed.

//These examples shows that program is first parsed where these errors are detected before execution.




/*******************************************EARLY ERRORS ******************************************/

 /* console.log("Howdy");

saySomething("Hello","Hi");
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context

function saySomething(greeting,greeting) {
    "use strict";
    console.log(greeting);
} */

//refPri.js:25 Uncaught SyntaxError: Duplicate parameter name not allowed in this context
//The "Howdy" message is not printed, despite being a well-formed statement.
//functions to have duplicate parameter names; this has not been allowed in strict-mode.





/*****************************Shadowing  ******************************************/

var studentName = "Suzy";

function printStudent(studentName) {
    studentName = studentName.toUpperCase();
    console.log(studentName);
}

printStudent("Frank");
// FRANK

printStudent(studentName);
// SUZY

console.log(studentName);
// Suzy


//This is a key aspect of lexical scope behavior, called shadowing. The BLUE(2) studentName 
//variable (parameter) shadows the RED(1) studentName. So, the parameter is shadowing the (shadowed) global variable.

//That's why the re-assignment of studentName affects only the inner (parameter) variable: the BLUE(2) 
//studentName, not the global RED(1) studentName.

/*************************Illegal Shadowing*****************************************/

function something(){                   //let can shadow var  
    var newVar="function scope";
    {
        let newVar="local";
        console.log(newVar);
    }
    console.log(newVar);
}

something();

function another(){                         //var cannot shadow let (but only in block scope , not in function scope ---- see next function )
    let newVar="FunctionScope";
    {
       // var newVar="Block Scope";
       // console.log(newVar);           // error - Identifier 'newVar' has already been declared
    }
    console.log(newVar);
}

another();

/*The real reason it's raised as a SyntaxError is because the var is basically trying to "cross the boundary" 
of (or hop over) the let declaration of the same name, which is not allowed. */
//let - block scope 
//var - function scope

function another2(){           
    let newVar="Function Scope";
    function insideAnother(){
        // totally fine shadowing
        var newVar="inside Scope";
        console.log(newVar);
    }
    insideAnother();
    console.log(newVar);
}

another2();


var askQuestion = function ofTheTeacher() {
    var ofTheTeacher="Hello";
    console.log(ofTheTeacher);
};

askQuestion();
// function ofTheTeacher()...



/***************************Arrow Function************************/

var askQuestion = () => {
    // ..
};

//The => arrow function doesn't require the word function to define it. 
//the ( .. ) around the parameter list is optional in some simple cases
//  Likewise, the { .. } around the function body is optional in some cases. 
//**** And when the { .. } are omitted, a return value is sent out without using a return keyword.


/******************************Globals Shadowing Global*****************************/

window.something = 42;

let something = "Kyle";

console.log(something);
// Kyle

console.log(window.something);
// 42

//The let declaration adds a something global variable but not a global object property



/*************************What's in a (Window) Name?*********************************/

var name = 42;
//let name=42;

console.log(name, typeof name);
// "42" string

//console.log(name, typeof name);
// 42 number

//window.name is a pre-defined "global" in a browser context; it's a property on the global object, so it seems like a normal global variable
//We used var for our declaration, which does not shadow the pre-defined name global property.
//That means, effectively, the var declaration is ignored, since there's already a global scope object property of that name.
//we used let name, we would have shadowed window.name with a separate global name variable.


/*************************************Web Workers***************************************/


