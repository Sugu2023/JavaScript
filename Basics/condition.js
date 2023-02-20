const select=document.querySelector('select');
const para=document.querySelector('p');
select.addEventListener('change',setPlayer);
function setPlayer()
{
    const choice=select.value;
    // if(choice==='Virat')
    // {
    //     para.textContent='He is  run machine';

    // }
    if(choice==='Kohli'|| choice==='Virat')
{
    para.textContent='He is  run machine';
}
    else if(choice==='Dhoni')
    {
        para.textContent='Captian Cool';
    }
    else if(choice==='Rohit')
    {
        para.textContent='HITMAN';
    }
    else if(choice==='Pant')
    {
        para.textContent='Pantastic';
    }
    else if(choice==='KL Ragul')
    {
        para.textContent='Classy';
    }
    else{
        para.textContent='No player selected';
    }
}
let cheese='Cheddar';
if(cheese)
{
    console.log('Yay using cheese we can do cheedar');
}
else
{
    console.log('No cheese on toast');
}
let val=false;
if(val)
{
    console.log('If block invoked');
}
else{
    console.log('Else blocked invoked');
}
//Logical Operators-->&& || 

//Switch case
const selector=document.getElementById("tech");
const  para1=document.getElementById("lang");
selector.addEventListener('change',setValues);
para1.style.color='red';
function setValues()
{
    const choices=selector.value;

    switch(choices)
    {
        case 'HTML':
            para1.textContent='HYPER TEXT MARKUP LANGUAGE';
            break;
        case 'CSS':
            para1.textContent='CASCADING STYLE SHEET ';
            break;
        case 'JS':
            para1.textContent='JAVASCRIPT';
            console.log(para1);
        break;
        case 'C':
            para1.textContent=' C PROGRAMMING LANGUAGE';
            break;
        case 'C++':
            para1.textContent='C++ PROGRAMMING LANGUAGE';
            break;

        default:
            para1.textContent='No language selected';
  }

}
//ternary operator

const selector1=document.getElementById("colors");
const html=document.querySelector("html");

selector1.addEventListener('change',()=>selector1. value==='hotpink'
? update ('hotpink') :update('violet'));

function update(bgColor)
{
    html.style.background=bgColor;
}


const results=document.querySelector("#results");
function calculate()
{
    for(let i=1;i<10;i++)
    {
        const newRes=`${i} X ${i}= ${i*i}` ;
        results.textContent +=`\n${newRes}`;
    }
    results.textContent+=`\n Finished`;
}
const calculateBtn=document.querySelector("#calculate");
const clearBtn=document.querySelector("#clear");

calculateBtn.addEventListener('click',calculate);
clearBtn.addEventListener('click',()=>
results.textContent='');

//Existing loops with 
const contacts=['Sugu:9150632151','Suve:7010815864','Kokila:9629332118','Thiru:9361754056'];
const para2=document.querySelector("#para1");
const input=document.querySelector("#search");
const btn=document.querySelector("#but");

btn.addEventListener('click',()=>
{
    const searchName=input.value.toLowerCase();
input.value='';
input.focus();
para2.textContent='';

for (const cont of contacts)
{
    const splitContact=cont.split(':');
    if(splitContact[0].toLowerCase()===searchName)
    {
        para2.textContent=`${splitContact[0]}'s number is ${splitContact[1]}`;
        break;
    }
}
if(para2.textContent==='')
{
    para2.textContent='Contacts not found';
}
});

const para3=document.querySelector("#sqrval");
const input1=document.querySelector("#sqr");
const btn1=document.querySelector("#square");
para3.style.color='GREEN';
btn1.addEventListener('click',()=>
{
   
    const num=input1.value;
    const sqr=num*num;
    para3.textContent=`Square of the number is ${sqr}`;
    
})
