
// This is static import and export
// import { sayHi, sayHola } from "./greeting.js";


// if (true) {


    // This is a dynamic import that returns a promise and can be written anywhere in the code.
//     const { sayHi, sayHola } = await import('./greeting.js')     //in curly bracket, we write the resolve value which the import will return.    

//     sayHi();

//     sayHola();


// }


// static import-export doesn't support conditional things


//we use promise to use multiple modules dynamically, concurrently and simultaneously.

const { sayHi, sayHola } = await import('./greeting.js')

const promises = Promise.all(
    [
        await import('./greeting.js'),
        await import('./calc.js')
    ]
);

console.log(promises);

promises.then(result => {
        // console.log(result);
        console.log(result[0].sayHi());
        console.log(result[1].sum(2, 3));
});