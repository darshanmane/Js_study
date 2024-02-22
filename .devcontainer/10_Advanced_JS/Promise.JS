// const promiseone = new Promise(function(resolve, reject) {
//     // Do as asyn task
//     // Db calls, Cryptography, newtwork
//     setTimeout(function() {
//         console.log('Asyn task is complete');
//         resolve()
//     },1000)
    
// })

// promiseone.then(function () {
//     console.log('Promise consumed');
// })

// new Promise(function (resolve,reject) {
//      setTimeout(function() {
//         console.log('Asyn2 task is complete');
//         resolve()
//     },1000)
// }).then(function() {
//     console.log('Promise2 consumed');
// })

// const promisethree = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         console.log('Asyn2 task is complete');
//         resolve({username:"Darshan",email:"darshan.mane@example.com"})
//     },1000)
// })

// promisethree.then(function(user) {
//     console.log(user)
// })

// const promisefour = new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username:"Darshan",password:"123"})
//         } else {
//             reject('error: Something went wrong')
//         }
//     }, 1000);
    
// })

// promisefour.then((user) => {
//     console.log(user);
//     return (user.username);
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(function () {
//     console.log("Promise is either resolved or rejected");
// })


const promisefive = new Promise(function (resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Java",password:"123"})
        } else {
            reject('error: JS went wrong')
        }
    }, 1000);
})

async function comsumefive() {
    try {
        const resp = await promisefive
    console.log(resp);
    } catch (error) {
        console.log(error);
    }
}
comsumefive()