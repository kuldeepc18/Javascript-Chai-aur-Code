## Javascript and Classes

Does Javasript have classes? <br>
-->
Yes, JavaScript has classes,

While JavaScript is a prototype-based language and does not have classes in the same way as class-based object-oriented programming languages like Java or C++, JavaScript did introduce classes in ECMAScript 2015 (ES6). 

The key points are:

****Classes in JavaScript****
- JavaScript classes are a syntactical sugar on top of JavaScript's existing prototype-based inheritance. They provide a more intuitive, class-based syntax for creating objects and dealing with inheritance.
- Classes are defined using the `class` keyword and have a special `constructor()` method for initializing new instances.
- Classes support inheritance using the `extends` keyword, allowing you to create subclasses.
- JavaScript classes are not the same as classes in other languages - they still use prototypes under the hood.

****Differences from Other Languages****
- JavaScript classes do not have the same semantics as classes in Java or C++. They are more like a syntactical wrapper around JavaScript's prototype-based inheritance model.
- For example, there is no concept of "static" methods or properties in JavaScript classes - these are achieved differently using the prototype.
- Private class members are also implemented differently in JavaScript compared to other class-based languages.


## What is OOP?

Here is an explanation of Object-Oriented Programming (OOP) with a real-world example:

## Real-World Example: Modeling a Car in OOP

Let's consider a real-world example of modeling a Car using Object-Oriented Programming (OOP) principles:

****Encapsulation****
- The Car class encapsulates the data (attributes) and behavior (methods) of a car into a single unit.
- The internal implementation details of the car, such as the engine, transmission, and brakes, are hidden from the outside world.

****Abstraction****
- The Car class provides an abstract representation of a real-world car, focusing on the essential features like make, model, and color, and hiding unnecessary details.
- The Car class allows you to create simplified models of cars without getting bogged down in the complex inner workings.

****Inheritance****
- You could create specialized classes like ElectricCar or SportsCar that inherit from the base Car class.
- This allows you to reuse common functionality, such as the ability to start, stop, and move the car, while adding unique features to the specialized classes.

****Polymorphism****
- If you have a generic Vehicle class, you could write a method like `makeSound()` that works for both Car and Motorcycle objects, even though the actual sound they make is different.
- This allows you to write code that can work with objects of different classes as long as they share a common interface.

## Example Code: Modeling a Car in Python

Here's an example of how you could model a Car in Python using OOP:

```javascript
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.speed = 0;
  }

  start() {
    console.log(`Starting the ${this.make} ${this.model}.`);
  }

  accelerate(speedIncrease) {
    this.speed += speedIncrease;
    console.log(`The ${this.make} ${this.model} is now going ${this.speed} mph.`);
  }

  brake(speedDecrease) {
    this.speed -= speedDecrease;
    console.log(`The ${this.make} ${this.model} is now going ${this.speed} mph.`);
  }

  stop() {
    this.speed = 0;
    console.log(`The ${this.make} ${this.model} has stopped.`);
  }
}

// Create a Car object
const myCar = new Car('Toyota', 'Camry', 'blue');
myCar.start();
myCar.accelerate(30);
myCar.brake(10);
myCar.stop();

```

In this example:

- The `Car` class represents the blueprint for creating Car objects.
- The `__init__` method is the constructor that initializes the attributes of a Car object.
- The `start()`, `accelerate()`, `brake()`, and `stop()` methods define the behavior of a Car object.
- We create an instance of the `Car` class called `my_car` and call its methods to simulate the car's operation.

This example demonstrates the key OOP principles:

- **Encapsulation**: The data (make, model, color, speed) and methods (start, accelerate, brake, stop) are bundled together in the `Car` class.
- **Abstraction**: The `Car` class provides a simplified model of a real-world car, hiding unnecessary details.
- **Inheritance**: We could create a `ElectricCar` class that inherits from the `Car` class, adding additional attributes and methods.
- **Polymorphism**: If we have a `Vehicle` superclass, we could write a `makeSound()` method that works for both `Car` and `Motorcycle` objects.

By organizing the code around objects (cars) rather than just functions and logic, OOP allows for the creation of modular, reusable, and maintainable code, making it a powerful programming paradigm for real-world applications.


## Object
- collection of properties and methods
- eg: toLowerCase, promise, etc are objects.

## why use OOP
Here is an explanation of why to use object-oriented programming (OOP) in points:

## Why Use OOP?

1. **Natural Modeling**: OOP allows you to model real-world entities in software, making the code more intuitive and easier to understand.

2. **Code Reusability**: OOP promotes code reuse by encapsulating data and behavior into objects, which can be easily applied across multiple projects or programs.

3. **Modularity**: The modular structure of OOP makes it easier to work on different parts of a program independently, improving collaboration and making the code more maintainable.

4. **Abstraction**: OOP provides abstraction, allowing you to focus on essential features and hide unnecessary complexity from the user, simplifying the user experience.

5. **Improved Debugging**: The modular, object-based structure of OOP makes it easier to identify and isolate problems in large, complex programs.

6. **Enhanced Flexibility**: OOP enables polymorphism, allowing objects of different classes to be treated as objects of a common superclass, enhancing code flexibility and extensibility.

7. **Better Organization**: OOP encourages breaking a program into smaller, more manageable modules (objects), which improves code organization and maintainability.

8. **Improved Security**: OOP encapsulates data and methods into objects, preventing direct access to internal implementation details, which improves data security and integrity.

By using OOP, developers can create more maintainable, scalable, and robust software applications that are easier to understand and work with.

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
- Abstraction -> hides unnecessary details
- Encapsulation -> wraps all the data (methods, instances, variables, etc. together)
- Inheritance -> allows a new class to be based on an existing class, inheriting its properties and methods.
- Polymorphism -> one method will do many work