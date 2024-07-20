## Object prototypes

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

```javascript
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```
This is an object with one data property, `city`, and one method, `greet()`. If you type the object's name followed by a period into the console, like `myObject.`, then the console will pop up a list of all the properties available to this object. You'll see that as well as `city` and `greet`, there are lots of other properties!

```javascript
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```
Every object in JavaScript has a built-in property, which is called its `prototype`. The prototype is itself an object, so the prototype will have its own prototype, making what's called a `prototype chain`. The chain ends when we reach a prototype that has `null` for its own prototype.

When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case `undefined` is returned.

So when we call `myObject.toString()`, the browser:
- looks for `toString` in `myObject`
- can't find it there, so looks in the prototype object of `myObject` for `toString`
- finds it there, and calls it.

What is the prototype for `myObject`? To find out, we can use the function `Object.getPrototypeOf()`:

```javascript
Object.getPrototypeOf(myObject); // Object { }
```
This is an object called `Object.prototype`, and it is the most basic prototype, that all objects have by default. The prototype of `Object.prototype` is `null`, so it's at the end of the prototype chain:

![prototype chain](<prototype chain.png>)

**Prototypical inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. Unlike classical inheritance, which is based on classes, JavaScript uses a prototype chain to achieve inheritance.**