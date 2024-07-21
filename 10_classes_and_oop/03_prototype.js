// let myName = "Kuldeep      "
// let myChannel = "google     "

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kuldeep = function(){
    console.log(`kuldeep is present in all objects`);
}   

Array.prototype.heyKuldeep = function(){
    console.log(`kuldeep says hello`);
}

// heroPower.kuldeep()
myHeroes.kuldeep()  // `here`, we made new method `kuldeep` using prototype in Object and as the object is at the top level , this method is accessible to all i.e: arrays, strings, function, etc. 
myHeroes.heyKuldeep()   // we have made new property `heyKuldeep` using prototype in array so only array has access to it.
//heroPower.heyKuldeep()  // `heroPower` object has no access to `heyKuldeep()` method.

// Inheritance using Prototype

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Old Syntax to inherit properties from user to Teacher
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// solution of starting problem
let anotherUsername = "ChaiAurCode      "

/**
 * Calculates the true length of a string by removing leading and trailing whitespaces.
 * @returns {number} The true length of the string.
 */
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}


anotherUsername.trueLength()
"kuldeep".trueLength()
"iceTea".trueLength()
