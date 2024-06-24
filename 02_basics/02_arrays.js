const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)       //Appends new elements to the end of an array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)     //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeroes);

const all_new_Heroes = [...marvel_heroes, ...dc_heroes]        //spread operator : dots spread values means the elements of the array has become individual
console.log(all_new_Heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)     //flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("Kuldeep"));
console.log(Array.from("Kuldeep"));     //form : creates an array from an iterable object.
console.log(Array.from({name: "Kuldeep"}));     //interesting, as it gives empty array because it cannot convert directly 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));      //of : Returns a new array from a set of elements.