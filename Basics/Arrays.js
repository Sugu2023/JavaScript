//Arrays
const players=['Kohli','Jaddu','SKY','Rohit'];
console.log(players);

const differArray=[1,'Sugu',2,3,'Thiru'];
console.log(differArray);
console.log(differArray[1]);
console.log(differArray.length);
differArray[2]='Suve';
console.log(differArray);

const mulArr=[1,2,3,[4,5,6]];
console.log(mulArr[3][1]);

//findIndex()
let demoArr=['Sugu','Thiru','Kokila','Ram'];
console.log(demoArr.indexOf('Thiru'));

//push
demoArr.push('Sathur');
console.log(demoArr[4]);
demoArr.push('Selva');
console.log(demoArr[5]);
demoArr.pop('Sathur');
console.log(demoArr[4]);
demoArr.splice(1,1);
console.log(demoArr);

const bike=['R15','RE','NS'];
for(const bikes of bike)
{
    console.log(bikes);
}

//split()
const data='Sugu,Dinesh,Sathur,Tharun';
const friends=data.split(",");
console.log(friends);
const commasep=friends.join(',');
console.log(commasep);
