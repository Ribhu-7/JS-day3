console.log(myAge);//not defined
// let age;
console.log(age); // undefined
let amiadult = null;
amiadult = true; 

let fName ="Raj";
const lName = "Ghosh";
var age ="29";

{
    console.log(fname,lname,age);
}
console.log(fname,lname,age);

{
    let fname ="Raj";
const lname = "Ghosh";
var age ="29";
    console.log(fname,lname,age);
}
console.log(fname);
console.log(lname);
console.log(age); // can be accessed

console.log(game);
var game = "cricket";

console.log(game2);
var game2 ="badminton";
console.log(game2);


add(2.3)

function add(b , a)
{
    let result = a+b;
    console.log(result);
    console.log("ribhu")
}

console.log(2<3);
console.log(2<=3);
console.log(2>3);


console.log(!1);
console.log(!0);

console.log(0 && 3);
console.log(3 && 0);
console.log(2 && 3);

console.log(0 || 1);
console.log(1 || 0);
console.log( 2 || 1);
console.log(3 || 2);

console.log(2==2);
console.log(2=="2");
console.log(2==="2");

console.log(a++);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
console.log(a);