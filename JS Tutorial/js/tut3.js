console.log('tut3');

// Variables in js
// These 3 are use to make variable var,let, const

var name="Prajjal";
var channel;
var marks=35;
console.log(name,channel,marks);


// Rules for creating javascript variables

// 1. Cannot start with Numbers
// 2. Can start with letters, Numbers, _ or $.
// 3. Are case sensitive

    //var ko hum assign kar sakta ha bar bar or jo last ma assign hoga wohi show hoga hamma
    // when we use var so we can assign variable again and again the last one which is assign then that one will print.
var city= 'Delhi';
city='Meerut';
console.log(city);

    //but agar hum const ka use karta ha toh hum 1 hee bar variable assign kar paa aga 1 bar assign karna ka baad dubaara assign nii kar paa aga
    // we can use assign const variable one time we cant assign same variable agai and again

const ownerName="Vishal";
console.log(ownerName);

   //with the help of let variable we can assign the variable in the local
   //let variable kii help sa hamara variable ka scope local hee rahaga 

{
    let city="Rampur";
    city="Bareilly";
    console.log(city);
}
 console.log(city);


 /* Most common programming case type

 1. camelCase
 2. kabab-case
 3. snake_case
 4. PascalCase   */
