// const output = document.querySelector('#output');
// const button = document.querySelector('#set-alarm');

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = 'Wake up!';
//   }, 5000);
// }

// button.addEventListener('click', setAlarm);

const names=document.querySelector("#names");
const delay=document.querySelector("#dela");
const button2=document.querySelector("#but");
const output1=document.querySelector("#out1");

button2.addEventListener('click',alarm(names.value,delay.value));

    // setAlarm(names.value,delay.value);
    // .then((message)=>output1.textContent=message)
    // .catch((error)=> output1.textContent=`could see alarm:${error}`);


function alarm(person,delay)
{
    // return new Promise((resolve,reject)=>
    // {
    //     if(delay<0)
    //     {
    //         throw new Error('Alarm delay must not be negative');
    //     }
        setTimeout(()=>
        {
            output1.textContent=`Hi ${person} wake up pls`;
        },delay);
}
        
    