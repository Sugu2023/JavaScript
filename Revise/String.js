const str1=new String("Sugu");
console.log(str1);
//Template literals

const age=21;
const mess=`Hi i am Sugu and my age is ${age}`;
console.log(mess);

//at() and CharAt().
console.log(str1.at(-1));
console.log(str1.charAt(-1))//negative index cannot be used in charAt().

//charCodeAt().
const sent='Thirumurugan';
const ind=6;
console.log(`The character in index ${sent.charCodeAt(ind)}`);

//codePointAt()
//It returns a non negative integer.

//concat()
const str2='Sugu';
const str3='Maran';

console.log(str2.concat('',str3));

//endsWith()
const str4='Car are the best!';
console.log(str4.endsWith('best!'));
console.log(str4.endsWith('best',17));
const str5='Hi i am Raju!';
console.log(str5.endsWith('Raju!'));

//charCode()

//includes()
const sentence='The quick brown foox jumps over the lazy dog.';
const word='fox';
console.log(`The word ${word} ${sentence.includes(word)?'in':'is not'} in the sentence`);

//indexof()
const paragraph=`Leo is the title of movie directed by Lokesh Kanagaraj`;
const searchWord='movie';
console.log(`The word is in index ${paragraph.indexOf(searchWord)}`);

//match()
const para='Hi i am Sugumaran.';
const regex=/[a-z]/g;
const found=para.match(regex);
console.log(found);

const para2='hello r u doing ur work 2 times a day and 20 times in 10 days';
const pattern=/hello/y;
const found1=para2.match(pattern);
console.log(found1);

//padEnd()

const para3='Sugumaran';
console.log(para3.padEnd(12,'.'));
// console.log(para3.length)
const str6='200';
console.log(str6.padEnd(5,'*'));

const str7='5';
console.log(str7.padStart(2,'0'));

//String.raw()
const filePATh='C:\Development\profile\aboutme.html';
console.log(filePATh);
const filePath=String.raw`C:\Development\profile\aboutme.html`;
console.log(filePath);

//repeat()
const greet='Happy Diwali!';
console.log(`${greet.repeat(2)}`);
// console.log(greet.repeat(4));

//replace()

const replaceStr='Thiru is a good boy.Thiru will do his work perfectly';
console.log(replaceStr.replace('Thiru','Sugu'));

//replace all()

const replacealllStr='he will do made on is oh on he on on on key';
console.log(replacealllStr.replaceAll('on','in'));

//search()
const searchStr='Michael movie .is waste.';
const re=/[^\w\s]/g;
first=searchStr.search(re);
console.log(first);

//slice()

const sentence1='The quick brown fox jumps over the lazy dog.';
console.log(sentence.slice(20));
console.log(sentence1.slice(10,23));
console.log(sentence1.slice(-3,-2));

//split()
const sentence2='The sun sets behind mountains.';
const splitarr=sentence2.split(' ');
console.log(splitarr[4]);
const splitarr1=sentence2.split('');
console.log(splitarr1[4]);
const strCopy=sentence2.split();
console.log(strCopy);

//startsWith()
const startsStr='Suvedha';
console.log(startsStr.startsWith('Suve'));
console.log(startsStr.startsWith('ve',2));//We can give postion also.

//toLocaleLowerCase()--It converts based on cases for languages

//tolowercase--It simply converts to lowercase.

const lowerCase='THALAPATHy';
console.log(lowerCase.toLowerCase());

const upperCase='sugumaran';
console.log(upperCase.toUpperCase());

//toString()
const demoStr=new String('foo');
console.log(demoStr);
console.log(demoStr.toString());

//trim()--It removes both white spacae in front and back
const trimStr='   SELVA   ';
console.log(trimStr.trim());
console.log(trimStr);//It prints white space also.
//trimend()
console.log(trimStr.trimEnd());
console.log(trimStr.trimStart());
//valueOf()
console.log(demoStr.valueOf());
