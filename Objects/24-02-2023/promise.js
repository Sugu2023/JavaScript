const promise1=new Promise((resolve,reject)=>
{
    resolve("Success");
});
promise1.then((value)=>
{
    console.log(value);
});
//Chaining 
// const myPromise=new Promise((right,wrong)=>
// {
//     right('Right-1');
// });
// myPromise.then((res)=>
// {console.log(res);
//     return 'Right-2';})

// .then(res=>
//     {
//         console.log(res);
//         return 'Right-3';
//     })
// .then(res=>
//     {
//         console.log(res);
//     })
//catch
const promise2=new Promise((dos,dont)=>
{
    dont()
    {
        console.log("An error  is catched-first");
    }
})
promise2.then(result=>
    {
      console.log(result);
      return "An error is catched second time";
    })
    .catch(error=>
        {
            console.log(error);
            return "Second op completed";
        })
const promise_1=Promise.resolve(3);
const promise_2=42;
const promise_3=new Promise((resolve,reject)=>
{
    setTimeout(resolve,100,'foo');
});
const promise_4=new Promise((reject,resolve)=>
{
    setTimeout(reject,100,'zoo');
});
Promise.all([promise_1,promise_2,promise_3,promise_4]).then(values=>{
    console.log(values);
});
const promises=[promise_1,promise_2,promise_3,promise_4];
Promise.allSettled(promises).then(val=>
    val.forEach(vale=>console.log(vale.status)));
console.log(Promise.promise_4);

//Promise any()
const anyPromise1=new Promise((resolve,reject)=>
{
    setTimeout(resolve,500,'quitslow');
})
const anyPromise2=new Promise((reject,resolve)=>
{
    setTimeout(reject,100,'quick');
});

const anyPromises=[anyPromise1,anyPromise2];
Promise.any(anyPromises).then((values)=> console.log(values));//This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
//Promise.any()-Output is based on Promise.race().

//Promise.catch()-It schedules a function when promise is rejected.

const catchPromise1=new Promise((resolve,reject)=>
    {
        throw new Error('osssh-no');
    })
catchPromise1.catch((error)=>{console.error(error)});
//Finally()

function checkMail()
{
    let vari=1;
    return new Promise((resolve,reject)=>
    {
        if(vari)
        {
            resolve('Mail has arrived');

        }
        else{
            reject(new Error("Failed to arrive"));
        }
    });
}
checkMail()

    .then((mail)=>
    {
        console.log(mail)
    })
    // .catch ( (err)=>{console.error(err);})
    .catch((err) => {
        console.error(err);
      })
      .finally(()=>{
          console.log("ALl experiment done");
      })

      //Promise.reject()

      function resolved(reslt)
      {
        console.log(reslt);
      }
      function rejected(reslt)
      {
        console.log(reslt);
      }
   
   // Promise.resolve(new Error('kavin')).then(resolved,rejected);

   const p= Promise.resolve(3);
   p.then((value)=>{console.log(value);})]
   
    //chaining then()

   const a=new Promise((resolve,reject)=>
   {
    setTimeout(()=>{
    resolve(10);},1000);
   });
   a.then(result => {console.log(result);
   return result+2;})
   .then(result =>{console.log(result);})
   
    //await()
   function getData()
   {
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve('Waited 5 seconds');
        },5000);
    })
   }

   async function fetchdata()
   {  
    //console.log('calling await');
    const result=await getData();
    console.log(result);
    console.log("HI")
   }
   fetchdata();
