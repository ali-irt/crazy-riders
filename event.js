// Import the 'events' module
const EventEmitter = require('events');

// Create a new EventEmitter instance
const myEmitter = new EventEmitter();

// Define a listener function for the 'greet' event 
// => mean Arrow function

//const greetListener = () => 
const greetListener = function greeting()
{
     console.log('Hello, world!... In response to greet-event ');
};

// Register the listener function for the 'greet' event
myEmitter.on('greet', greetListener);
myEmitter.on('greet',greetListener)// Emit the 'greet' event

myEmitter.emit('greet');
myEmitter.emit('greet');
myEmitter.emit('greet');
myEmitter.emit('hi there')
// Remove the listener function for the 'greet' event
myEmitter.off('greet', greetListener);

