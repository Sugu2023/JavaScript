
//Strings..
let myName='Sugumaran';
console.log(myName);

// const newName='Sugu";
const newName='What is your "name"';
console.log(newName);

const task='Thirumurugan should\'ve done his work on time!';
console.log(task);

//Backtick characters

const gret=`Suve`;
console.log(gret);
console.log(typeof(gret));
const name='Sugu';
const greeting=`Hello ${name}`;
console.log(greeting);
const join=`${name}${gret}`;
console.log(join);
console.log(gret+name);

//Number vs string
//Number()--To change string to number.
const myString='1234';
const myNum=Number(myString);
console.log(myNum);
console.log(typeof(myString));

//ToString-- It changes number to string.

const myNum2=12345;
const myString2=myNum2.toString();
console.log(typeof myString2);
console.log(myString2);

//Including expression in a java

const score1=90;
const score2=56;
const score3=98;
const score4=100;
const total=score1+score2+score3+score4;

const output=`Virat smashed more runs in the odi series scoring ${total} runs in the four match vs AUS.
His average of this series is ${(total/4)}`;
console.log(output);

