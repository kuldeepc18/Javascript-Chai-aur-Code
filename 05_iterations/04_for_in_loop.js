//to iterate an object using for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//to iterate an array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);              //prints the index of array
    // console.log(programming[key]);  //prints the values in the array
}

//to iterate a Map() object using for in loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);        //this will not work because Map() object is not iterable using for in loop
}