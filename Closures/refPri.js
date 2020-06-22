//POLE - Principle of Least Exposure

// Closure builds on this approach: for variables we need to use over time, instead of placing them in larger outer scopes,
//we can encapsulate (more narrowly scope) them but still preserve access from inside functions, for broader use. 
//Functions remember these referenced scoped variables via closure.

//Closure is a behavior of functions and only functions. If you aren't dealing with a function,
// closure does not apply. An object cannot have closure, nor does a class have closure 
//(though its functions/methods might). Only functions have closure.


function studentsLookUp(studentId){
    var students=[
         {id:1, name:"Bhupinder"},
         {id:2, name:"Navi"},
         {id:3, name:"Bhupi"},
         {id:4, name:"Gopi"},
    ];

    return function greetings(greeting){
        var student = students.find(student=> student.id===studentId);

        return `${greeting} ${student.name}!`;
    }
       
}

var chosenStudents=[ studentsLookUp(1), studentsLookUp(2)];

console.log(chosenStudents[0]);

console.log(chosenStudents[0]("Hello"));
console.log(chosenStudents[1]("Hello"));


//After each call to lookupStudent(..) finishes, it would seem like all its inner variables would be 
//discarded and GC'd (garbage collected). The inner function is the only thing that seems to be returned and 
//preserved. But here's where the behavior differs in ways we can start to observe.

//While greetStudent(..) does receive a single argument as the parameter named greeting, 
//it also makes reference to both students and studentID, identifiers which come from the enclosing 
//scope of lookupStudent(..).

//Each of those references from the inner function to the variable in an outer scope is called a closure.

//Closure allows greetStudent(..) to continue to access those outer variables even after the outer scope is 
//finished (when each call to lookupStudent(..) completes). 

//Instead of the instances of students and studentID being GC'd, they stay around in memory. At a later time 
//when either instance of the greetStudent(..) function is invoked, those variables are still there, holding their current values.

function adder(num1){
    return function addTo(num2){
        let num3= num1+num2;
        return num3;
    };
}

var addTo10 = adder(10);
var addT040 = adder(40);

console.log(addTo10(33));
console.log(addTo10(22));

// closure is associated with an instance of a function, rather than its single lexical definition.
// every time the outer adder(..) function runs, a new inner addTo(..) function instance is created, 
//and for each new instance, a new closure.

// So each inner function instance (labeled add10To(..) and add42To(..) in our program) has its own closure 
//over its own instance of the scope environment from that execution of adder(..).



/******Closed Over Value Updated (Live Link not a Snapshot) *************/

//


function adder2(num1){
    return function addTo(num2){
        let num3= num1+num2;
        num1=7;                                   //changing value for second call
        return num3;
    };
}

var addTo102 = adder2(10);
var addT0402 = adder2(40);

console.log(addTo102(33));
console.log(addTo102(22));

//the closed variable num1 value is changed in first call of addTo() function and when again we called , 
//it takes that changed value i-e num1.


//another Example 

function makeCounter() {
    var count = 0;

    return function getCurrent() {
        count = count + 1;
        return count;
    };
}

var hits = makeCounter();

// later

hits();     // 1

// later

hits();     // 2
hits();     // 3

//The count variable is closed over by the inner getCurrent() function, which keeps it around instead of it
// being subjected to GC. The hits() function calls access and update this variable, returning an incrementing count each time.



/*****outer scope can/cannot be a function*****/

//Though the enclosing scope of a closure is typically from a function, that's not actually required; 
//there only needs to be an inner function present inside an outer scope:

var hits;

{
    // an outer scope (but not a function)
    let count=0;
    hits = function getCurrent(){
        count++;
        return count;
    }
}

console.log(hits());  //1
console.log(hits());  //2
console.log(hits());  //3

/*********************************************/

var keeps = [];

for (var i = 0; i < 3; i++) {
    keeps[i] = function keepI(){
        // closure over `i`
        return i;
    };
}

keeps[0]();   // 3 -- WHY!?
keeps[1]();   // 3
keeps[2]();   // 3


//Each saved function returns 3, because by the end of the loop, the single i variable in the program has been assigned 3.
//Each of the three functions in the keeps array do have individual closures, but they're all closed over that same shared i variable.

// The classic illustration of this mistake is defining functions inside a loop:

var keeps = [];

for (var i = 0; i < 3; i++) {
    keeps[i] = function keepI(){
        // closure over `i`
        return i;
    };
}

keeps[0]();   // 3 -- WHY!?
keeps[1]();   // 3
keeps[2]();   // 3

//Due To Hoisting

var i;
var keeps=[];

for (i = 0; i < 3; i++) {
    keeps[i] = function keepI(){
        // closure over `i`
        return i;
    };
}

keeps[0]();   // 3 -- WHY!?
keeps[1]();   // 3
keeps[2]();   // 3
//i changed to 3  in global scope at the time of function call (keeps[0]())


//if we use let instead of var 

var keeps = [];

for (let i = 0; i < 3; i++) {
    keeps[i] = function keepI(){
        // closure over `i`
        return i;
    };
}

keeps[0]();   // 0 
keeps[1]();   // 1
keeps[2]();   // 2

// now has different value in different for loop scope.

//also 

var keeps = [];

for (var i = 0; i < 3; i++) {
    // new `j` created each iteration, which gets
    // a copy of the value of `i` at this moment
    let j=i;

    // the `i` here isn't being closed over, so
    // it's fine to immediately use its current
    // value in each loop iteration
    keeps[i] = function keepI(){
        // closure over `i`
        return j;
    };
}

keeps[0]();   // 0 
keeps[1]();   // 1
keeps[2]();   // 2



/**************ajax ************/

function lookupStudentRecord(studentID) {
    ajax(
        `https://some.api/student/${ studentID }`,
        function onRecord(record) {
            console.log(
                `${ record.name } (${ studentID })`
            );
        }
    );
}

lookupStudentRecord(114);
// Frank (114)



/*********** which are not closures **********/

function say(myName) {
    var greeting = "Hello";
    output();

    function output() {
        console.log(
            `${ greeting }, ${ myName }!`
        );
    }
}

say("Kyle");

//The inner function output() accesses the variables greeting and 
//myName from its enclosing scope. But the invocation of output() 
//happens in that same scope, where of course greeting and myName are 
//still available; that's just lexical scope, not closure.


//global scope variables essentially cannot be (observably) closed over, 
//because they're always accessible from everywhere

var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getFirstStudent() {
    return function firstStudent(){
        return students[0].name;
    };
}

var student = getFirstStudent();

student();
// Kyle

//The inner firstStudent() function does reference students, 
//which is a variable outside its own scope. But since students 
//happens to be from the global scope, no matter where that function 
//is invoked in the program, its ability to access students is nothing 
//more special than normal lexical scope.




//Variables that are merely present but never accessed don't result in closure:

function lookupStudent(studentID) {
    return function nobody(){
        var msg = "Nobody's here yet.";
        console.log(msg);
    };
}

var student = lookupStudent(112);

student();
// Nobody's here yet.



//The inner function nobody() doesn't close over any outer variables—it
//only uses its own variable msg. Even though studentID is present in 
//the enclosing scope, studentID is not referred to by nobody().


//If there's no function invocation, closure can't be observed:

function greetStudent(studentName) {
    return function greeting(){
        console.log(
            `Hello, ${ studentName }!`
        );
    };
}

greetStudent("Kyle");

// nothing else happens


//DEFINETION

//Closure is observed when a function uses variable(s) from outer 
//scope(s) even while running in a scope where those variable(s) wouldn't be accessible.

//The key parts of this definition are:

//Must be a function involved

//Must reference at least one variable from an outer scope

//Must be invoked in a different branch of the scope chain from the variable(s)




