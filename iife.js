//Immediately Involved Function Expressions (IIFE)
//(function chai() {
// console.log(`DB CONNECTED`);
//})();
//()//where we write definition of function () // second one for execution
// ()()
// why we use iife--------IIFE is used to avoid global scope pollution .it creates a separate scope ,so variables and functions inside it do not affect the global scope...
(function aurcode() {// named IIFE
    console.log(`DB CONNECTED TWO`);
})();
((name) => {//simple IIFE
    console.log(`DB CONNECTED TWO $(name)`);
})(`hitesh`)
//when we want to write  two IIFE together so we put a semicolon at the end of first IIFE then start to write second one 

