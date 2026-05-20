//if
const isuserloggedin = true
const temp = 41
if (temp < 50) {
    console.log("less than 50")
}
else {
    console.log("greater than 50")
}
console.log("execute")
//<,>,<=,>=,==,!=,===,!==
//block scope
//const score = 200
//if (score > 100) {
// const power = "fly"
//console.log(`user power:${power}`);
//}
//console.log(`user power:${power}`);

const balance = 1000
//if(balance>500) console.log("test");

//nesting
// if(balance<500){
// console.log("less than")
// }
// else if(balance<760){
//     console.log("less than 760")
// }
// // else{
//     console.log("less than 1200")
//     }

// const userloggedin = true
// const debitcard = true
// const loggedinfromgoogle = false
// const loggedinfromemail = true
// if (userloggedin && debitcard) {
//     console.log("allow to buy course");
// }
// if (loggedinfromgoogle || loggedinfromemail) {
//     console.log("user logged in")
// }


//++++++++++++++++++++++++++++++++++++switch+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// switch(key){
//     case value:
//         break;
//         default:
//             break;
// }
// const month = 3
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     default:
//         console.log("default case match");
//         break;
// }
// //++++++++++++++++++++++++++++truthy and falsy value+++++++++++++++++++++++++++++++++++++++++++++++
// const useremail = "hitesh.ai"
// if (useremail) {
//     console.log("got user email");
// }
// else {
//     console.log("don't have user email");
// }

//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

// const useremail = []
// if (useremail.length === 0) {
//     console.log("array is empty");
// }
// const emptyobj = {}
// if (Object.keys(emptyobj).length === 0) {
//     console.log("object is empty");
// }
//false==0---output comes true
//false==''----output comes true
//0==''---output comes true
//Nullish coalescing operator (??):null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 15
//console.log(val1);

//++++++++++++++++++++++terniary operator++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//condition ? true: false
const iceprice = 100
iceprice >= 80 ? console.log("less than 80") : console.log("more than 80")



