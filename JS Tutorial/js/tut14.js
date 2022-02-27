console.log("Welcome to tutorial 14");

/*
element selectors:
1. Single element selector
2. Multi element selector 

*/
// 1. Single element selector
let element= document.getElementById('myfirst');
// element=element.className; //ya class ka naam da daga
// element=element.childNodes; //jo andar ka text ha wo show ho jaaga
// element=element.parentNode; // ya parent wala ko access kar daga
// element.style.color = 'red'; esa hum text ka color change kar danga
// element.innerText = "Harry is a good boy"; // esa andar kii text change kar sakta hu
// element.innerHTML="<b>Harry is a good boy</b>"; //esa ma html tag use kar sakta hu jaise bold
// console.log(element);
// console.log(element.innerHTML);//esa hum innerhtml or innerText ko access kar sakta hu

            //Query Selector
// let sel=document.querySelector('#myfirst');
// sel=document.querySelector('.child');
// sel=document.querySelector('div'); //phala div jo hoga usa uta aga
// sel.style.color='green';
// console.log(sel);


                   //2.Multi element selector
    
let elems= document.getElementsByClassName('child');
elems= document.getElementsByClassName('container');
// console.log(elems); //jab hum class sa access karaga toh indexing ka jaria karaga
// console.log(elems[0].getElementsByClassName('child'));  //esa container ka andar jitna child class ha wo mil ja agi
elems=document.getElementsByTagName('div'); //esa jitna bhi div ha sara mill ja aga
console.log(elems);

// Array.from(elems).forEach(element=>{
//     console.log(element);
//     element.style.color='blue';
// });

                     //or

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color='blue';
}

