//Difference b/w GET and POST 
// hama btana hota ha kis tarh kii request hoggi get ya post
//get ka mtlb hum 1 url danga or bta dana es url ka andar kya ha
// POST ka mtlb hum url danga or kuch data bhi danga saat ma or us data ka mutabik mujha response danna 



console.log("This is only for practice");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler()  {
    console.log('You have clicked the fetchBtn');
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object

        //open means kha sa data laoga('Request','kaha sa data a aga', 'kii app konsi request mangna chata hoo synchronous ya asynchronous agar asynchronous toh true otherwise false'
        // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true) // use of get request
        xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create',true);
        xhr.getResponseHeader('Content-type', 'application/json') //getReponseHeader mtlb ma url ma hee bhej raha hu form ka data


        //What to do on progress(optional)
        xhr.onprogress = function() {
            console.log('On Progress');
        }

        //What to do when response is ready    //agar ma upar harry.txt kii jagah or kuch likh duu toh bss this.status karka if else use karna ha
        xhr.onload = function() {
            if(this.status === 200){
            console.log(this.responseText)  //jab mere load ho jaa a toh mujha response text da doo
            }
            else{
                console.log('Some error occured'); //esa ya hoga jab page available nii hoga toh ya error show kar daga
            }
        }

        //send the request
        // xhr.send(); this is use for get request
        params =`{"name":"prajjal","salary":"123","age":"23"}`;
        xhr.send(params);
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'pracfrt.json', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj) 
            {
                str += `<li>${obj[key]} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

