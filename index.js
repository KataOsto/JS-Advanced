// ES6

// 1 - ES6 Classes

// function Circle(radius) {
//     this.radius = radius;           // radius = property

//     this.draw = function() {        // draw = method
//         console.log('draw');
//     }
// }

// Calssses are constructor Functions


// class Circle {
// //Body of te class, we can define proprtys and methods
// // One spaecial method we have is called constructor to initialize objects
//     constructor(radius) {           //radius parameter
//         this.radius = radius;       // radius property

//     }

//     draw() {                        // method 
//         console.log('draw');
//     }
// }

// const c = new Circle();


// 2 - Hoisting

// Hoisting (windowanie) mówi o tym jak działa JavaScript. 
// W języku JavaScript podczas wykonywania kodu wszystkie deklaracje 
// zmiennych oraz funkcji „przenoszone są na początek”, co oznacza że 
// nieważna jest kolejność deklaracji i wywołania. Najpierw możemy wywołać 
// funkcję, a dopiero potem ją zdefiniować.


// Function Declaration
function sayHallo() {}

// fUnction Expression
const sayGoodbay = function() {};

// Class nie widnujemy 
// Class Declaration
class Circle {
}

// Class Expression
const Square = class {
};