const pivalue = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(pivalue)
// console.log(Math.PI)
// Math.pi=5
// console.log(Math.PI)


const user = {
    username:"Suresh",
    Password:"123",

    sayhey: function () {
        console.log("Hello world");
    }
}
console.log(Object.getOwnPropertyDescriptor(user,"username"))
Object.defineProperty(user,"username",{
// writable: false,
enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(user,"username"))

for (let [key,value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}