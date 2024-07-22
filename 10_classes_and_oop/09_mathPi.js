// console.log(Math.PI);   // universal constant
// Maths.PI = 5
// console.log(Math.PI);   // its value cannot be overwrite.


/*

The Object.getOwnPropertyDescriptor method in JavaScript returns a property descriptor for an object's own property (not inherited). A property descriptor is an object that describes the configuration of the property, such as its value, whether it is writable, enumerable, or configurable.

Syntax:
Object.getOwnPropertyDescriptor(obj, prop);

-> `obj`: object name containing the property
-> `prop`: The name or Symbol of the property whose descriptor is to be retrieved.

A property descriptor can have the following fields:

`value`: The value associated with the property.

`writable`: A boolean indicating if the property's value can be changed.

`enumerable`: A boolean indicating if the property can be enumerated in a for...in loop.

`configurable`: A boolean indicating if the property descriptor can be changed and if the property can be deleted.

`get`: A function which serves as a getter for the property, or undefined if there is no getter.

`set`: A function which serves as a setter for the property, or undefined if there is no setter.

*/


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// no we will define our property descriptor

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// entries: Returns an array of key/values of the enumerable properties of an object
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

// the enumerable property for `name` is false , so the above loop will not apply on `name` property.