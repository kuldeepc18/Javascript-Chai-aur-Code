//singleton
//object.create //constructor

//object literals
// const JsUser = {}   //empty object

const mySym = Symbol("key1")

const JsUser = {
    //properties of object
    name: "Kuldeep",   //key : value
    "full name": "Kuldeep Choudhary",
    [mySym]: "mykey1",      //to declare symbol use square bracket
    age: 18,
    location: "Mumbai",
    email: "kuldeep@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "kuldeep@amazon.com"     //it will change the original email declared in the object
// console.log(JsUser.email);
// Object.freeze(JsUser);      //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

// JsUser.email = "kuldeep@microsoft.com"      //it didn't changed the email property
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);     //this is used to reference the same object
}

// console.log(JsUser.greeting);       //function didn't executed but its reference is returned back
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());