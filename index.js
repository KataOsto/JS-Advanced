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
/*
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
*/


// 5 - Method Overriding 
/*
// Method overriding is a concept tied with inheritance, when a child class inherits some 
// method from the parent class but redefines it on its on context.

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {

}

extend(Circle,Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
}

const c = new Circle();
*/


// 6 - Polymorphism
/*
// Polymorphic functions in JavaScript are functions that can accept arguments of different types and
//  adapt their behavior based on the actual types of the arguments. This flexibility allows the same function
//  to work with various data types, promoting code reusability and versatility.

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle() {

}

extend(Circle,Shape);

Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
}

function Square() {
}

extend(Square,Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

const c = new Circle();
*/

// 7 - When to Use Inheritance  - Favor Composision over Inheritance

//Inheritance is a good choice when:
// Your inheritance hierarchy represents an is-a relationship and not a has-a relationship.
// You can reuse code from the base classes.
// You need to apply the same class and methods to different data types.
// You want to make global changes to derived classes by changing a base class.


// 8 - Mixins
/*
// A mixin is a class whose methods are added to, or mixed in, with another class.


function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {   //we define one future as an object.
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swim');
    }
};

function Person() {
}

mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish() {
}

mixin(Goldfish.prototype, canEat, canSwim);

const Goldfish = new Goldfish();
console.log(goldfish); 
*/


// 9 - Cheat Sheet - 