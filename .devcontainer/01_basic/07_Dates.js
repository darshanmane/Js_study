// Dates

let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(typeof(mydate));
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getTime());

// let mycreatedate = new Date (2024, 1, 5)
// let mycreatedate = new Date (2024, 1, 5, 5, 3)
// let mycreatedate = new Date ("2024-01-14")
let mycreatedate = new Date ("02-05-2024")
// console.log(mycreatedate.toLocaleString());

let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(mycreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());

newdate.toLocaleString('Default',{
    weekday: "long",
})

