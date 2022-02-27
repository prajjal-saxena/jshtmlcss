console.log("This is for practice only")

// function getdata(){
//     url = "https://jsonplaceholder.typicode.com/users";
//     fetch(url).then((response) => {
//         return response.json()
//     }).then((data) => {
//         console.log(data)
//     })
// }

// getdata()

function postData(){
    url="https://jsonplaceholder.typicode.com/posts";
    data= '{"userId": 1,"id": 1}'
    params= {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: data
    }
    fetch(url).then((response)=>response.json())
    .then(data => console.log(data))
}

postData();