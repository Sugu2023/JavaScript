let myObj={name:'Sugu',age:21};
console.log(myObj);
//Object creation
const Animal={
    name:'Lion',
    location:'Zoo'
};
const ani1=Object.create(Animal);
console.log(ani1.name);
//shadow properties
const rishi={company:'Aspire'};
const sugu={};
Object.setPrototypeOf(sugu,rishi);
console.log(sugu.company);

//constructor

class Student
{
 constructor(name,age)
    {
        console.log("Constructor is called when object is created");
        this.name=name;
        this.age=age;
    }
    introStd()
    {
        console.log(`HI i am ${this.name} and my age is ${this.age}`);
    }
}
const std1=new Student('Sugu',21);
std1.introStd();
const std2=new Student();

//INheritance

class Bike
{
    
    constructor(name,model)
    {
       this.name='R15';
        this.model=model;
    }
    detailsofBike()
    {
        console.log(this.name+''+this.model);
    }
}
class KuttyBike extends Bike{
    constructor(name,prop)
    {
        super(name);
        this.prop=prop;
    }
    detailsofKuttyBike()
    {
        console.log(`${this.name} AND ITS propperties is ${this.prop}`);
    }
}
const yama=new Bike('ueyitg',68574);
yama.detailsofBike();
const hero=new KuttyBike('','speder');
hero.detailsofKuttyBike();

//Encapsulation

class Employee
{
    #dept;
    constructor(name,dept)
    {
        this.name=name;
        this.#dept=dept;
    }
    introduceUrself()
    {
        console.log('Mr.'+this.name+'is a'+this.dept);
    }
}
const emp1=new Employee('Sugu','trainee');
emp1.introduceUrself();
console.log(emp1.name);
console.log(emp1.dept);
