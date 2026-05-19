//let a = 10
//const b = 20
//var c = 30
//{ }//this is scope
//whatever written inside if is block scope and outside if is called global scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);
//console.log(b);
//console.log(c);

//l-22//
function one() {
    const username = "hitesh"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    //we can't access website here because website is inside function two and it's scope is already finish there
    // console.log(website);//error comes in output
    two()//execute two
}
//one()//execute one 
// basically small functions can access to large functions but large functions can't access in small functions
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "youtube"
        //console.log(username + website);
    }
    //  console.log(website); //error comes because website is declared inside the second if block
}
//console.log(username); -----//it also give error because username is declared with const inside the first if block.so username has block scope..it only exists between these{}braces
//++++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// this is function
function addone(num) {
    return num + 1
}
console.log(addone(5))
//this is also function but sometimes called expression
const addTwo = function (num) {
    return num + 2
}
addTwo(5)