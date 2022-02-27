console.log("This is tut17");

// EVENTS AND EVENT OBJECT 

document.getElementById('heading').addEventListener('click',function (e) {
    let variable;
    console.log("You have clicked the heading");
    // location.href="www.fb.com";  es page par pahuch ja aga click karka
    variable=e.target;
    variable=e.target.className;
    // variable=e.target.id;
    variable=Array.from(e.target.className);
    variable=e.offsetX;
    variable=e.offsetY
    variable=e.clientX
    variable=e.clientY

    console.log(variable);
})