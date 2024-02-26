// const user = {
// username: "Suresh",
// logincount: 8,
// signedin: true,

// getuserdetails: function(){
//     // console.log("Got user details");
//     // console.log(`user name is ${this.username}`);
//     // console.log(this);
// }
// }

// const user2 = {
//     username: "Suresh",
//     logincount: 8,
//     signedin: true,
    
//     getuserdetails: function(){
//         // console.log("Got user details");
//         // console.log(`user name is ${this.username}`);
//         // console.log(this);
//     }
//     }
    

// console.log(user.username);
// console.log(user.getuserdetails());


function user (username, logincount, signedIn){
    this.username= username;
    this.logincount = logincount;
    this.signedin = signedIn

    return this
}

// function add (num1,num2){
//  this.num1 = num1;
//  this.num2 = num2
//  this.num3 = this.num1 + this.num2
//     return this
// }

// const one =  add(1,2)
// const two =  add(3,4)
const userone = new user("suresh",12,true)
const usertwo = new user("mahesh",2,false)

console.log(userone); 