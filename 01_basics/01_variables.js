/*
Definition:
Variables are containers for storing data values.

Types and Differences:
1. var:
Function-scoped.
Hoisted with undefined initialization.
Can be re-declared and updated.

2. let:
Block-scoped.
Hoisted but not initialized (temporal dead zone).
Can be updated but not re-declared in the same scope.

3. const:
Block-scoped.
Hoisted but not initialized (temporal dead zone).
Must be initialized during declaration and cannot be updated or re-declared.
*/

const accountId = 1234
let accountEmail = "Aditya@gmail.com"
var accountPassword = "12345" 
accountCity = "Delhi" 
// accountId = 2 //Not allowed

accountEmail = "aditya1@gmail.com"
accountPassword = "121212"
accountCity = "Gurgaon"

console.log(accountId);

/*
One should avoid using var as var has issues in block scope and functional scope.

Use let for variables that may change.
Use const for constants.
Avoid var in modern JavaScript.
*/