function Person(){
    this.name="Bhupinder";
    this.city="Jalandhar";
}
Person.prototype.show=function(){
    console.log(`Name ${this.name} and City ${this.city}`);
}

person1=new Person();
person2=new Person();

person2.name='Maninder';

person1.show();
person2.show();



//Objects

let object1={
    name:"Bhupinder",
    city:"Jalandhar",
    show:function(){
        console.log(`Name ${this.name} and City ${this.city}`);
    }
}

let object2={
    name:"Maninder"
}
//never user - performances issues
object2.__proto__= object1;

// object2 inheriting property of object1

let arr=[];

