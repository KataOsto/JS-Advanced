// 10 - Exercise - Prototypical Inaharatance

// DEsign 2 objects:
// HtmlElenets and HtmlSelsctedElement(reperezents a drop list)
/*
//PARENT OBJECT
function HtmlElenets() {                //HtmlElement -item
    this.click = function() {           //method - click
        console.log('clicked');
    }
}

HtmlElenets.prototype.focus = function() {  //method - focus on the HtmlElemnt
    console.log('focued');
}

function HtmlSelsctedElement(items = []) {  //constructor element HtmlSelectedElement with an empty array item = []
    this.items = items;

    this.addItem = function(){          // method addItem
        this.items.push(item);          // push - we push an item in to the array
    }

    this.removeItem = function(item) {                  // method removeItem
        this.item.slice(this.items.indexOf(item), 1)    // spalce - we dealte an item at the given position
    }
}

HtmlSelsctedElement.prototype = new HtmlElenets();  // We set the prototyp of the HtmlSelsctedElement to an instance of an HtmlElenets
HtmlSelsctedElement.prototype.constructor = HtmlSelsctedElement;
*/

// 12 - Exercise - Polymorphism

// to the last exercise implement a grander method 

//PARENT OBJECT
function HtmlElenets() {                //HtmlElement -item
    this.click = function() {           //method - click
        console.log('clicked');
    }
}

HtmlElenets.prototype.focus = function() {  //method - focus on the HtmlElemnt
    console.log('focued');
}

function HtmlSelsctedElement(items = []) {  //constructor element HtmlSelectedElement with an empty array item = []
    this.items = items;

    this.addItem = function(){          // method addItem
        this.items.push(item);          // push - we push an item in to the array
    }

    this.removeItem = function(item) {                  // method removeItem
        this.item.slice(this.items.indexOf(item), 1)    // spalce - we dealte an item at the given position
    }
}

function HtmlImageElement(src) {
    this.src = src;

    this.reander = function() {  // to pas an argument use ${x} what ever you put will be placed into the string at run time
        return `<img src="${this.src}" />`
    }
}


HtmlSelsctedElement.prototype = new HtmlElenets(); 
HtmlSelsctedElement.prototype.constructor = HtmlSelsctedElement;