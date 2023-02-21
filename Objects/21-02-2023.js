const myObj={city:'Chennai',greet(){console.log(`Greetings from ${this.city}`);}};
//Object prototype

let employee={names:'Sugu',age:21,company:'Aspire'};
// let employee1=Object.create(employee);
let employee1=employee;
employee1.names='Thiru';
console.log(employee1.names);
console.log(employee1);
//shadowing properties

let myObject={x:10};
let propObj={};
Object.setPrototypeOf(propObj,myObject);

// propObj.y='Rishi';
console.log(myObject.x);
console.log(propObj.x);

//Using constructor prototype

function Person1(village)
{
    this.village=village;
}
Person1.prototype.sayHi=function()
{
    console.log(`My native is ${this.village}`);
}
let person1=new Person1("Ariyalur");
person1.sayHi();
console.log(Object.hasOwn(person1,'village'));
console.log(Object.hasOwn(propObj,'x'));

//Classes in JS
class Students
{
    
constructor(name,std) {
    this.name=name;
    this.std=std;
    
  }  introduceStud()
    {
        console.log(`Hi i am ${this.name}.I am Studing ${this.std}.`);
    }

}
const student1=new Students('Vishakan',4);
student1.introduceStud();

//Without writing constructors

class Bike
{
    
    model()
    {
        console.log(`Bike model iS r15`);
    }
}
const yamaha=new Bike();
yamaha.model();

//Inheritance
class Animal
{
    constructor(name2,location)
    {
        this.name2=name2;
        this.location=location;
    }
    detailsofAnimal()
    {
        console.log(`${this.name2} is in ${this.location} zoo.`);
    }
    parantFun()
    {
        console.log("Parent function is invoked");
    }
}
class HomeAnimals extends Animal
{
    constructor(name2,food)
    {
        super(name2);
        this.food=food;
    }
    habit()

    {
        console.log(`${this.name2} only eat ${this.food}`);
    }
}
const animal=new Animal('Tiger','Chennai');
const ani=new HomeAnimals('Cow','grass');
animal.detailsofAnimal();
ani.detailsofAnimal();
ani.habit();
const ani1=new Animal();
ani1.parantFun();
ani.parantFun();

//Encapsulation

class Book
{
    #year;
    constructor(name,year)
    {
        this.name=name;
        this.#year=year;
    }
    aboutBook()
    {
        console.log(`This ${this.name} book is published in ${this.#year}`);
    }
   
}
const book1=new Book('Poninselvan',1979);
book1.aboutBook();
book1.name;//We can access
//book1.#year;//Property '#year' is not accessible outside class 'Book' because it has a private identifier.


//private methods
class Demo 
{
    somePublicmethod()
    {
       this. #somePrivateMethod();
        console.log("Public method is invoked");
    }
    #somePrivateMethod()
    {
        console.log("Private method is invoked");
    }
}
const dem=new Demo();
dem.somePublicmethod();
// dem.#somePrivateMethod();

const selva={name:'selva',age:45};
const nishanth=selva;
console.log(nishanth.name);
