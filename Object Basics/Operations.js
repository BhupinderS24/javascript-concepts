

var fname='AAAAAAA';
var lname='pppppp';
const Check={
    fname:"Bhupinder" ,
    othernames:{
        first:"Navi Singh",
        last:"Maninder",
    },                                                          //It is even possible to make the value of an object member another object.
    othernames2:["Malkit Singh","Zversal"],
    lname:"Singh",
    age: "22",
    gender:"male",
    fullname:function(){
        return(this.fname+this.lname);
    }
}
console.log(Check.fname);
console.log(Check.lname);
console.log(Check.age);
console.log(Check.gender);
console.log(Check.othernames.first);
console.log(Check.othernames.last);
console.log(Check.othernames2[0]);
console.log(Check.othernames2[1]);
console.log(Check.fullname());

console.log(typeof(Check.othernames));
console.log(typeof(Check.othernames2));



//Bracket notation

console.log(Check['age']);
console.log(Check['othernames']['first']);
console.log(Check['othernames2'][0]);

//It is no wonder that objects are sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values.

//Setting Object Memebers.

Check.fname='Changed Bhupinder';
console.log(Check.fname);

Check.othernames.first='Changed Navi Singh';
console.log(Check.othernames.first);

Check['othernames']['last']='Changed Maninder';
console.log(Check['othernames']['last']);

Check['otherfield']='OtherFields';
console.log(Check['otherfield']);

//Constructors and object instances

function Person(name) {
    this.name = name;
    this.greeting = function() {
      return('Hi! I\'m ' + this.name + '.');
    };
  }
  function Person9() {
    var name = "name";
  }
  Person9();
  console.log("HELLLLLOOOOOO"+name);
  let person1 = new Person('Bob');
  let person2 = new Person('Sarah');

console.log(person1.name);
person1.greeting();
console.log(person2.name);
person2.greeting();

console.log(person1);
console.log(person2);

Person.prototype.test='Hello';
console.log(Person.prototype);

//Creating our finished constructor

function Person(first, last, age, gender, interests) {
    this.name = {
       first : first,
       last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      return(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      return('Hi! I\'m ' + this.name.first + '.');
    };
  }

  let person3 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person3['age']);
console.log(person3.interests[1]);
console.log(person3.bio());


//Object Constructor

let person4 = new Object();
person4.name = 'Chris';
person4['age'] = 38;
person4.greeting = function() {
  return('Hi! I\'m ' + this.name + '.');
};

console.log(person4.name);
console.log(person4.age);
console.log(person4.greeting());

let person5 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  });
  console.log(person5);

  let person6=Object.create(person5);
  console.log(person6);
 // console.log(typeof());