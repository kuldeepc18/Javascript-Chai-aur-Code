const user = {
    username: "Kuldeep",
    price: 999,

    welcomeMessage: function () {
        console.log(`Hello ${this.username}, welcome to my website!`);
        console.log(this);      //this refers to current context or value
    }
}

// user.welcomeMessage()
// user.username = "fang"
// user.welcomeMessage()

// console.log(this);      //here, this refers to empty object
//In browser, the global object is window object that is why {this} refers to window object

function one() {
    let username = "Kuldeep"
    console.log(this.username);     //this only works in object //prints undefined
}

// one()

const two = function () {
    let username = "Kuldeep"
    console.log(this.username);     //this only works in object //prints undefined
}

// two()

//Arrow function
const three = () => {
    let username = "Kuldeep"
    console.log(this.username);     //this only works in object //prints undefined
}

// three()

//basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2               //explicit return
// }

//Implicit return (without return keyword and curly braces)
//this is only used if a function has a single expression
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4));

const returnObject = () => ({username: "Kuldeep"})
console.log(returnObject());