function sayMyName(){
    console.log("K");
    console.log("U");
    console.log("L");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}

// sayMyName      //function reference
// sayMyName()      //function execution

// function addTwoNumbers(number1, number2){      //number1 and number2 are function parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){      //number1 and number2 are function parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("Kuldeep");        //after return statement, code becomes unreachable within the block of function and it does not work
}

const result = addTwoNumbers(5, 6)     //5 and 6 are function arguments
// console.log("Result:", result);

function loginUserMessage(username = "griff"){      //default value
    if(username === undefined){        //OR if(!username)
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in.` 
}

// console.log(loginUserMessage("Kuldeep"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){       //here, triple dot acting as rest operator as it packs all the value in a bundle and returns an array of all the values
    return num1
}

console.log(calculateCartPrice(200, 500, 400, 2000));         //here 200 goes into val1, 500 goes into val2 and the rest values go into array 

//To pass an object into a function
const user = {
    username: "Kuldeep",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "fang",
    price: 399
})

//To pass array into a function
const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));