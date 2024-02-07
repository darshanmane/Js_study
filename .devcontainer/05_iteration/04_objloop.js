const myobj = {
    js : "Javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

// for (const key in myobj) {
//    console.log(`${key} shortcut is for ${(myobj[key])}`);
// }

const programming = ["js", "cpp", "py", "java", "rb"]
for (const key in programming) {
    console.log(programming[key]);
}