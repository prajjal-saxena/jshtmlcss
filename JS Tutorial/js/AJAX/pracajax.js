let vegBtn = document.getElementById('vegBtn');

vegBtn.addEventListener('click', vegetableBtn);

function vegetableBtn(){
   let xhr = new XMLHttpRequest();
   xhr.open('GET','pracveg.json',true);

   xhr.onload= function(){
     if(this.status===200){
       let obj = JSON.parse(this.responseText)
       let veglist = document.getElementById('veglist');
       let str= ""
       for(key in obj){
          str+= `<li>${obj[key]}</li>`
       }
       veglist.innerHTML=str;
     }
     else{
       console.log("Some error occured.")
     }
   }
   xhr.send()
}