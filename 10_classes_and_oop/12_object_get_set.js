// very rarely used


// private properties are properties of a class that are only accessible from within the class itself. They cannot be accessed or modified from outside the class, ensuring encapsulation and data privacy.
const User = {
    _email: "k@kc.com",   //underscore is just like a private property
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    } 
}

const tea = Object.create(User)
console.log(tea.email);