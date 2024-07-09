const name = "kuldeep"
const repoCount = 50

// console.log(name + repoCount + " Value");    //outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);      //use this syntax for string concatenation 


//another method to declare string
const gameName = new String('kuldeep-kc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)        //prints string from 0 - 3 
console.log(newString);                         //substring ignores negative values 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   kuldeep    "
console.log(newStringOne);
console.log(newStringOne.trim());           //trim removes starting and ending space

const url = "https://kuldeep.com/kuldeep%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sun'))         //returns true or false

console.log(gameName.split('-'));        //returns an array after splitting at '-'