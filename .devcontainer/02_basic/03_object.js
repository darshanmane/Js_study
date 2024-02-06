// singleton
// Object.create  --> singleton

// object literals

const mysym = Symbol("key1")

const user1 = {
    name: "suresh",
    "full name": "suresh Jadhav",
    [mysym] : "mykey1",  // --> it will consider as symbol
    // mysym : "key1",  // --> it will consider as string
    age: 15,
    location: "mumabai",
    email: "suresh@gmail.com",
    isloggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(user1.email);
// console.log(user1["email"]);

// console.log(user1."full name"); // we cant use this syntax
// console.log(user1["full name"]);

// console.log(user1.mysym);
// console.log(typeof user1.mysym); // --> it will consider as string

// console.log(user1[mysym]); // --> it will consider as symbol
// console.log(typeof user1[mysym]); 

// freeze the object

// user1.email = "suresh@google.com"
// Object.freeze(user1)
// user1.email = "darshan.mane@gmail.com"
// console.log(user1);

// function

user1.greeting = function(){
    console.log("Hello Js user")
}
user1.greeting1 = function(){
    console.log(`Hello Js user,${this["full name"]}`)
}
console.log(user1.greeting());

console.log(user1.greeting1());