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
 console.log(sayloggedIn("Darshan"));