// let myname = "Suresh     ";
// console.log(myname.truelength());

let heros = ["Thor","Spiderman"]

let power = {
    "Thor":"Hammer",
    "Spiderman":"sliding",
    getspiderpower:function () {
        console.log(`spider man power is ${this.Spiderman}`);
    }
}

Object.prototype.suresh = function () {
    console.log("Suresh is present in all");
    
}

Array.prototype.hey = function () {
    console.log("hello world");
}

// heros.suresh();
// power.suresh();
// heros.hey();
// power.hey();


// Inhertitance
const user={
    name : "Suresh",
    email: "Suresh@gmail.com"
}
const teacher = {
    Makevideo : true
}


const teachingsupport = {
    isAvaible : true
}


const TASupoort = {
    makeassigment:"JS",
    fulltime : true,
    __proto__:teachingsupport
}

teacher.__proto__=user

//modern syntax

Object.setPrototypeOf(teachingsupport,teacher)

let anotherusername = "Mahesh      "
String.prototype.truelength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
    
}
anotherusername.truelength()