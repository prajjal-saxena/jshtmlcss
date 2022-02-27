//Exercise1

let a= document.links;
let myText='harry';

Array.from(a).forEach(function (element) {
    if(String(element).includes(myText)){
          console.log(element);
    } 
});
