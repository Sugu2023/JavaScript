const para=document.querySelector("#para1");
const but=document.querySelector("#but");
but.addEventListener('click',clickFun);
function clickFun()
{
    para.textContent='Hi this the Paragraph 1';
}
const controller=new AbortController();
const textBox=document.querySelector("#key");
const textAns=document.querySelector("#ans");
textBox.addEventListener('keydown',event=>
{
    textAns.textContent=`you pressed"${event.key}"`;
},
{signal:controller.signal});
controller.abort();

const name='Sugu';
function greeting()
{
    alert(`HI I am ${name}`);
}
//addEventListener--It is used for adding event handlers
//remove
//event objects
const user=document.querySelector("#user");
const pass=document.querySelector("#pass");
user.addEventListener('click',bgChange)
pass.addEventListener('click',bgChange)
function bgChange(e)
{
    
    e.target.style.color='red';
    e.target.style.fontSize='20px';
}

//preventDefault()
const form=document.querySelector('#sub');
const para1=document.querySelector("#para3");
form.addEventListener('click',submitFun);
function submitFun(s)
{
    if(user.value==="" || pass.value==="")
    {
     s.preventDefault();
     para1.textContent='Please fill username and password!';

    }
}

// const container=document.querySelector("#container");
// container.addEventListener('click',handleClick);
// const output=document.querySelector("#output");
// function handleClick(p)
// {
//     output.textContent=`You clicked on a ${p.currentTarget.tagName} element\n`;
// }
