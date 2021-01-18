//********************************************
//*****************  EXERCISES 1
console.log(`\n\nEXERCISE 1`);
// # Object like array
// ​
// Use object literal syntax (e.g., `{ key: value, ... }` notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:
// ​
// ```js
let myArray = {
    "length": 3,
    "0": "val",
    "1": "val",
    "2": "val"
};

for (let i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i]);
}


//********************************************
//*****************  EXERCISES 2
console.log(`\n\nEXERCISE 2`);

// # Empty object
// ​
// Using JavaScript, check if the object is empty and print the result to the console.
// ​
// {} ➞ true
// ​
// { a: 1 } ➞ false


let object1 = {};
let object2 = { 1: 1, 2: 2 };
let count = 0;
let testObject = object2;

console.log(testObject);
console.log(`Object: ${testObject}`);
for (i in testObject) {
    if (testObject.hasOwnProperty(i)) {
        count++;
    }
}
console.log(`objectLength: ${count}`);
if (count == 0) {
    console.log(`true: its empty`);
} else {
    console.log(`false: its not empty`);
}
