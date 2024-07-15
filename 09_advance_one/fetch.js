/*

The global `fetch()` method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the `Response` object representing the response to your request.

A `fetch()` promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A `fetch()` promise does not reject if the server responds with HTTP status codes that indicate errors (`404`, `504`, etc.). Instead, a `then()` handler must check the `Response.ok` and/or `Response.status` properties.

*/

/*

How event loop works? (refer image `event loop.jpeg`)

1. **JS Engine**:
   - **Memory Heap**: This is where memory allocation happens for variables, objects, and functions.
   - **Call Stack**: This is a stack data structure that keeps track of function calls. The stack operates on a "last in, first out" (LIFO) principle. When a function is called, it’s added to the stack, and when the function returns, it’s removed from the stack.

2. **Call Process**:
   - Functions (`fn`) and the `Global` context are pushed onto the Call Stack as they are invoked. Each function call is added to the top of the stack and removed once completed.

3. **Web API**:
   - This includes the browser-provided APIs like `DOM API`, `setTimeout`, `setInterval`, `fetch()`, etc.
   - When a function involving a Web API (like `setTimeout`, `fetch`) is called, it’s offloaded from the Call Stack to the Web API. For example, calling `setTimeout` with a callback registers the callback with the Web API.

4. **Callback Registration**:
   - Once the Web API has completed its operation (like timing out or fetching data), it registers the callback function (CB) to be executed. The callback is not added directly to the Call Stack; instead, it is placed in one of the queues.

5. **Task Queues**:
   - **Microtask Queue**: This queue has higher priority. It includes tasks like promises and mutation observers. `fetch()` put all the callbacks to this queue.
   - **Task Queue**: This queue includes callbacks from `setTimeout`, `setInterval`, and other non-microtask operations.

6. **Event Loop**:
   - The Event Loop constantly checks the Call Stack and the queues.
   - If the Call Stack is empty, the Event Loop checks the Microtask Queue first and processes all tasks in it.
   - If the Microtask Queue is empty, it then processes tasks in the Task Queue.
   - This loop ensures that the JavaScript runtime never blocks and can handle asynchronous operations smoothly.

*/


/*

How fetch works behind the scene? (refer image `fetch.jpeg`)

1. **Global Memory**:
   - The `response` variable is declared in the global memory.

2. **`fetch('something')`**:
   - The `fetch` function is called with the argument `'something'`.

3. **Web Browser/Node**:
   - The `fetch` function sends a network request.
   - This request can either succeed (indicated by a checkmark) or fail (indicated by a cross).

4. **Promise States**:
   - The `fetch` function returns a promise.
   - This promise has two states: `onFulfilled` (success) and `onRejection` (failure).

5. **Data Flow**:
   - When the network request is sent, it waits for the response.
   - If the network request is successful, the promise is fulfilled, and the `onFulfilled` state is triggered.
   - If the network request fails, the promise is rejected, and the `onRejection` state is triggered.

6. **Assignment**:
   - Once the promise is resolved (either fulfilled or rejected), the `response` variable in the global memory is assigned the resulting value.

### Summary:

- The `fetch` function initiates an asynchronous network request.
- It returns a promise that handles the asynchronous operation.
- The promise has two possible outcomes: fulfillment (success) or rejection (failure).
- The resulting data (or error) from the promise is then assigned to the `response` variable in the global memory. 


 */