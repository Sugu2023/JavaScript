//--About variables..
let myAge;
myAge=38;
console.log(myAge);
var my_age;
my_age=56;
console.log(typeof(my_age));
const myage=20;
console.log(myage);

//Array
let newArray=[10,50,30];
console.log(newArray[1]);
console.log(typeof(newArray));

//Numbers
const myInt=24;
const myFloat=2.4;
console.log(typeof(myInt));
console.log(typeof(myFloat));

const btn=document.getElementById("button2");
        const para2=document.getElementById("para1")

        btn.addEventListener('click',updateBtn);
function updateBtn()
{
    if(btn.textContent==="StartMachine")
    {
        para2.textContent="The machine is started";
        btn.textContent="Stop Machine";
       
        
    }
    
    else
    {
        btn.textContent="StartMachine";
        para2.textContent="The machine is Stopped";
    }
   
}
