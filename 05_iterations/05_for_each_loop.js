const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop using callback function
coding.forEach( function (val){
    // console.log(val);
} )

//for each loop using arrow function
coding.forEach( (item) => {
    // console.log(item);
} )

//
function printMe(item){
    console.log(item);
}

//passing already written function to iterate
// coding.forEach(printMe)             //reference of function is passed

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

//to iterate over an array having multiple objects using for each loop
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {       //Here, item refers to each objects in the array
    
    console.log(item.languageName);
} )