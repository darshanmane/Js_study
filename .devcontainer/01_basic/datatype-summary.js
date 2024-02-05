// # premitive --> call by value
// 7 Types : string, number , boolean, null, undefined, symbol, BigInt

const score = 100
console.log(typeof (score)); //DataType --> Number 

const scorevalue = 100.30
console.log(typeof (scorevalue)); //DataType --> Number 

const IsloggedIn = false
console.log(typeof (IsloggedIn)); //DataType --> boolean 

const OutsideTemp = null
console.log(typeof (OutsideTemp)); //DataType --> object 

let UserEmail;
console.log(typeof (UserEmail)); //DataType --> Undefdined 


const id = Symbol('123')
console.log(typeof (id)); //DataType --> Symbol 

const anotherId = Symbol('123')
// console.log(id==anotherId)

const bigNumber = 1332141544633414644354n

// # Non Premitive -->Reference Type 
//  3 types : Array, objects, Functions

const heros = ["shaktiman","naagraj","doga"] //--> Array

console.log(typeof (heros)); //DataType --> Object 

let myobj = {
    name: "darshan",
    age:31,
}  //--> Object

console.log(typeof (myobj)); //DataType --> Object 

const myFunction = function(){
    console.log("Hello World");
} // --> Function

console.log(typeof (myFunction)); //DataType --> Function 

// In Js we never defined language

// Js is dynamically type 