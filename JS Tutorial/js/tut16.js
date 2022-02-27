console.log("This is tut16");

let element= document.createElement('li');


//Add the class name to the li element
element.className="childul";
element.id="createdLi";
// element.innerText="Hello this is created by prajjal"; //esa bold nii hoga 
// element.innerHTML="<b>Hello this is created by prajjal</b>"; //innerHTML sa bold ho ja aga


       //AGAR MA INNERHTML YA INNERTEXT NII LIKHNA CHATA TOH 1 SHORTCUT HA
let text=document.createTextNode("I am a text node");
element.appendChild(text);

//upar joo bhi kia ha add wo abhi console par kia ha ab hama addd karna ha childul ma joo hamara screen par show ho 

let ul=document.querySelector('ul.this');
ul.appendChild(element); //esa hamara element addd ho ja aga sabsa neecha li childul class ma
// console.log(ul);


//AGAR HAMA UPAR JO LI ELEMENT BNAYA HA USA REPLACE KARNA HA TOH

let elem2=document.createElement('h3');
elem2.className="elem2";
elem2.id="elem2";

let tnode=document.createTextNode("This is created node for elem2")
elem2.appendChild(tnode);
console.log(elem2);

element.replaceWith(elem2);



let myul=document.getElementById("myul");
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));

// let pr=elem2.getAttribute('id'); //ya return karta ha jo id ha ya phir koi class ha usa
// let pr=elem2.hasAttribute('class'); //ya btata ha kii ya attribute ha kya es naam ka koi kya
// let pr=elem2.removeAttribute('id');   //ya hta daga id ko ya phir hum esma class pass karaga toh ussa bhi hta daga
elem2.setAttribute('title','myelem2title'); //esa title add kar sakta ha
console.log(elem2,pr);



//exercise: create a heading with text as "Go to codewithharry" and create an a tag outside it with href="https://www.codewithharry.com"
