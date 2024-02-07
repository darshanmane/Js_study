const UserEmail = "suresh@gmail.com" // true
// const UserEmail = "" //false
// const UserEmail = [] // true
// if (UserEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("don't have User Email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy Value
// "0", 'false', " ", [], {}, function(){}

// if (UserEmail.length === 0) {
//     console.log("array is empty");
// }

// const emptyobj ={}
// if (Object.keys(emptyobj).length === 0) {
//     console.log("array is empty");
// }

// false == 0 --> true
// false == '' --> true
// 0 == '' --> true

//Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// terniary operator

// condition ? true : false
 const iceteaprice = 100
 iceteaprice <= 80 ? console.log("less than 80") : console.log("greater than 80")