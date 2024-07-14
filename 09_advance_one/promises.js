/*

Promises in JavaScript are a way to handle asynchronous operations. They represent a value that may be available now, in the future, or never. Promises are used to manage callbacks and provide a more structured way to deal with asynchronous code compared to traditional callback functions.

Here are some key points about promises:

1. **Asynchronous Operations**: Promises are commonly used for operations that take time to complete, such as fetching data from a server, reading a file, or making an API call.

2. **States**: Promises have three states: 
   - **Pending**: Initial state, neither fulfilled nor rejected.
   - **Fulfilled**: The operation completed successfully.
   - **Rejected**: The operation failed.

3. **Chaining**: Promises can be chained together using `.then()` to handle the result of a promise or to transform the data before passing it to the next step in the chain.

4. **Error Handling**: Promises have a built-in mechanism for error handling using the `.catch()` method to handle any errors that may occur during the asynchronous operation.

5. **Promise.all()**: This method takes an array of promises and returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable contains no promises.

6. **Promise.race()**: This method returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.

Promises provide a cleaner and more readable way to write asynchronous code in JavaScript, making it easier to manage complex asynchronous operations and avoid callback hell.


*/

//Creation of Promises

/*

This below code snippet is creating a new Promise object named `promiseOne`. Promises are used in JavaScript for asynchronous programming, allowing you to handle the result of an asynchronous operation once it completes, either successfully (resolved) or with an error (rejected).

In this case, the Promise constructor function is being called with a callback function that takes two parameters: `resolve` and `reject`. Inside this callback function, you would typically perform some asynchronous operation (such as making an API call or reading a file) and then call `resolve` if the operation is successful or `reject` if it encounters an error.


*/
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is completed");
        resolve(); //to connect with `then` method with resolve, we execute --> `resolve()` method
    }, 1000);
});

/**
 * Consumes the promise and logs a message when the promise is resolved.
 */

//`then` method attaches callbacks for the resolution and/or rejection of the Promise.
promiseOne.then(function () {
    //then is related to resolve
    console.log("Promise Consumed");
});

//Promise 2
//using promise without variable
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async task 2 is resolved");
});

//Promise 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "kuldeep", email: "kuldeep@google.com" }); //since resolve and then is connected , all the values passed in resolve method whether it will be object(mostly), array or a function are available to the function in `then` method.
    }, 1000);
});

// Handles the resolved value of promiseThree.
// Logs the user object to the console.
promiseThree.then(function (user) {
    console.log(user);
});

//Promise 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!true) {
            resolve({ username: "Kuldeep", email: "kuldeep@google.com" });
        } else {
            reject("ERROR: SOMETHING WENT WRONG!!!"); //returns an error with a message to `then` method
        }
    }, 1000);
});

/**
 * Handles the resolved value from the promiseFour, logs the user object to the console, and returns the username property.
  @param {Object} user - The user object resolved from the promise
  @returns {string} The username property of the user object
 */
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        //catch(): Attaches a callback for only the rejection of the Promise.
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"))
//Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.
//finally(): it is by default executed.


//Promise 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: 123 });
        } else {
            reject("ERROR: JS WENT WRONG!!!");
        }
    }, 1000);
});

async function consumePromiseFive() {
    //adding try-catch block to handle error. 
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

/**
 * Explanation of above code.
 * `async` keyword is used to define an asynchronous function.
 * `await` keyword is used to pause the execution of the `consumePromiseFive` function until the `promiseFive` promise is either resolved or rejected.
 * if `promiseFive` is resolved, the resolved value is assigned to the `response` variable.
 * This function waits for the resolution of `promiseFive` and logs the response to the console.
 * Note: `promiseFive` is expected to be a promise object, not a function.
 */

//performing an async operation to fetch a list of users from an external API and then processing the response.
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()   //Since converting the response from string to JSON takes time, we used `await`.
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


//same as above but using `.then`, `.catch`
fetch('https://api.github.com/users/kuldeepc18')
    .then((response) => {
        return response.json()
    })
    .then((data) => {           //to handle `response.json()`, another `then` is used
        console.log(data);
    })
    .catch((error) => console.log(error))