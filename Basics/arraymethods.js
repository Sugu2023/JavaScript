//prototype iterator
const arr=['Virat','ROhit','Jaddu'];
const orderList=document.getElementById("ordered-list");
for(const items of arr)
{
    const li=document.createElement("li");
    li.textContent=items;
    orderList.appendChild(li);
}
//at()--It takes the integer value and returns the item in that index;
let index=0;
console.log(arr.at(index));

//concat-To merge two or more arrays
const array3=arr.concat(friends);
console.log(array3);

//CopyWithin

const arr1=[1,2,3,4,5];
console.log(arr1.copyWithin(1,2));
// console.log(arr1.copyWithin(0,3,4));
// console.log(arr1.copyWithin(-1,-2));
// console.log([1,3].copyWithin(2,1,2));

//entries
const iterator1=arr1.entries();
console.log(iterator1.next().value);

const arrayEntry=arr.entries();
for(const values of arrayEntry)
{
    console.log(values);
}
const checkVal= (currentValue)=> currentValue < 20;
const array1=[1,2,3,4,5];
const val=
console.log(array1.every(checkVal));

//fill()
const fillArr=[1,2,3,4,5];
// console.log(fillArr.fill(1,0,4));
console.log(fillArr.fill(0,0,4));
//filter
const filterArr=['Sugu','Suve','Ramalingam','Thiru','Kokila'];
const result=fillArr.filter(word => word.length>4);
console.log(result);

//find
const findArr=[1,2,3,4,5];
const found=findArr.find(element =>element>4);
console.log(found);

//findINdex()
const findIndArr=[1,0,4,5,4];
const indexFound=(element)=>element>13;
console.log(findIndArr.findIndex(indexFound));
//findLast()
const lastFound=findIndArr.findLast((element)=>element>5);
console.log(lastFound);
//findLastINdex
const lastINdex=findArr.findLastIndex((element)=>element>3);
console.log(lastINdex);

//flat
const demoArray=[0,1,2,[3,4,5]];
console.log(demoArray.flat());

//Array.from()
console.log(Array.from('Sugumaran'));
console.log(Array.from([2,4,6],s=>s+1));

//includes-It tells whether the aray includes a value given.

const incArr=['sugu','thiru','kokila'];
console.log(incArr.includes('thiru'));

//isArray()

console.log(Array.isArray([1,2,3,[4,5]]));
console.log(Array.isArray(new Array([12,12])));
console.log(Array.isArray(new Int8Array(15)));

//join()

const joinELements=['Rise','Rose','Risen'];
console.log(joinELements.join());
console.log(joinELements.join('--'));

//keys--It says the key of each value in an array.
const checking=joinELements.keys();
for(const keyval of checking)
{
    console.log(keyval);
}
const mapArr=[1,2,3];
const map1=mapArr.map(x=>x*2);
console.log(map1);
//Array.of()
console.log(Array.of('sugu',1,2,'bar',false));

//reduce()
const array5=[1,2,3,4];
const initialVal=0;
const sumWIthInitial=array5.reduce((accumulator,currentValue)=> accumulator+currentValue,initialVal);
console.log(sumWIthInitial);
//reverse
const revArray=['one','two','three'];
console.log(revArray.reverse());
console.log(revArray);
//shift--It is used to remove first element in an array
const shiftArray=[1,2,3,4];
const siftedVal=shiftArray.shift();
console.log(shiftArray);
console.log(siftedVal);
console.log(shiftArray.length);

//slice--It makes shallow copy of an array from our choice(index);
const sliceArr=['Java','html','css','JS','Python','C','C++'];
console.log(sliceArr.slice(1,2));
console.log(sliceArr.slice(0,2));
console.log(sliceArr.slice(-3));
console.log(sliceArr.slice(2,-1))

//some()
const somrArr=[1,2,3,4,5];
const even=(element)=>element%2===0;
console.log(somrArr.some(even));

//sort
const sortArr=['a','b','c','d'];
console.log(sortArr.sort());

//splice
const months=['jan','march','apr','may'];
months.splice(1,0,'Feb');
console.log(months);

//unshift

const unshiftArr=[1,2,3];
unshiftArr.unshift(4,5);
console.log(unshiftArr);
//values()
const vale=unshiftArr.values();
for(const val1 of vale)
{
    console.log(val1);
}
