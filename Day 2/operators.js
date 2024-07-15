"use strict";
// Arithmetic operations
function addTwoNum(a, b) {
  return a + b;
}
console.log(addTwoNum(2, 1)); //3

function subTwoNum(a, b) {
  return a - b;
}
console.log(subTwoNum(3, 1)); //2

function mulTwoNum(a, b) {
  return a * b;
}

console.log(mulTwoNum(2, 1)); //2

const divide = (a, b) => a / b;
console.log(divide(4, 2)); //2

const remainder = (a, b) => a % b;
console.log(remainder(3, 2)); //1

// BREAK : Assignment operators
const ass1 = (a) => (a += 2);
console.log(ass1(1)); //3

const assSub = (a) => (a -= 2);
console.log(assSub(3)); //1

// BREAK: Comparision Operators
const greateOrLess = (a, b) => {
  let msg;
  if (a > b) {
    msg = `${a} is greater than ${b}`;
  } else if (a < b) {
    msg = `${b} is greater than ${a}`;
  }
  return msg;
};
console.log(greateOrLess(2, 3)); //3 is greater than 2
console.log(greateOrLess(3, 2)); //3 is greater than 2

const greaterOrEqualTo = (a, b) =>
  a <= b
    ? `${a} is less or equal to ${b}`
    : `${a} isn't less or equal too ${b}`;
console.log(greaterOrEqualTo(2, 2)); //2 is less or equal to 2
console.log(greaterOrEqualTo(2, 3)); //2 is less or equal to 2
console.log(greaterOrEqualTo(3, 2)); //3 isn't less or equal too 2

const lessOrEqualTo = (a, b) =>
  a >= b
    ? `${a} is greater or equal to ${b}`
    : `${a} isn't greater or equal too ${b}`;
console.log(lessOrEqualTo(2, 2)); //2 is greater or equal to 2
console.log(lessOrEqualTo(2, 3)); //2 isn't greater or equal to 2
console.log(lessOrEqualTo(3, 2)); //3 is greater or equal too 2

const equalOp = (a, b) => {
  let msg;
  if (a === b) {
    msg = `${a}-${typeof a} type & ${b}-${typeof b} type has same value and is of same data type `;
  } else if (a == b) {
    msg = `${a}-${typeof a} type & ${b}-${typeof b} type has same value and isn't of same data type `;
  } else {
    msg = `${a} isn't equal to ${b}`;
  }
  return msg;
};
console.log(equalOp(2, 2)); //2-number type & 2-number type has same value and is of same data type
console.log(equalOp(2, "2")); //2-number type & 2-string type has same value and isn't of same data type

// BREAK: logical Operators

const andOp = ({ name, age, hasParentFromThisCountry }) => {
  return age >= 18 && hasParentFromThisCountry
    ? `${name}, you are eligible to get citizenship from this country.`
    : `I apologize ${name}, but I cannot provide your citizenship details without a valid legal reason`;
};
let obj = {
  name: "jhon doe",
  age: 18,
  hasParentFromThisCountry: true,
};
console.log(andOp(obj)); //jhon doe, you are eligible to get citizenship from this country.

const orOp = ({ name, age, isStd }) => {
  return age <= 12 || isStd
    ? `${name}, is eligible for discount`
    : `${name}, isn't eligible for discount`;
};
let objOr = {
  name: "Ram",
  age: 4,
  isStd: false,
};
console.log(orOp(objOr)); //Ram, is eligible for discount

const notOp = (hasAccount) =>
  !hasAccount
    ? "please create an account to use this feature"
    : "Please wait, you're logged in";

console.log(notOp(true)); //Please wait, you're logged in

// Ternary Operator
const checkNumSign = (num) =>
  num > 0
    ? `${num} is postive number`
    : num < 0
    ? `${num} is a negative number`
    : `${num} is a Zero`;
console.log(checkNumSign(0)); //0 is a Zero
