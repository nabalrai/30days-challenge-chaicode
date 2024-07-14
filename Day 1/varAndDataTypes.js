"use strict";

// variable Declaration
var num = 12;
console.log(num);//12
let str = "hello world!";
console.log(str);//hello world!
let bol = true;
console.log(bol);//true

// Data Types
let obj = {
    name:"Amir Khan",
    occuption:"Actor",
}
console.table(obj)
let arr=[1,2,3]
console.table(arr);

console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(bol));
console.log(typeof(obj));
console.log(Array.isArray(arr));


// Ressigning varables
str = "bye"
console.log(str);//bye