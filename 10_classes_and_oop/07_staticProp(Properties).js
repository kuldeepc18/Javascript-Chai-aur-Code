class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }


    // Static methods are associated with the class itself, not with individual instances of the class. You can call a static method directly on the class name without creating an object.

    static createdId() {
        return `123`
    }
}

const kuldeep = new User("kuldeep")
// console.log(kuldeep.createdId());   //creates an error as static is declared to `createdId()` method

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const teacherObject = new Teacher("phone", "phone@gmail.com")

// console.log(teacherObject.createdId());     //creates an error

console.log(User.createdId())      // only those class or object is able to call where static is declared inside in its scope. 