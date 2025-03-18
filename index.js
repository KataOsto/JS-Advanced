// 11 - Exercise

// Implemant a stuck using ES6 slasses.

// Stuck has atwo essential operations:
// PUSH - for adding an object in the box
// POP - to remove the object on the tip of this box

// Unlike arrays we cannot access objects in the stack using their index
// but we can always rmove the object on top of the stach by calling the pop method.



// 12 - Solution

const _items = new WeakMap();

    class Stuck {
        constructor() {
        _items.set(this, []);
        }
    push(obj) {
        _items.get(this).push(obj);
    }
    
    pop() {
        const items = _items.get(this);
 
        if (items.length === 0)
            throw new Error('Stack is empty.');
    
        return items.pop();
    }

    peek() {
        const items = _items.get(this);

        if (items.length === 0 )
            throw new Error('Stack is empty.');

        return items[items.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }
}