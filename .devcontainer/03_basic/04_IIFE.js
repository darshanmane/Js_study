// Immediately Invoked Function expressions (IIFE)

(function one(){
    // named IIFE
    console.log('DB Connection');
})();

( (name)=>{
    // Unnamed IIFE or Parameter IIFE
    console.log(`DB Connection two ${name}`);
} )('Suresh')