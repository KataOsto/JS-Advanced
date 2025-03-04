// Prototypes   

// 1 - Inheretance - dziedziczenie
// inheretance is one of core concepts of object-oriented programing rhat enables an 
//object to take on the properties an methods of another object.

//Exemple - 2 obiekty maja dziedziczyć tę samą mtodę która znajduje sie s np.shape (Nazwana jest Base/super/Parant))
//          obiekty które dziedziczą jej własności np.cicrle (Nazwana jest Derived/Sub/Child)

// We have to type of Inharatance - Classical and Prototypical


// 2 - Prototypes and Prototypical Inheratance
// Prototype is a parent of another object


// 3 - Multilevel Inharatance

// Multilevel Inheritance -  In multilevel inheritance, one class inherits the properties of another class, 
// and other classes inherit current class properties.

// Objects created by a given constructor will have the same prototype.


// 4 - Property Descriptors
/*
// Every object property has a set of invisible attributes containing 
// metadata associated with that property, called "property descriptors." 

//Define a new object
let person = {name: 'Mosh'};
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptors(objectBase, 'toString'); // it will return an object  call property descriptor

console.log(descriptor);
*/


// 5 - Constructor Prototypes
/*
//the constructor is a function that is used to create an object, while the prototype is an object that contains 
// properties and methods that are inherited by objects created from a constructor

Object.getPrototypeOf(myObj);

//myObj.__proto__ (parent of myObj)
//Constructor.prototype ()

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype

const circle = new Circle(1);
*/



// 6 - Prototype vs Instance Members
/*
// We have two kindes of properties and methods in JavaScript. 

function Circle(radius) {
    // Intance members
    this.radius = radius;
}
// Prototypy members
Circle.prototype.draw = function() {   
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}
*/


// 7 - Iterating Instance and Prototype Members
/*
// Iteration involves looping through the object's properties one by one.
function Circle(radius) {
    // Intance members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c1 = new Circle(1);

// Prototypy members
Circle.prototype.draw = function() {   
    console.log('draw');
}
// Rewturns instance members
console.log(Object.keys(c1));

// For in loop returns all members (instance and prototype)
for (let key in c1) console.log(key);
*/


// 8 - Avoid Extending the Built-in Objects

// JavaScript also has four built-in objects: Array, Date, Math, and String. 
// Each object has special-purpose properties and methods associated with it. 
// JavaScript also has constructors for Boolean and Number types.

// Don't modify objects you don't own!

