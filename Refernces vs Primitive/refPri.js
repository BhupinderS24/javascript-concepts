var name="max";
console.log(name);

var secondName = name;           //only value is copied in primitive value it creates new variable on new adress with same value 
console.log(secondName)          //max

name="Chris";
console.log(secondName);          //max    // nOt Changed 
console.log(name);                //Chris;


var person={
    age:22,
    name:'Max',
    hobbies:['Sports','Cooking']
};

console.log(person);

//var secondPerson=person;           //secondPerson points to the same adress where person is stored as copying the reference in reference 

var secondPerson=Object.assign({},person);
console.log(secondPerson);

person.name="Chris";                //name is not changed as by object.assign only value is copied into new secondPerson but not reference 

person.hobbies.push('Reading');     // but inside person there is array whose reference is copied in secondPerson hence if change that array (hobbies) in one of the object then it will reflect in another object .
console.log(secondPerson);

console.log(person);

var myhobbiesWithReference =person.hobbies;
person.hobbies.push("Check");

console.log(person.hobbies);
console.log(myhobbiesWithReference);


var myhobbiesWithValue=person.hobbies.slice(0);
person.hobbies.push("NewCheck");

console.log(person.hobbies);
console.log(myhobbiesWithValue);


