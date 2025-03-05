// Prototypical Inheritance

// 1 - Creating Your Own Prototypical Inheritance

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