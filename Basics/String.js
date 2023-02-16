
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

//String Methods

const demoName='Sugumaran';
const len=demoName.length;
console.log(len);
console.log(demoName[6]);//using this we can get that particular letter

//substring
 const joined='SuguSuve';
 if(joined.startsWith('Sugu'))
 {
    console.log('Sugu is found');
 }
 else
 {
    console.log('No sugu is found');
 }
 if(joined.endsWith('Suve'))
 {
    console.log('Suve is found');
 }
 else
 {
    console.log('No Suve is found');
 }
//Position of a String

const sentence='HTML-It is a language used to develop website.It is easy to understand';
console.log(sentence.indexOf('used'));//prints the starting index of the word.

let firstOccur=sentence.indexOf('is');
let secOccur=sentence.indexOf('is',firstOccur+1);
console.log(firstOccur);
console.log(secOccur);

//Substring in a String

const wordPlat='Thirumurugan';
console.log(wordPlat.slice(0,5));
console.log(wordPlat.slice(5));

//Case

const lowerCase='sugu';
const upperCase=lowerCase.toUpperCase();
console.log(upperCase);
let UpperCase='SUVE';
const newLow=UpperCase.toLocaleLowerCase();
console.log(newLow);

let demo='mozila';
demo=demo.replace('mo','god');
console.log(demo);
let newsent='He is a mental fellow, He can do coding all the day!';
newsent=newsent.replaceAll('He','She');
console.log(newsent);

//
const list=document.querySelector('ul');
list.innerHTML='';
const greetings=['Rishi is play boy','Selva is rugges boy','Rishi is a content creator'];
for(const dret of greetings)
{
    if(dret.includes('Rishi'))
    {
        const listItem=document.createElement('li');
        listItem.textContent=dret;
        list.appendChild(listItem);
    }
}
