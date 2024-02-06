// const googleuser = new Object()  //--> singleton object
const googleuser = {}// c // --> non singleton object
googleuser.id = "123"
googleuser.name = "Suresh"
googleuser.isLoggedIn = false
// console.log(googleuser); 


const reguluser = {
    email : "suresh@gmail.com",
    fullname:{
        username:{
            userfirstname: "suresh",
            userlastname: "Jadhav"

        }
    }
}

// console.log(reguluser.fullname.username.userlastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
const obj5 = {7: "g", 8: "h"}
const obj6 = {9: "i", 10: "j"}

// const obj3 ={obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2, obj4, obj5, obj6)
const obj3 = {...obj1, ...obj2, ...obj4, ...obj5, ...obj6}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"suresh@gmail.com"
    },
    {
        id:2,
        email:"darshan@gmail.com"
    },
    {
        id:3,
        email:"shreepad@gmail.com"
    }
]
// console.log(users[2].email);
console.log(googleuser);

console.log(Object.keys(googleuser));
console.log(Object.values(googleuser));
console.log(Object.entries(googleuser));
console.log(googleuser.hasOwnProperty('ids'));

