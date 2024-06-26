//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "kuldeep"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "kuldeep"
    if (username === "kuldeep") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addOne(5))

function addOne(num) {
    return num + 1
}



addTwo(5)           //gives error as cannot access addTwo before initialization
const addTwo = function (num) {
    return num + 2
}