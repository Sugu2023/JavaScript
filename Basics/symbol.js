const privatePropert=Symbol();
const obj={};
obj[privatePropert]='value';
console.log(obj[privatePropert]);

class Student
{

}
let student=new Student();
let sym1=Symbol();
student[sym1]='Sugu';
console.log(student[sym1]);
