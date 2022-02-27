console.log("This is tutorial 15");

let cont= document.querySelector('.no');
cont= document.querySelector('.container'); 
// console.log(cont.childNodes); //ya sab cheej ko ginaga jaise comment new line text sabko
// console.log(cont.children); // when we use .children ya bss main cheejo koo dekhaga 

// let nodeName= cont.childNodes[2].nodeName; // ya node ka naam daga jaise index par agar 2 par div ha toh div da daga likha hua
// console.log(nodeName);

// let nodeType= cont.childNodes[9].nodeType;
// console.log(nodeType);



//Node Types

// 1. element
// 2. Attribute
// 3. Text Node
// 8. comment
// 9. document
// 10. docType


let container= document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
console.log(container)
console.log(container.childNodes)
// console.log(container.firstChild)
// console.log(container.firstElementChild) ///ya first element da daga
// console.log(container.lastChild);
// console.log(container.lastElementChild); 

console.log(container.firstElementChild.parentNode); //firstelement ka parent mill ja aga
console.log(container.firstElementChild.nextSibling) // esa agla element mill ja aga
console.log(container.firstElementChild.nextElementSibling); //esa agla element mill ja aga
console.log(container.nextElementSibling.nextElementSibling);// ea
