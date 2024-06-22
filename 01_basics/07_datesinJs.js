// Dates

let myDate = new Date()
console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 20)   // In JS, month starts from 0
// let myCreatedDate = new Date(2024, 0, 20, 5, 3)  //year, month, date, hour, minute, second
// let myCreatedDate = new Date("2024-06-22")  //YYYY-MM-DD
let myCreatedDate = new Date("05-14-2024")
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})