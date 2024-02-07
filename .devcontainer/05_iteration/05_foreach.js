const coding = ["js", "cpp", "py", "java", "rb"]
// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (item)=> {
//     console.log(item);
// } )

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// } )

const mycoding = [
    {
        languageNaame : "javascript",
        langauagefilename : "js"
    },
    {
        languageNaame : "java",
        langauagefilename : "java"
    },
    {
        languageNaame : "python",
        langauagefilename : "py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.langauagefilename);
} )