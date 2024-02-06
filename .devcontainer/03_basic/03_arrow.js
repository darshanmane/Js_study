const user = {
    username: "suresh",
    price: 99,

    welcomemessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
 }

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);

// function one(){
//     let username="darshan"
//     console.log(this.username);
// }

// one()

// const two = function (){
//     let username="darshan"
//     console.log(this.username);
// }
// two()

const two = ()=>{
    let username="darshan"
    console.log(this);
}
// two()

// const result = (num1,num2)=>{
//     return num1 + num2
// }

// console.log(result(2,3))

const result = (num1,num2)=>  num1 + num2 // implict return
const result1 = (num1,num2)=>  (num1 + num2) // implict return

// console.log(result(2,3))
// console.log(result1(2,3))

// how to call object in arrow function

const myobj = () => ({username:"suresh"})

console.log(myobj());