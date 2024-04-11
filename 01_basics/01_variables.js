const accountID = 263424        //Here, variable value cannot be changed
let accountEmail = "kuldeep@xyz.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;         //semicolon is not compulsory

//accountID = 23  // not allowed  

accountEmail = "kuldeep@google.com"
accountPassword = "54321"
accountCity = "Delhi"

/*
    Prefer not to use var because of issue in block scope and functional scope.
*/

console.log("Account ID: " + accountID);

console.table([accountID, accountEmail, accountPassword, accountCity])