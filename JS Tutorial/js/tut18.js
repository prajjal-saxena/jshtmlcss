console.log("This is tut 18");

// let btn= document.getElementById("btn");
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2); //ya double click par work karta ha
// btn.addEventListener('mousedown',func3);//beech ma mouse ka click karaga toh hoga

// function func1(e) {
//     console.log("Thanks",e);  

//     //Agar hum form ma koi bhi button click karaga toh form submit ho ja aga ya bydefault hota ha esa bachna ka lia preventDefault function ka use karaga

//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click");
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks This is mouse down");
//     e.preventDefault();
// }

// document.querySelector('.no').addEventListener('mouseenter',function () {
//     console.log("This is mouse enter")
// });

// document.querySelector('.no').addEventListener('mouseleave',function () {
//     console.log("you exit no")
// })

document.querySelector('.container').addEventListener('mousemove',function (e) {
        console.log(e.offsetX,e.offsetY);
        // document.body.style.backgroundColor='red';
        document.body.style.backgroundColor= `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;
        console.log("you triggered mouse move event");
    });