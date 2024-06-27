// Immediately Invoked Function Expressions (IIFE)

//This function immediately executes
(function one() {
    //named IIFE
    console.log(`DB Connected`);
})();                               //use semicolon here to use two IIFE!!!

((name) => {
    console.log(`DB Connected Two ${name}`);
})("Kuldeep")


//There is a problem because of global scope pollution, therefore to remove those global variable pollution we use IIFE