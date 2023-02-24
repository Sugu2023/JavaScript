message=function(message)
{
   let sum=0;
    for(i=0;i<10000;i+=1)
    {
        sum+=i;
    }
   postMessage(sum);
    // alert(`Sum of 10 number is:${sum}`);
}