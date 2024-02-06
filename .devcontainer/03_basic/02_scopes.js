// let a = 10       // this variable are Global scope
// const b = 20
var c = 30      

if(true)
{
    let a = 40       // this variable are block scope
    const b = 50
    var c = 60  

    console.log("inner scope : ", a)
    console.log("inner scope : ", b)
    console.log("inner scope : ", c)
}

// console.log("Global scope : ", a)
    // console.log("Global scope : ", b)
    console.log("Global scope : ", c)  // --- output will print the last value for the var 