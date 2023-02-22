console.log("Starting...");
// setTimeout(function() {
//   console.log("Timeout completed.");
// }, 2000);
// console.log("Continuing...");

// // const s1=new Promise((resolve,reject)=>{
// // setTimeout(() => {
// //     console.log("Sucess");
// // }, 2000);})

// const s1=val=>new Promise((resolve,reject)=>
// {
//     setTimeout(()=>
//     {
//             resolve(val+10);
//     },2000);
// })
// s1(7).then(console.log);

//promise
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
