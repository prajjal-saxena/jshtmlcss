//Object literals, Constructors and object oriented javascript

console.log("Welcome to tut27");


//Object literal for creating object
let car={
    name:'Maruti 800',
    topspeed:89,
    run: function() {
        console.log("Car is running");
    }
}
console.log(car);

//we have already seen constructor like these
//new Date();

//Creating a constructor for cars
function GeneralCar(givenName,givenSpeed) {
    this.name=givenName;
    this.topspeed=givenSpeed;
    this.run=function () {
        console.log(`${this.name} is running`);
    }
    this.analyze=function () {
        console.log(`This car is slower by ${200 - this.topspeed} km/h than mercedes`)
    }
}
car1= new GeneralCar('niesan',100);