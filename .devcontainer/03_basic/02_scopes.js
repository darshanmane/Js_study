// let a = 10       // this variable are Global scope
// const b = 20
var c = 30      

if(true)
{
    let a = 40       // this variable are block scope
    const b = 50
    var c = 60  

    // console.log("inner scope : ", a)
    // console.log("inner scope : ", b)
    // console.log("inner scope : ", c)
}

// console.log("Global scope : ", a)
    // console.log("Global scope : ", b)
    // console.log("Global scope : ", c)  // --- output will print the last value for the var variable

    function one(){
            const username= "Suresh"

            function two(){
                const website = "youtube"
                console.log(username);
            }
            //console.log(website);

            two()
    }
    // one()
    if (true) {
        const username = "suresh"
        if (username==="suresh") {
            const website= " youtube"
            //console.log(username + website);
            
        }
        // console.log(website);
    }
    // console.log(username);


    //*************** intersting ********/
    console.log(addone(5));   // this is function we can acces anywhere 
    function addone(num1){
        return num1 + 1
    }


    
    const addtwo = function(num2){
        return num2 + 2
    }
    console.log(addtwo(5)); // this function we cannot access the function before the definition
    
