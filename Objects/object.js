// const person={};
const person={name:['sugu','thiru'],age:21,
bio()
{
    console.log(`${this.name[0]} is ${this.age}years old`);
},
details1()
{
    console.log(`he is ${this.name[1]}`);
}
};
//dot notation--To access anything in the object we use (.).
//object as properties
const student={names:{
    first:'sugu',
    last:'maran'
}};
person.age=23;
student['names']['last']='Murugan';
student.names.first='Thiru';
student.farewell=function()
{
    console.log("Bye everybody");
}

const nishi=new Person('Sugu','Maran',21);

function Person(first,last,age)
{
    const para=document.querySelector("#demoobj");
    this.firstName=first;
    this.lastName=last;
    this.age=age;
  this. para= console.log(`HI I'm ${this.firstName}${this.lastName}.My age is ${age}`);
    // console.log(`HI I'm ${this.firstName}${this.lastName}.My age is ${age}`);

}
