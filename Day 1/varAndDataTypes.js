"use strict";

// variable Declaration
var num = 12;
console.log(num); //12
let str = "hello world!";
console.log(str); //hello world!
let bol = true;
console.log(bol); //true

// Data Types
let obj = {
  name: "Amir Khan",
  occuption: "Actor",
};
console.table(obj);
/* output:
┌───────────┬─────────────┐
│ (index)   │ Values      │
├───────────┼─────────────┤
│ name      │ 'Amir Khan' │
│ occuption │ 'Actor'     │
└───────────┴─────────────┘
*/
let arr = [1, 2, 3];
console.table(arr);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 1      │
│ 1       │ 2      │
│ 2       │ 3      │
└─────────┴────────┘
*/
// types of every varible:
console.log(typeof num); //number
console.log(typeof str); //strng
console.log(typeof bol); //boolean
console.log(typeof obj); //true
console.log(Array.isArray(arr)); //true

// Ressigning varables
str = "bye";
console.log(str); //bye
