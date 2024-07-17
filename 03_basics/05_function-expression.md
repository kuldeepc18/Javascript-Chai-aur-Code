In JavaScript, a function expression is a way to define a function as part of a larger expression, such as assigning it to a variable, passing it as an argument to another function, or including it in an object. This differs from a function declaration, which defines a function independently.

Here is a simple example of a function expression:

```javascript
// Function expression assigned to a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Outputs: Hello, Alice!
```

Key characteristics of function expressions:

1. **Anonymous Functions**: Function expressions can be anonymous (without a name).

   ```javascript
   const greet = function (name) {
     return `Hello, ${name}!`;
   };
   ```

2. **Named Function Expressions**: Function expressions can also have names, which can be useful for recursion or debugging.

   ```javascript
   const factorial = function fact(n) {
     return n <= 1 ? 1 : n * fact(n - 1);
   };

   console.log(factorial(5)); // Outputs: 120
   ```

3. **Assignment to Variables**: Function expressions are often assigned to variables, which can then be used to call the function.

   ```javascript
   const sum = function (a, b) {
     return a + b;
   };

   console.log(sum(2, 3)); // Outputs: 5
   ```

4. **Passed as Arguments**: Function expressions can be passed as arguments to other functions.

   ```javascript
   function callWithTwo(func) {
     return func(2);
   }

   const double = function (x) {
     return x * 2;
   };

   console.log(callWithTwo(double)); // Outputs: 4
   ```

5. **Immediately Invoked Function Expressions (IIFE)**: Function expressions can be immediately executed after they are defined.

   ```javascript
   (function () {
     console.log("This is an IIFE!");
   })(); // Outputs: This is an IIFE!
   ```

Function expressions are versatile and are a common pattern in JavaScript for creating functions in a more flexible manner than function declarations.
