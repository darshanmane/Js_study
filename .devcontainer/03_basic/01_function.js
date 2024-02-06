function saymyname (){
    console.log('W');
    console.log('E');
    console.log('L');
    console.log('C');
    console.log('O');
    console.log('M');
    console.log('E');
}

//saymyname()

// function addtwonum(number1, number2){  // parameter
//     console.log(number1 + number2)
// }

function addtwonum(number1, number2){  // parameter
    // let result = number1 +  number2
    // return result
    return number1 +number2
}
 const result = addtwonum(4,2) // argument

//  console.log("result:",result);

 function sayloggedIn (username = "sam"){
    // if(username===undefined){
    //     console.log("Please enter the valid username");
    //     return ""
    // }
    if(!username){
        console.log("Please enter the valid username");
        return ""
    }
    return ` ${username} just looged in `
 }
//  console.log(sayloggedIn("Darshan"));

function calcartprice(...num1){  //-- rest operator
    return num1

}
// console.log(calcartprice(200, 300, 400, 600));

function calcartprice(val1, val2,...num1){ 
    return num1

}
// console.log(calcartprice(200, 300, 400, 600)); //  val1 = 200, val2= 300 and rest will be output [400,600]

// pass object to function

const user3 = {
    name: "suresh",
    age: 31,
    email: "suresh@gmail.com"

}

function myobject(anyobject){
    return `Username is ${anyobject.name}.his is age is ${anyobject.age} and email Id is ${anyobject.email}`
}

// console.log(myobject(user3));
console.log(myobject({
    name: "darshan",
    age: 30,
    email: "darshan@gmail.com"
}))

// pass array to function

const num = [200,500,600,800]

function secontpos(anyarr){
   return `Second index vaule is ${anyarr[1]}`
}

// console.log(secontpos(num));

console.log(secontpos([100,800,600,9000,70000]));