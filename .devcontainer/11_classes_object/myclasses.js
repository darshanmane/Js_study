// //ES6

// class user{
//     constructor(username, email, password){
//         this.username=username;
//         this.email=email;
//         this.password=password;

//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changesusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const suresh = new user("Suresh","suresh@fb.com","123")
// console.log(suresh.encryptPassword());
// console.log(suresh.changesusername());

// behind the scence

function user(username, email, password) {
    this.username=username;
        this.email=email;
        this.password=password;
}

user.prototype.encryptPassword= function(){
    return `${this.password}abc`
}

user.prototype.changesusername = function (){
    return `${this.username.toUpperCase()}`
}

const suresh = new user("Suresh","suresh@fb.com","123")
console.log(suresh.encryptPassword());
console.log(suresh.changesusername());