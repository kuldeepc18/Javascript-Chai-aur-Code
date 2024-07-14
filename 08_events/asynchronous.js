/**
 * JavaScript is a ::
 *                   Synchronous Programming Language
 *                   single thredead : means execution of code starts line-by-line
 * 
 * But, we can perform Asynchronous task into JavaScript using Browser or third party api.
 * 
 * Blocking code :: code that block flow of program (Synchronous task) 
 * Non-blocking code :: code that dosen't block flow of program and execute independentlly called Asynchronous task.
 * 
 * There are three main pillers to understand Asynchronous Task.
 * (1) JS Engine
 * (2) Web API / Enviroment (like:- node.js, deno....etc)
 * (3) Micro task queue / High Priority queue
 * 
 * Asynchronous task is executed in micro task queue, and because of that it execute fastly.
 * 
 * DOM is an API which is provided by the Browser but Node.js dosen't provide DOM API so that's why when we print "this-keyword" globally then we get a "window-object" in the Browser and an "Empty object" in Node.js.
 * 
 */

/**
 * Handler :: A function which is annonymous means that dosen't have any name.
 */



/*
Theory about Asynchronous--->

Asynchronous (async) code in JavaScript refers to code that allows operations to run in the background without blocking the main execution thread. This is particularly useful for tasks that take time to complete, such as network requests, file I/O, or timers. By using async code, JavaScript can continue executing other tasks while waiting for the long-running operations to complete, thus improving the efficiency and responsiveness of applications.

Here are some key concepts and tools related to async code in JavaScript:

### 1. **Callbacks**
A callback is a function passed as an argument to another function, which is then executed after the completion of some operation. This is one of the earliest methods for handling async operations in JavaScript.

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output after 1 second: Data fetched
});
```

### 2. **Promises**
Promises provide a more structured way to handle async operations. A promise represents a value that may be available now, in the future, or never. Promises have three states: pending, fulfilled, and rejected.

```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched');
    }, 1000);
});

promise.then((data) => {
    console.log(data); // Output after 1 second: Data fetched
}).catch((error) => {
    console.error(error);
});
```

### 3. **Async/Await**
`async` and `await` are syntactic sugar built on top of promises, providing a more readable and concise way to write async code. An `async` function returns a promise, and the `await` keyword can be used to pause the execution of the function until the promise is resolved.

```javascript
async function fetchData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });

    let data = await promise;
    console.log(data); // Output after 1 second: Data fetched
}

fetchData();
```

### 4. **Event Loop**
The event loop is a fundamental concept in JavaScript's concurrency model. It allows JavaScript to perform non-blocking operations by offloading tasks to the browser or Node.js APIs and then executing the callback functions once the tasks are complete.

### 5. **Common Async Operations**
- **Network Requests**: Using `fetch` API or `XMLHttpRequest` to make HTTP requests.
- **Timers**: Using `setTimeout` and `setInterval` to schedule code execution.
- **File I/O**: Reading and writing files in Node.js.

### Example: Fetch API with Async/Await
```javascript
async function getData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();
```

In this example, `fetch` is used to make an HTTP request, and `await` is used to wait for the response. The `try...catch` block is used for error handling.

By using async code, you can write more efficient and responsive JavaScript applications that handle long-running operations without blocking the main execution thread.


*/