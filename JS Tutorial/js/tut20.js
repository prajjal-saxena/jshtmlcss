console.log("This is tut20");
let impArray = ['adrak','pyaaz','bhindi']; //esma 1 limitation ha array koo add nii kar sakta ha but kuch func ha jiski helpsa kar sakta ha

//LOCAL AND SESSION STORAGE

localStorage.setItem('Name','Prajjal');//key:value
localStorage.setItem('Name2','sohan');
localStorage.setItem('Sabji',JSON.stringify(impArray));//agar hum khali impArry likhaga toh string daga hama but agar JSONstringfy use karaga toh array ma store hogi value
// localStorage.clear(); //ya hamari poori storage ko clear kar daga ab neecha get item ma null show hoga kyoki hamari storage clear ho gae ha

//AGAR HUM PARTICULAR KEY KOO CLEAR KARNA CHATA HA TOH SO WE USE removeItem()
localStorage.removeItem('Name');


//REtrieve the item from local storage
let name=localStorage.getItem('Name2');//agar humna koi galat naam dal rakha ha toh ya NULL daga hama 
name=JSON.parse(localStorage.getItem('Sabji')); //Agar hum khali esa getItem('Sabji') get karaga ho jauga lgaga array kii tarah but hogi string toh array bnana ka lia use karaga JSON.parse
console.log(name);


   //SESSION storage 

//session storage session khatam hota hee chali jaati ha but localstorage always rhati ha
   sessionStorage.setItem('sessionName','Prajjal');//key:value
   sessionStorage.setItem('sessionName2','sohan');
   sessionStorage.setItem('sessionSabji',JSON.stringify(impArray));