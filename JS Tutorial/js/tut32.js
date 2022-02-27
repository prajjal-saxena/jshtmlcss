console.log("This is tut32");


//Exercise
// create a class library and impliment the following:
// constructor must take the book list as as argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class library{
    constructor(a,b,c,d){
       this.a=a;
       this.b=b;
       this.c=c;
       this.d=d;
    }

    getBookList(){
        return `All list of book name are ${this.a},${this.b},${this.c},${this.d}`
    }
}

class issue extends library{
    constructor(a,b,c,d,user)
}

let lib=new library("Math","Science","English","Hindi")
console.log(lib);