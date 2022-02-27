                 //SYNCHRONOUS VS ASYNCHRONOUS PROGRAMMING
// An asynchronous model allows multiple things to happen at the same time.
// In a synchronous programming model  things happen one at a time.
// when you call a function that performs a long action, it returns only when the action has finished so that ir can return the result.
// This stops your program for the time the action takes.


//eg of Asynchronous
console.log("This is tutorial 34");

setTimeout(() =>{
    for (let index=0; index <4005; index ++){
        const element = index;
        console.log("This is index number"+index);
    }
},100);

console.log('done printing')