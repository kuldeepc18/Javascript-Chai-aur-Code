// for of loop

// ["", "", ""] : multiple strings in array 
// [{}, {}, {}] : multiple objects in array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char of greeting is ${greet}`)
}

// Maps

const map = new Map()       //Map() : Map object holds Key-Value pairs and remembers the original insertion order of the keys. Key in the map must be unique.
map.set('IN', "India")      //set : Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

//to print key , value or both of map object using for of loop
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//to iterate an object using for of loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//this will not work because Objects are not iterable using for of loop
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }