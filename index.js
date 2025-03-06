// Prototypical Inheritance

// 1 - Creating Your Own Prototypical Inheritance
/*
// Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object
//  to share and utilize the properties of a parent class using a child class.

function Shape() {
}

Shape.prototype.duplicated = function() {
    console.log('duplicated');
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const x = new Circle(1);
*/


// 2 - Reseting the Constructor
/*
// When you reset the prototype, as a best practice, make sure to reset the constructor as well.

function Shape() {
}

Shape.prototype.duplicated = function() {
    console.log('duplicated');
}

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const x = new Circle(1);
*/


// 3 - Calling the Super Constructor
/*
// The super keyword is used to call the constructor of its parent class 
// to access the parent's properties and methods.

function Shape(color) { // + new paramiter 'Color'
    this.color = color;
}

Shape.prototype.duplicated = function() {
    console.log('duplicated');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const x = new Circle(1, red);
*/


// 4 - Intermediat Functions Inheritance

function Shape(color) { 
    this.color = color;
}

Shape.prototype.duplicated = function() {
    console.log('duplicated');
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const x = new Circle(1, 'red');