Higher-order functions in JavaScript are functions that do at least one of the following:

1. **Take one or more functions as arguments**.
2. **Return a function as a result**.

Higher-order functions are a key feature of functional programming and are widely used in JavaScript for their ability to create more flexible and reusable code. Here are some common examples of higher-order functions in JavaScript:

### 1. Functions Taking Functions as Arguments

#### `Array.prototype.map`

The `map` method takes a function as an argument and applies this function to each element of the array, returning a new array with the results.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

#### `Array.prototype.filter`

The `filter` method takes a function as an argument and uses this function to test each element of the array, returning a new array with all elements that pass the test.

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

#### `Array.prototype.reduce`

The `reduce` method takes a function and an initial value as arguments, applying the function to each element of the array to reduce it to a single value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### 2. Functions Returning Functions

#### Function Returning a Function

You can create a function that returns another function, which can be useful for creating configurable functions or for function composition.

```javascript
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15
```

### 3. Higher-Order Functions in Action

#### `Array.prototype.forEach`

The `forEach` method takes a function as an argument and executes this function for each element of the array.

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * 2)); // 2, 4, 6, 8
```

### Benefits of Higher-Order Functions

1. **Code Reusability**: Higher-order functions allow you to create more generic functions that can be reused with different operations.
2. **Code Readability**: They can make your code more concise and readable by abstracting common patterns.
3. **Functional Programming**: They are essential for functional programming techniques, enabling the use of map, filter, reduce, and other functional utilities.
