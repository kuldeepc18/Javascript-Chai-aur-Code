//  Primitive --> call by value

//  7 types of primitive: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



//   Non primitive --> call by reference

// types of non - primitive: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//+++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "firstChannel"      //String is primitive datatype, it uses Stack

let anotherName = myYoutubeName         //A copy is made of myYoutubeName and then it is changed
anotherName = "secondChannel"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {                     //Object is non-primitive data type, it uses heap 
    email: "userOne@gmail.com",
    upi: "userOne@ybl"
}

let userTwo =  userOne              //Both refer to the same email and upi 

userTwo.email = "userTwo@gmail.com"

console.log(userOne);               //By call by reference, both value is changed 
console.log(userTwo);