console.log("This is tut 28");

//Object prototype

let obj={
    name:"Harry",
    channel:"Code with harry",
    address:"Mars"
}


function Obj(givenName) {
    this.name=givenName;
}

Obj.prototype.getName=function() {
    return this.name;
}

Obj.prototype.setName=function(newName) {
    this.name=newName;
}

let obj2=new Obj("Rohan Das");
 