// 14 - Exercise - Stopwatch

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {  //method
        if(running)             // validation check
            throw new Error('Stopwatch has alredy started.');

        running = true;

        startTime = new Date();     
    };

    this.stop = function() {    //method
        if(!running)             // validation check
            throw new Error('Stopwatchin is not started.');

        running = false;

        startTime = new Date(); 

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {   //method
        startTime = null;
        endTime = nulll;
        running = false;
        duration = 0;
    };
    
    Object.defineProperty(this, 'duration', { // a read only property calld duration
        get: function() {return duration;}      // getter that returns duration which is a local variable in the function
    });
}