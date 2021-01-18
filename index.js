//********************************************
//*****************  EXERCISES 1
console.log(`\n\nEXERCISE 1`);
// # Object like array
// Use object literal syntax (e.g., `{ key: value, ... }` notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

let myArray = {
    "length": 3,
    0: "val",
    1: "val",
    2: "val"
};

for (let i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i]);
}



//********************************************
//*****************  EXERCISES 2
console.log(`\n\nEXERCISE 2`);

// # Empty object
// Using JavaScript, check if the object is empty and print the result to the console.
// {} ➞ true
// { a: 1 } ➞ false


let object1 = {};
let object2 = { 1: 1, 2: 2 };
let count = 0;
let testObject = object2;

console.log(testObject);
console.log(`Object: ${testObject}`);

//! if there is an element counter+1
for (i in testObject) {
    if (testObject.hasOwnProperty(i)) {
        count++;
    }
}
console.log(`objectLength: ${count}`);

//! if the counter is 0, than its empty
(count == 0) ? console.log(`true: its empty`) : console.log(`false: its not empty`);




//********************************************
//*****************  EXERCISES 3
console.log(`\n\nEXERCISE 3`);

// # Object values and keys
// ​
// - collect all the values of an object in an array
// - collect all the keys of an object in an array
// - print both collections to the console
// ​
// ## Sample object
// ​
let testObject2 = {
    id: 15,
    firstName: 'Liana',
    lastName: 'Gleason',
    courses: ['6.945', '6.814', '1.012', '6.813', '2.159J', '15.S50'],
};


//* with build in Methods
// let arrayWithValues = Object.values(testObject2);
// let arrayWithKeys = Object.keys(testObject2);
// 
// console.log(arrayWithValues);
// console.log(arrayWithKeys);

// let size = Object.keys(testObject2).length;
// console.log(`the length is: ${size}`);

//* without build in Methods

let size = 0;
let arrayWithValues = [];
let arrayWithKeys = [];


for (let i in testObject2) { //! interate through the properties
    arrayWithKeys.push(i); //! returns the keys of the onject
    arrayWithValues.push(testObject2[i]); //! returns the content of an object
}

console.log(arrayWithValues);
console.log(arrayWithKeys);
