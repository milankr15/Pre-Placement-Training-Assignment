# Q.1 What’s difference between Synchronous and Asynchronous?

Synchronous:
In synchronous communication or processing, tasks are executed in a sequential and blocking manner. When a task is initiated, the program waits for it to complete before moving on to the next task. In other words, synchronous operations are performed in a step-by-step fashion, where each step must finish before the next one begins.

Example: Consider a simple function that makes a network request to retrieve data from a server.

Asynchronous:
In asynchronous communication or processing, tasks are initiated and executed independently of each other, without waiting for the completion of previous tasks. The program doesn't block or pause while waiting for a task to finish. Instead, it can continue executing other tasks or return immediately, and the completion of the task is handled separately.

Example: Using the same network request scenario, in an asynchronous mode, the program would send the request and continue with the execution without waiting for the response. Once the response is received, a callback function or event is triggered to handle the result. 

# Q.2 What are Web Apis ?

Web APIs (Application Programming Interfaces) in JavaScript refer to a collection of functionalities and methods provided by web browsers. These APIs allow developers to interact with various aspects of the web platform, enabling them to create dynamic and interactive web applications. Below are some key Web APIs in JavaScript:

1.DOM API (Document Object Model): The DOM API enables developers to manipulate HTML and XML documents dynamically. It provides methods and properties to access, modify, and create elements, handle events, change styles, and update the content of web pages.

2.XMLHttpRequest and Fetch API: These APIs facilitate making HTTP requests from the browser. The XMLHttpRequest API (commonly used in older browsers) and the Fetch API (introduced in newer browsers) allow developers to retrieve data from servers asynchronously. This enables tasks such as fetching data from APIs and updating web content without needing to refresh the entire page.

3.Geolocation API: The Geolocation API allows web applications to retrieve the user's geographical location if the user grants permission. It provides methods to access latitude, longitude, altitude, and other location-related information. This API is commonly used in location-aware web applications, mapping services, and location-based features.

4.Web Storage API: The Web Storage API, consisting of localStorage and sessionStorage, provides a way to store data on the client-side. It allows developers to store key-value pairs persistently (localStorage) or temporarily (sessionStorage) within the user's browser. This is useful for caching data, storing user preferences, and maintaining session-specific information.

5.Canvas API: The Canvas API offers a powerful 2D drawing context that allows developers to generate and manipulate graphics, images, and animations dynamically. It provides methods for drawing shapes, paths, text, and images on a canvas element, enabling the creation of interactive charts, games, and visualizations.

6.Web Audio API: The Web Audio API enables audio processing and manipulation in web applications. It provides a set of JavaScript objects and methods for creating, controlling, and manipulating audio sources, applying audio effects, and managing audio playback.

# Q.3 Explain SetTimeOut and setInterval ?

setTimeout:
The setTimeout function is used to execute a specific block of code once after a designated delay. It takes two parameters: a callback function and a delay time in milliseconds. The callback function is the code that will be executed after the specified delay.

example that demonstrates the usage of setTimeout:-
setTimeout(function() {
  console.log("This code will run after a delay of 2000 milliseconds.");
}, 2000);

setInterval:
The setInterval function is used to repeatedly execute a specific block of code at a defined interval. It also takes a callback function and a delay time as parameters. The callback function will be executed repeatedly at the specified interval until it is cleared.

# Q.4 how can you handle Async code in JavaScript ?

In JavaScript, you can handle asynchronous code using various techniques. Here are a few commonly used approaches:

Callbacks: Callbacks are a traditional way to handle asynchronous operations in JavaScript. You pass a function (callback) as an argument to an asynchronous function, and that function gets executed when the asynchronous operation completes.

Promises: Promises provide a more structured way to handle asynchronous code. A Promise represents the eventual completion or failure of an asynchronous operation and allows you to chain operations using .then() and handle errors using .catch().

Async/await: Async/await is a modern approach that allows you to write asynchronous code in a more synchronous style. It uses the async keyword to define an asynchronous function and the await keyword to wait for the resolution of a Promise.

# Q.5 What are Callbacks &  Callback Hell ?

Callbacks are functions that are passed as arguments to other functions and are executed at a later point in time, often when an asynchronous operation completes. They allow you to define the behavior that should occur after the asynchronous operation finishes.

Callback Hell, also known as the Pyramid of Doom, is a situation that arises when you have multiple nested callbacks within each other, making the code difficult to read and maintain. It commonly occurs when dealing with asynchronous operations that depend on each other or have sequential dependencies.

Callback Hell can be mitigated using techniques such as modularization, named functions, and control flow libraries. However, as JavaScript has evolved, newer approaches like Promises and async/await have emerged, which provide cleaner and more readable ways to handle asynchronous code and avoid callback hell.

# Q.6 What are Promises & Explain Some Three Methods of Promise.

Promises are a feature in JavaScript that provide a more structured and elegant way to handle asynchronous operations. A Promise represents the eventual completion (or failure) of an asynchronous operation and allows you to chain operations and handle results or errors in a more organized manner.

Promises have three states:

1.Pending: The initial state when a Promise is created. It represents that the operation is still in progress and hasn't been fulfilled or rejected yet.
2.Fulfilled: The state of a Promise when the asynchronous operation has been successfully completed. It represents that the operation completed successfully, and a result is available.
3.Rejected: The state of a Promise when the asynchronous operation encountered an error or was unsuccessful. It represents that the operation failed, and an error is available.

three commonly used methods of Promises:-

1. '.then():' The .then() method is used to handle the fulfillment of a Promise. It takes one or two arguments: a success callback function and an optional error callback function. The success callback is invoked when the Promise is fulfilled, allowing you to handle the result.

2. '.catch():' The .catch() method is used to handle the rejection of a Promise. It takes an error callback function as an argument and is invoked when the Promise is rejected. It allows you to handle any errors that occurred during the asynchronous operation.

3. '.finally(): The .finally()' method is used to specify a callback function that will be executed regardless of whether the Promise is fulfilled or rejected. It allows you to perform cleanup operations or execute common logic that needs to be done after the Promise settles.

# Q.7 What’s async & await Keyword in JavaScript.

Async and await keywords are part of the ECMAScript 2017 (ES8) update, providing a more readable and simplified syntax for working with Promises and handling asynchronous operations.

The async keyword is used to declare an asynchronous function. When a function is marked as async, it automatically returns a Promise. This enables you to use the await keyword within the function to pause the execution and wait for a Promise to resolve before proceeding further.

On the other hand, the await keyword is used to pause the execution of an async function until a Promise is fulfilled and to retrieve the resolved value of the Promise. When await is used with a Promise, it allows you to write asynchronous code in a more sequential and synchronous-like manner, enhancing code readability.

function fetchData() { return new Promise((resolve, reject) => { setTimeout(() => { const data = 'Some data'; resolve(data); }, 2000); }); }

async function main() { try { const result = await fetchData(); console.log('Result:', result); // Other sequential operations... } catch (error) { console.error('Error:', error); } }

main();

In the above example, the fetchData() function returns a Promise that resolves after a 2-second delay. The main() function is defined as an async function and utilizes the await keyword to pause its execution until the Promise returned by fetchData() is fulfilled. Once the Promise is resolved, the value is assigned to the result variable, and subsequent operations can be executed sequentially.

# Q.8 Explain Purpose of Try and Catch Block & Why do we need it?

The purpose of the try and catch blocks in JavaScript is to handle errors and exceptions that occur during the execution of code.

The try block is used to enclose a section of code where an error or exception might occur. It allows you to define a block of code that you want to monitor for any exceptions. If an exception occurs within the try block, the normal flow of execution is interrupted, and the control is transferred to the catch block.

The catch block is used to define the actions that should be taken when an exception is thrown within the corresponding try block. It specifies the code that will be executed to handle the exception and provides an opportunity to gracefully handle errors. The catch block takes an error object as a parameter, which contains information about the exception that was thrown.

Example:-

try { // Code that may throw an exception const result = someFunction(); console.log('Result:', result); } catch (error) { // Code to handle the exception console.error('An error occurred:', error); }

In the above example, the try block contains the code that may throw an exception. If an exception occurs during the execution of someFunction(), the control is transferred to the catch block. The error object is caught and can be accessed within the catch block, allowing you to log the error message or perform any necessary error handling.

# Q.9 Explain fetch.

The fetch function is a built-in JavaScript function that allows you to make HTTP requests to fetch resources from a network. It provides a modern and flexible way to perform network requests and handle responses asynchronously.

The fetch function returns a Promise that resolves to the Response object representing the response to the request. The Response object contains information about the response status, headers, and methods to handle the response data.
fetch is called with the URL of the resource you want to fetch. It returns a Promise, and then the response is handled using the .then() method.
The fetch function supports various options to customize the request, such as specifying the HTTP method, headers, body, and more. Here's an example of making a POST request with JSON data.
The fetch function supports various options to customize the request, such as specifying the HTTP method, headers, body, and more. Here's an example of making a POST request with JSON data.

# Q.10 How do you define an asynchronous function in JavaScript using async/await?

To define an asynchronous function in JavaScript using async/await, you prefix the function declaration with the async keyword. This indicates that the function will contain asynchronous code and will return a Promise.The await keyword is used to pause the execution of the function until the Promise returned by fetch() resolves and the response is available. By employing await, you can write code in a more sequential and synchronous-like style, enhancing readability.

In the example, await is used twice: first to await the resolution of the fetch() Promise and assign the resulting response object, and then to await the resolution of the response.json() Promise and assign the parsed data.

Finally, the function returns the fetched data as a Promise. Since an async function always returns a Promise, you can use it with then() or await when invoking the function.

Example:-

fetchData() .then((data) => { console.log('Fetched data:', data); }) .catch((error) => { console.error('Error:', error); });

In this above example, the fetchData() function is called, and the returned Promise is handled using the then() method. The fetched data is then logged to the console. If any errors occur during the execution of the async function, they are caught and handled in the catch() block.
By defining an asynchronous function with async/await, you can write asynchronous code in a more readable and sequential manner, avoiding nested callbacks or excessive chaining of .then() methods.