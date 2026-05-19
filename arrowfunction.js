//this---(keyword) it tells about current context
const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function () {
        console.log(`${this.username},welcome to website`);
        // console.log(this);
    }

}
//user.welcomemessage()
//user.username = "sam"
//user.welcomemessage()
//console.log(this);//output comes {} we are in node environment
//inside the browser object is global object

//function chai() {
// console.log(this);
// let username = "hitesh"
//console.log(this.username);  //undefined
//}
//chai()
//++++++++++++++++++++++++++++++++++++++++arrow function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const chai = () => {
    let username = "hitesh"
    console.log(this);
}
chai()

//const addtwo = (num1, num2) => {
//  return num1 + num2

//}
//console.log(addtwo(3, 4))


//implicit return parenthisis{} are not used
//const addtwo = (num1, num2) => num1 + num2
//const addtwo = (num1, num2) => (num1 + num2)

//if we want return object ----------------------
//const addtwo = (num1, num2) => { username: "hitesh" } //undefined output comes
const addtwo = (num1, num2) => ({ username: "hitesh" })//username:hitesh
console.log(addtwo(3, 4))
//+++++++++++++if we use curly braisis then we have to use return byt if we use () then we not need return

//explicit return when we use return





