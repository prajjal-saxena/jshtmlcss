console.log("This is tut 31");

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020- this.experience;
    }

    static add(a,b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){  //Object banta hee sabsa phala cons call hota ha
           super(givenName,givenExperience,givenDivision); //super ka means peechli class ka constructor koo call kardo
           this.language=language;
           this.github=github;
    }

    favoriteLanguage(){
        if(this.language=='python'){
            return 'Python';
        }
        else{
            return 'Javascript';
        }
    }

    static multiply(a,b){
        return a*b;
    }
}

// let harry=new Employee("Harry",56,"Division");
// console.log(Employee.add(3,4));

let rohan=new Programmer("Rohan",3,"lays","Go","Rohan420");
console.log(rohan)
console.log(Programmer.multiply(3,5));