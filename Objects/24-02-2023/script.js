const worker=new Worker('worker.js')
const sumButton=document.getElementById('sum');
const bgButton=document.getElementById('change-background');


sumButton.addEventListener('click',event=>
{
    
    worker.postMessage('HellO wORKER')
})
worker.onmessage=function(message)
{
    console.log(message); 
    alert(`Sum of number is:${message}`);
}
bgButton.addEventListener('click',(event)=>{

    if(document.body.style.background!='lightgreen')
    {
        document.body.style.background='lightgreen'
    }
    else{
        document.body.style.background='hotpink';
    }
});


const otpButton=document.getElementById('otp');
const con=document.getElementById('otpans');
otpButton.addEventListener('click',generateOTP);

    function generateOTP() {
          
          // Declare a digits variable 
          // which stores all digits
          var digits = '0123456789';
          let OTP = '';
          for (let i = 0; i < 8; i++ ) {
              OTP += digits[Math.floor(Math.random() * 10)];
          }
          con.textContent=OTP;
      }