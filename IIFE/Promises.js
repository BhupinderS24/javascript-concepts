(function(num=3){
    console.log(`The number is ${num}`);
})();

//The function becomes a function expression which is immediately executed. 
//The variable within the expression can not be accessed from outside it.

(function(){
    var newName="Hello";
    console.log('InsideFunction',newName);
})();
// console.log(newName); // newName is not defined

/**************Another way to write*********************/

!function(){
    var newName="Hello";
    console.log('InsideFunction',newName);
}();

// The above stylistic variation can be used by replacing “!” with 
// “+”, “-”, or even “~” as well. Basically any unary operator can be used.

-function(){
    var newName="Hello";
    console.log('InsideFunction',newName);
}();

// All that the first character, “!”, is doing here is to make that function 
// into an expression instead of a function statement/definition.
//  And then we execute that function immediately.

/******ALSO *******/

void function(){
    var newName="Hello";
    console.log('InsideFunction',newName);
}();

var checkret = void function(){
    return "REturedValue";
}();
console.log("checkret",checkret); // undefined , doesnot return anything

// Assigning the IIFE to a variable stores the function's return value, 
//not the function definition itself.

var ret = (function(){
    var newName="Hello2";
    return newName;
})();

console.log(ret);


/***********************IIFE with parameters*********************/
(function(num1,num2){
    console.log(num1,num2);
})(3,4);