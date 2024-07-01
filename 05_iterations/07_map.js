const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//map : Calls a defined callback function on each element of an array, and returns an array that contains the results.

// const newNumbers = numbers.map( (num) => { return num + 10})

const newNumbers = numbers
    .map((num) => num * 10)
    .map((num) => num + 1)          //here, num takes values from the above map function
    .filter((num) => num >= 40)

console.log(newNumbers);