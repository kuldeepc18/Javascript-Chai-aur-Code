// This is Object Literal
const user = {
    username: "kuldeep",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        // this refers to current context
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


// CONSTRUCTOR FUNCTION

// In JavaScript, a constructor function is a special type of function that is used to create and initialize objects.When you want to create multiple objects with similar properties and methods, you can define a constructor function as a blueprint for those objects.

// Here are some key points about constructor functions in JavaScript:

// 1. ** Usage **: Constructor functions are typically used with the`new` keyword to create new instances of objects based on the defined blueprint.

// 2. ** Initialization **: Inside a constructor function, you can set up the initial state of the object by assigning values to properties.

// 3. ** `this` Keyword **: Within a constructor function, the `this` keyword is used to refer to the current instance of the object being created.It allows you to set and access properties specific to that instance.

// 4. ** Example **:

// ```javascript
//    Constructor function for creating Person objects
//    function Person(name, age) {
//        this.name = name;
//        this.age = age;
//        this.greet = function() {
//            return `Hello, my name is ${ this.name } and I am ${ this.age } years old.`;
//        };
//    }

//    Creating instances of Person using the constructor function
//    const person1 = new Person('Alice', 30);
//    const person2 = new Person('Bob', 25);

//    console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
//    console.log(person2.greet()); // Output: Hello, my name is Bob and I am 25 years old.
//    ```

// In the example above, `Person` is a constructor function for creating`Person` objects with `name`, `age`, and a `greet` method.By using the `new` keyword, we can create multiple instances of `Person` with different properties while sharing the same methods defined in the constructor function.


function User(username, loginCount, isLoggedIn) {
    this.username = username;   //LHS act as variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

// without new keyword userTwo will overwrite userOne  

/**
 * Step-1: By using `new` keyword, an empty object is created called as `instance`.
 * 
 * Step-2: A constructor function is called because of `new` keyword. It packs all the arguments and gives us.
 * 
 * Step-3: All the arguments are injected into `this` keyword.
 * 
 * Step-4: We get all the values in the function.
 */


const userOne = new User("kuldeep", 12, true)
const userTwo = new User("Javascript", 11, false)
console.log(userOne.constructor);
//console.log(userOne);
//console.log(userTwo);