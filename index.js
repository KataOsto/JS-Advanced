// ES6 Tooling

// 1 - Modules

//Modularity - The term Modularity refers to the degree to which a system's 
            // components may be separated and recombined,

// Benefits of Modulariy- Maintainability, Reuse, Abstract

// const _radius = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }

//     draw() {
//         console.log('Circle with radius' + _radius.get(this));
//     }
// }

// const c = new Circle(10);
// console.log_(radius.get(c));  // It will return the value of the radius property
// c.draw();


// ES5 - nie posiadał modułów, używano zatem:
// AMD - Browser aplication
//CommonJS - Node.js
// UMD - Browser aplication and Node.js

// ES6 Modules



// 2 - CommonJS Modules

// Thing that are highly related should go together

// Cohesion - Spójnosć / W programowaniu komputerowym spójność odnosi się do stopnia, 
// w jakim elementy wewnątrz modułu są ze sobą powiązane

const Circle = require('./circle');

const c = new Circle(10);
c.draw();

