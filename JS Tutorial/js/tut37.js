// callback function ka andar function ko call karna

console.log("This is tutorial 37");

const students = [
    {name: "harry", subject: "Javascript"},
    {name:"Rohan", subject: "Machine Learning"}
]

function enrollStudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        callback();
    }, 3000);  
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (element) {
            str += `<li>${element.name}</li>` 
        });
        document.getElementById('students').innerHTML= str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents(); 