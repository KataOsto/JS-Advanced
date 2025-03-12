// ES6

// 1 - ES6 Classes

// function Circle(radius) {
//     this.radius = radius;           // radius = property

//     this.draw = function() {        // draw = method
//         console.log('draw');
//     }
// }

// Calssses are constructor Functions


class Circle {
//Body of te class, we can define proprtys and methods
// One spaecial method we have is called constructor to initialize objects
    constructor(radius) {           //radius parameter
        this.radius = radius;       // radius property
        
    }

    draw() {                        // method 
        console.log('draw');
    }
}

const c = new Circle();