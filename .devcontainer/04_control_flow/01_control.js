// if <, >, <=, >=, ==, ===, !=, !==

const temp = 400
if (temp > 200) 
{
    // console.log("Temperature is greater than 100");
}
else
{
    // console.log("Temperature is less than 100");
}

// scope
const score = 200
if (score > 100) {
    const power = "fly"
    // console.log(`user power is ${power}`);
}
// console.log(`user power is ${power}`); // this will throw the error because power vatiable is not within scope

const balance = 1000

// if(balance > 500) console.log("Balance is greater than 500"),console.log("test")  // do not use this type of code

// if(balance < 500)
// {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// } 
// else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedin = true
const debitcard = true
const loggedinfromGoogle = false
const loggedinemail = true

if (userLoggedin && debitcard) {
    console.log("allow to buy course");
}

if (loggedinfromGoogle || loggedinemail) {
    console.log("User logged In");
}



