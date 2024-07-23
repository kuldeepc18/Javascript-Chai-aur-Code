// very rarely used

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