//for
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        //   console.log("5 is best number");
    }
    // console.log(element);

}
for (let i = 0; i <= 10; i++) {
    //  console.log(`outer loop value:${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j}and inner loop $ {i}`);
        //  console.log(i + '*' + j + '=' + i * j);
    }


}
//let myarray = ["flash", "batman", "superman"]
//console.log(myarray.length);
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     //console.log(element);

// }

//break and continue
// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break;
//     }
//     console.log("value of index is:", index)


// }
// for (let index = 1; index <= 10; index++) {

//     if (index == 5) {
//         console.log(`detected 5`);
//         continue;
//     }
//     console.log("value of index is:", index)


// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++while+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let index = 0
// while (index <= 10) {
//     //console.log(`value of index is${index}`);
//     index = index + 2;
// }
// let myarray = ["flash", "batman", "superman"]
// let arr = 0
// while (arr < myarray.length) {
//     console.log(`value is ${myarray[arr]}`);
//     arr = arr + 1
// }
//+++++++++++++++++++++++++++++++++++++++do while+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let score = 1
do {
    // console.log(`score is ${score}`);
    score++
} while (score <= 10);

//+++++++++++++++++++++++++++++++++high order+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//for of
//["","",""]
//[{},{},{}]
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}
const greetings = "hello world !"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`)
}
// maps++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america ")
map.set('Fr', "France")
//console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
//+++++++++++++++++++++++++forin+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myobject) {

    // console.log(key);
    // console.log(myobject[key]);
    // console.log(`${key} shortcut is for ${myobject[key]}`);


}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++foreach++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const coding = ["js", "ruby", "java", "python", "cpp"]
//callback function 
// coding.forEach( function(item){
//     console.log(item);
// })
// coding.forEach( (item) => {
//     console.log(item);
// })
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)
coding.forEach((item, index, arr) => {
    //console.log(item,index,arr);
})

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "cpp",
        languagefilename: "c++"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
]
mycoding.forEach((item) => {
    console.log(item.languagename);
})






