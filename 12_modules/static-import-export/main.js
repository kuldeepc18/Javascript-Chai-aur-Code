console.log('Learning Modules...');

// Alias is, while importing something from another module, if you want to give another name of your choice because sometimes there can be a name conflict. So we alias eg: sum as add
// import { sum as add, sub } from './calc.js';

// namespace is used if we want to import many things together.
// import * as calc from './calc.js';


// import {default as myGoodName} from './whoami.js';
// OR
// import myGoodName from './whoami.js';


// if we import a default export, we can use another name for the variable or function and if we import multiple variables or functions or objects, etc. having export keyword we must use same name for var, func, obj, etc. as we used in export.


// console.log(add(2, 3));
// console.log(sub(10, 5));

// console.log(calc.sum(2, 3));
// console.log(calc.sub(10, 5));


// console.log(myGoodName());


// combined modules 
import * as combine from './combine.js';

console.log(combine.calc.sum(1, 3));


console.log(combine.sayMyName());