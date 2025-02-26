// OBJECTS

// 1 - Introduction

// 2 - Objects Literals - Literały obiektów są jedną z najczęściej używanych struktur 
                            // danych w JavaScript . Są używane do przechowywania zbiorów danych i mogą być 
                            // używane do reprezentowania złożonych struktur danych, takich jak obiekty, tablice, 
                            // funkcje, a nawet wyrażenia regularne.

                            
// {}  - object literal syntax - wyrażenie literału obiektów
/*
 const circle = {
    radius: 1,                      // radius - propertis - właściwości
    location: {                     // location - propertis - właściwości
        x: 1,
        y: 1
    },
    draw: function() {              // draw - jest metodą
        console.log('draw');
    }
 };    

 circle.draw();
 */


// 3 - Factoris
// If an objesct has one or more methods we say that object has  'BEHAVIOR'
/*
// Factory Function
function createCircle(radius) {
    return {
       radius, 
       draw: function() {
        console.log('draw');
       }                    
    };    
}

const circle = createCircle(1);
circle.draw();
*/


// 4 - Constructors
/*
// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1)
*/


// 5 - Constructor Property - właściwość konstruktora

// Every object in JavaScript has a property called "Constructor" 
// and references the function that was used to construct or create an object.
// 
// // Konstruktor to specjalna funkcja, która tworzy i inicjuje obiekt instancji klasy .
// W JavaScript konstruktor jest wywoływany, gdy obiekt jest tworzony za pomocą słowa kluczowego new. 
// Celem konstruktora jest utworzenie nowego obiektu i ustawienie wartości dla wszelkich istniejących właściwości obiektu.
/*
new String(); // '', "", ``
new Boolean(); // true,false
new Number(); // 1, 2, 3, ...
*/


// 6 - Functions are Objects
/*
// In Java sctipt functions are objects
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
Circle.call({}, 1)   // Call method
Circle.apply({}, [1, 2, 3]);       // Apply method

const another = new Circle(1);
*/


// 7 - Value vs Reference Types

// Value Types - Calld primitives
// Numbers, String, Boolean, Symbol, undefined, null

// Reference Types - 
// Object, Function, Array
/*
//Example 1
// Defining 2 primitives
let x = 10;
let y = x;

// Changing the value x to -> 20
x = 20;

//Example 2
// When we use an object, that object is not stord in this variable
// That object is tord somewhere else in the memory, and the adress of that memory location is stord inside that memory variable
let x = {value: 10};
let y = x;

x.value = 20;
*/


// 8 - Adding or Removing Properties
/*
function Circle(radius) {
    this.radius = radius:
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// user.token - add token property
circle.location = {x: 1};   // adding a new property by the dot notation "."
//or we can use
circle['location'] = {x: 1};  // adding a new property by the brackett notation "[]", god to use when we want to dynamiclly access a property name.


delete circle.location;  // Removing propertis by the dot notation "."
//or we can use
delete circle['location'];  // Removing propertis by the brackett notation "[]"
*/

// 9 - Enumerating Properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle)  {   //Using the for in loop, the key will hold the value of one key in this object
    if (typeof circle[key] !== 'function')    // If we want to access ony the properties and noot the method?
    console.log(key, circle[key]);  //We can use the brackett notation "[]" accesss a member
}

