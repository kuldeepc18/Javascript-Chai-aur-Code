// const redditUser = new Object()  //singleton object 

const redditUser = {}       //non-singleton object

redditUser.id = "213xyz"
redditUser.name = "sam"
redditUser.isLoggedIn = false

// console.log(redditUser);

const regularUser = {
    email: "sam@example.com",
    fullname: {                     //nested object
        userfullname: {
            firstname: "Kuldeep",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}        //creates problem as it returns object in object 
// const obj3 = Object.assign({}, obj1, obj2)      //empty braces for target and obj1, obj2 are sources
const obj3 = {...obj1, ...obj2}     //spread operator 
// console.log(obj3);

const users = [        //array of objects
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
]

users[1].email
console.log(redditUser);
console.log(Object.keys(redditUser));       //returns the array of keys
console.log(Object.values(redditUser));     //returns the array of values
console.log(Object.entries(redditUser));     //returns an array of key-values pairs

console.log(redditUser.hasOwnProperty('isLoggedIn'));      //Determines whether an object has a property with the specified name.