// Define a function to simulate asynchronous behavior
console.log('Synchronous task completed! Message 1');

const simulateAsyncTask = () => {
    setTimeout(() => {
        console.log('Async task completed! Message 2');
    }, 3000);
};

// Call the function to simulate an asynchronous task
simulateAsyncTask();

// Log a message indicating the start of synchronous task
console.log('Synchronous task completed! Message 3');
