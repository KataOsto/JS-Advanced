// OBJECTS

// 1 - Introduction

// 2 - Objects Literals - Literały obiektów są jedną z najczęściej używanych struktur 
                            // danych w JavaScript . Są używane do przechowywania zbiorów danych i mogą być 
                            // używane do reprezentowania złożonych struktur danych, takich jak obiekty, tablice, 
                            // funkcje, a nawet wyrażenia regularne.

// {}  - object literal syntax - wyrażenie literału obiektów


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
 
 