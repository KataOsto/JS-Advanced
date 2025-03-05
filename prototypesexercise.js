// 10 - Exercise 

// Move the methoda start, stop and reset to prototype of the stopwatch!

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', { // a read only property called duration
        get: function() {return duration;}      // getter that returns duration which is a local variable in the function
    });

    Object.defineProperty(this, 'startTime', { // a read only property called startTime
        get: function() {return startTime;}      // getter that returns startTime which is a local variable in the function
    });
    Object.defineProperty(this, 'endTime', { // a read only property called endTime
        get: function() {return endTime;}      // getter that returns endTime which is a local variable in the function
    });
    Object.defineProperty(this, 'running', { // a read only property called running
        get: function() {return running;}      // getter that returns running which is a local variable in the function
    });
};

Stopwatch.prototype.start = function() {  //method
    if(this.running)             // validation check
        throw new Error('Stopwatch has alredy started.');

    this.running = true;

    this.startTime = new Date();     
};

Stopwatch.prototype.stop = function() {    //method
    if(!this.running)             // validation check
        throw new Error('Stopwatchin is not started.');

    this.running = false;

    this.startTime = new Date(); 

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
};

Stopwatch.prototype.reset = function() {   //method
    this.startTime = null;
    this.endTime = nulll;
    this.running = false;
    duration = 0;
};


// Premature optimization is the root of all evils.