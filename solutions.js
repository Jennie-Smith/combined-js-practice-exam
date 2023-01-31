"use strict";

// /**
//  * Write your solutions here
//  *
//  * **Note**: While normally it is good practice to wrap your javascript in an
//  * immediately invoked function expression (iife), you should _not_ do that
//  * here. If you do, the automated tests will not be able to see your functions.
//  */

function isBoolean(x) {
    if (typeof x === "boolean"){
        return true
    } else {
        return false
    }
}

// console.log(isBoolean(43))

function hasBoolean(array){
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "boolean"){
            console.log(array)
            // console.log(true)
            return true
        } else {
            console.log(false)
        }
    }
}

// console.log(hasBoolean([1, 2, true, 4]))

const people = [ {
    name: "Bob",
    age: 42
}, {
    name: "Sue",
    age: 27
}, {
    name: "Lou",
    age: 33
}, {
    name: "Zanzibar",
    age: 18
}, {
    name: "Gladys",
    age: 39
}
];

function minAge(array){
    let min = Math.min(...people.map(age => age.age));
    console.log("min: " + min);
    return min
}
minAge()

function longestName(){
    const longestName = people.reduce(function(longest, person){
        if (person.name.length > longest.length) {
            return person.name
        } else {
            return longest
        }
    }, "")
    console.log("Longest Name: " + longestName);
}
longestName()

function createPerson(name, age){
    const object = {
        name: name,
        age: age,
    }
    console.log(object)
    return object
}

createPerson("Jimbob", 22)
