class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    /**
     * Getter method for retrieving the email address in uppercase.
     * @returns {string} The email address in uppercase.
     */
    get email() {
        return this._email.toUpperCase();
    }

    /**
     * Sets the email property.
     * 
     * {string} value - The email address to set.
     */
    set email(value) {
        this._email = value;
    }


    get password() {
        return `${this._password}kuldeep`
    }

    set password(value) {
        this._password = value
    }
}

const kuldeep = new User("k@kuldeep.ai", "abc")
console.log(kuldeep.email);



/*


In JavaScript, getter and setter methods are used to define how to access and modify the properties of an object. They provide a way to control the access to an object's properties, allowing you to add custom behavior when getting or setting a property value.


### Getter Method

A getter method allows you to define a function that will be called when a property is accessed. It is defined using the `get` keyword.


### Setter Method

A setter method allows you to define a function that will be called when a property is set. It is defined using the `set` keyword.


### Combining Getters and Setters

You can define both getter and setter methods for the same property to control both reading and writing of the property.


### Benefits of Getters and Setters

1. **Encapsulation**: They allow you to control how properties are accessed and modified, providing a way to encapsulate the internal state of an object.
2. **Validation**: You can add validation logic in setters to ensure that the property values meet certain criteria.
3. **Computed Properties**: Getters can be used to create computed properties that are derived from other properties.
4. **Side Effects**: You can perform side effects (e.g., logging, triggering events) when properties are accessed or modified.


*/