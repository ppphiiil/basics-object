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



//********************************************
//*****************  EXERCISES 4
console.log(`\n\nEXERCISE 4`);

// # Props count
// ​
// Using JavaScript, find the object that has highest number of properties. You need to count only the top level properties.
// Print to the console the object with the highest number of properties and its number of properties.
// ​


const obj1 = {
    name: 'Jane',
    age: 21,
    isEnrolled: true,
    courses: [],
    address: {
        street: 'Boddinstr',
        houseNumber: 21,
        city: 'Berlin'
    },
    grades: [],

};
const obj2 = {
    price: 1222,
    categories: [{
        id: 32,
        slug: 'clothing',
        label: 'Apparel',
    }],
};
const obj3 = {
    title: '',
    author: '',
    createdAt: '',
    dateLastUpdated: '',
    isApproved: false,
};
const obj4 = {
    albumId: 1,
    id: 26,
    title: "asperiores nobis voluptate qui",
    url: "https://via.placeholder.com/600/474645",
    thumbnailUrl: "https://via.placeholder.com/150/474645",
};
const obj5 = {
    postId: 1,
    id: 1,
    userId: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    title: "quidem molestiae enim",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
};

let array = [obj1, obj2, obj3, obj4, obj5];
let counter = 0;

let biggestKeyCount = 0;
let biggestObject = {};



for (let object of array) { //! take the first object of the array
    counter = 0;
    for (let props in object) { //! take the first key of the object

        if (object.hasOwnProperty(props)) { //! if there is a key, conter +1
            counter++;
        }
    }
    if (biggestKeyCount < counter) { //! save the object with the highest number of keys
        biggestKeyCount = counter;
        biggestObject = object; //! save the biggest object

    }
    console.log("counter:" + counter);
}
console.log(`This is the biggest Object and it has ${counter} keys`);
console.log(biggestObject);

