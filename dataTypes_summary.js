// Primitive
/* 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint */


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive):
/* Array, Objects, Functions */

const heros = ["Shaktiman", "Nagraj", "Doga"];
let myObj = {
    name: "Abhyanshu",
    age: 22
}

const myFunction = function(){
    console.log("hello World");
}

