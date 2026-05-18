//definition of function
function saymyname() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//saymyname-represent()-execution
//saymyname()
function addtwonumbers(number1, number2) {
    console.log(number1 + number2);
}
//addtwonumbers()//NaN -output
//addtwonumbers(3, 4)//7
//addtwonumbers(3, "4")//34
//addtwonumbers(3, "a")//3a
//addtwonumbers(3, null) //3
//when we make function definition and whatever we take input that is called parameter ex-fun...(num1,num2)
//when we call the function and whatever values are passed by us that is called argument...
//const result = addtwonumbers(3, 5)
//console.log("result:", result);// output-result:undefined


function addtwonumbers(number1, number2) {
    // let result = number1 + number2
    // return result//after return result nothing prints
    return number1 + number2
}
//const result = addtwonumbers(3, 5)
//console.log("result:", result); //result:8

function loginusermessage(username) {
    return `${username}just logged in`
}
//loginusermessage("hitesh")//nothing prints
//console.log(loginusermessage("hitesh"))//here prints because we give command for print

//console.log(loginusermessage(""))//if we pass empty string then it prints just logged in
//but when we don't pass any value
//console.log(loginusermessage())//it comes undefined not null

//function calculatecartprice(...num1) {
// return num1
//}
//console.log(calculatecartprice(200))
//but assume when more values in my cart
//console.log(calculatecartprice(200, 400, 800))
//this problem solved by rest operator(...)or spread operator

function calculatecartprice(val1, val2, ...num1) {
    return num1
}
//console.log(calculatecartprice(200, 400, 800))

const user = {
    username: "hitesh",
    price: 199
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleobject(user)
handleobject({
    username: "sam",
    price: 399
})

const mynewarr = [200, 400, 500, 600]
function returnsecondvalue(getarray) {
    return getarray[1]
}
console.log(returnsecondvalue(mynewarr));



