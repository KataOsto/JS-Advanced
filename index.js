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

// // Function Declaration
// function sayHallo() {}

// // fUnction Expression
// const sayGoodbay = function() {};

// // Class nie widnujemy 
// // Class Declaration
// class Circle {
// }

// // Class Expression
// const Square = class {
// };



// 3 - Static Methods

// In Classical object oriented-languages we have two types of mwthods:

//Instance Method-  definiują zachowania, które są unikalne lub wyspecjalizowane 
                    // dla każdej klasy . Każdy obiekt utworzony z klasy będzie zawierał kopię tych 
                    // metod. Metody instancji zależą od danych przechowywanych w indywidualnym 
                    // obiekcie.

//Static Method - metoda, która ma słowo kluczowe static dodane do siebie . Do takich metod nie 
                    // można uzyskać dostępu poprzez obiekty instancjonowane, ale można uzyskać do 
                    // nich dostęp poprzez nazwę klasy

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
// //Instance Method
//     draw(){
//     }
// //Static Method
//     static parse(str){
//        const radius = JSON.parse(str).radius; //(JSON) to standardowy format tekstowy do reprezentowania ustrukturyzowanych danych opartych na składni obiektów JavaScript
//         return new Circle(radius);
//     }
// }


// const circle = Circle.parse('{"radius": 1}')
// console.log(circle);



// 4 - The This Keyword

// 'use strict';   //„Use strict” to dyrektywa w JavaScript, która włącza tryb ścisły, zwiększając jakość kodu i zapobiegając częstym błędom

// const Circle = function() {
//     this.draw = function() {console.log(this);}
// };

// const c = new Circle();
// // Method Call
// c.draw();

// const draw = c.draw;
// // Function Call
// draw();


// 5 - Private Members Using Symbols

// abstrakcja - ukrywanie częsci watości i metod

//Symbol - primitive called symbol
// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//     constructor(radius) {
//         this[_radius] = radius;  //_radius - private property
//     }
//     [_draw]() {

//     }
// }

// const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0]
// console.log(c[key]);


// 6 - Private Members Using WeakMaps


// WeakMap - Kiedykolwiek chcesz rozszerzyć obiekt, ale nie możesz, ponieważ jest on zapieczętowany - l
// ub pochodzi z zewnętrznego źródła - WeakMap może zostać zastosowany. WeakMap to mapa (słownik), w której klucze 
// są słabe - to znaczy, jeśli wszystkie odwołania do klucza zostaną utracone i nie ma już odwołań do wartości - 
// wartość może zostać poddana garbage collection

// const _radius =  new WeakMap();  //private 
// const _move = new WeakMap();

// class Circle {
//     constructor (radius) {
//         _radius.set(this, radius);

//         _move.set(this, () => {
//             console.log('move', this);
//         });
//     }

//     draw() {
//         _move.get(this)();

//         console.log('draw');
//     }
// }

// const c = new Circle(1);



// 7 - Getters and Setters

// const _radius = new WeakMap();

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }

// //Method
//     get radius() {
//         return _radius.get(this);
//     }
//     set radius(value) {
//         if (value <= 0) throw new Error('Inavalid radius') 
//             _radius.set(this, value);
//         }
// }

// const c = new Circle(1);


// 8 - Inheritance

// przekazywania cech z rodzica do dziecka, tak aby nowy fragment kodu mógł ponownie wykorzystać i rozbudować cechy istniejącego


class Shape {
    move() {
        console.log('move');
    }
}

// aby dziedziczyć properte Shape użwany extends
class Circle extends Shape {
    draw() {
        console.log('draw');
    }
}

const c = new Circle();