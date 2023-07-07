# Q.1 Explain Hoisting in JavaScript.

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that regardless of where declarations are made in the code, they are conceptually moved to the top, allowing them to be accessed before they are actually declared in the code.

In JavaScript, variables declared with the var keyword and functions defined using the function keyword are hoisted. However, it's important to note that only the declarations are hoisted, not the initializations or assignments.

Example:-

console.log(message); // Output: undefined var message = "Hello, world!"; console.log(message); // Output: Hello, world!

# Q.2 Explain Temporal Dead Zone?

The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when accessing variables declared with let and const before they are initialized. The TDZ is a specific time period within a scope where variables exist but cannot be accessed. This behavior is a result of the hoisting mechanism in JavaScript.The purpose of the Temporal Dead Zone is to prevent the usage of variables before they are explicitly declared. It helps enforce better code quality and prevents issues that can arise from using variables before they have been properly initialized. By throwing a ReferenceError during the TDZ, JavaScript ensures that developers are aware of such mistakes and can fix them accordingly.

Example:-

console.log(x); // ReferenceError: Cannot access 'x' before initialization let x = 10;

In the above code, the variable x is accessed before it is declared, resulting in a ReferenceError during the Temporal Dead Zone . Moving the console.log statement after the variable declaration would resolve the error:

let x = 10; console.log(x); // Output: 10

# Q.3 Difference between var & let?

The main difference between var and let in JavaScript lies in their scoping behavior, hoisting, and redeclaration.

1.Scoping behavior: Variables declared with var are function-scoped, meaning they are accessible within the entire function in which they are declared, regardless of block scope. On the other hand, variables declared with let are block-scoped, which means they are only accessible within the block they are declared in, such as inside a loop or an if statement.
2.Hoisting: Both var and let are hoisted, but there is a difference in how they behave during the hoisting process. Variables declared with var are hoisted to the top of their containing function or global scope, and their declarations are initialized with a value of undefined. On the other hand, variables declared with let are hoisted to the top of their block scope, but their declarations remain uninitialized in the Temporal Dead Zone (TDZ) until they are assigned a value.
3.Redeclaration: Variables declared with var can be redeclared within the same scope without causing an error. In contrast, variables declared with let cannot be redeclared within the same block scope.

# Q.4 What are the major features introduced in ECMAScript 6?

ECMAScript 6 (ES6), also known as ECMAScript 2015, introduced several major features and improvements to JavaScript:-

1.Block-Scoped Variables: The let and const keywords were introduced to declare block-scoped variables, allowing better control over variable scope and reducing issues related to hoisting and variable redeclaration.

2.Arrow Functions: Arrow functions provide a concise syntax for writing function expressions. They have a lexical this binding, shorter syntax, and implicit return for one-line expressions, making code more compact and easier to read.

3.Default Parameters: ES6 allows specifying default parameter values for function parameters. This simplifies function definitions by providing default values that are used when arguments are omitted or undefined.

4.Rest and Spread Operators: The rest operator (...) allows collecting remaining function arguments into an array, simplifying variable-length argument handling. The spread operator (...) allows expanding an array or iterable object into individual elements, useful for array creation, function calls, and array manipulation.

5.Template Literals: Template literals provide an enhanced way to create strings using backticks (`) instead of single or double quotes. They support multiline strings, string interpolation with placeholders ${}, and expressions inside the template.

6.Destructuring Assignment: Destructuring assignment allows extracting values from arrays or objects and assigning them to variables in a more concise and intuitive way. It simplifies tasks like extracting properties from objects or extracting elements from arrays.

7.Classes: ES6 introduced class syntax for creating objects and defining object-oriented programming patterns in JavaScript. Classes provide a more familiar syntax for defining constructor functions, instance methods, static methods, and inheritance using the extends keyword.

8.Modules: ES6 introduced a standardized module system with import and export keywords, allowing developers to define and use reusable modules in their code. Modules provide better code organization, encapsulation, and dependency management.

9.Promises: Promises were introduced as a standardized way to handle asynchronous operations in JavaScript. Promises simplify asynchronous programming by representing a value that may be available in the future, providing better control flow and error handling.

10.Iterators and Iterables: Iterators and iterables provide a standardized way to iterate over collections and custom objects using the for...of loop. They allow customizing the iteration behavior of objects and integrating them with built-in language features.

# Q.5 What is the difference between let and const ?

The main difference between let and const in JavaScript lies in their mutability and reassignment capabilities.

1.Mutability: Variables declared with let are mutable, meaning their values can be reassigned. On the other hand, variables declared with const are immutable, and their values cannot be reassigned once they are assigned.
2.Declaration and Initialization: Both let and const require initialization at the time of declaration. However, with let, you can declare a variable without assigning it a value, and its value will be set to undefined by default. With const, you must assign a value to the variable when declaring it.
3.Block Scoping: Both let and const are block-scoped, meaning they are only accessible within the block they are declared in or any nested blocks. They have similar scoping behavior, allowing for better control and avoiding issues related to hoisting.
4.Re-declaration: Variables declared with let can be re-declared within the same scope, but variables declared with const cannot be re-declared.

# Q.6  What is template literals in ES6 and how do you use them?

Template literals, introduced in ES6, provide an improved way to create strings in JavaScript. They are enclosed by backticks (`) instead of single or double quotes. Template literals offer several features that enhance string creation and manipulation.

1.Basic Syntax: Enclose the string within backticks (`) instead of single or double quotes.
2.tring Interpolation: Template literals allow you to insert expressions or variables directly into the string using ${} placeholders. Any valid JavaScript expression can be used within the placeholder.
3.Multiline Strings: Template literals support multiline strings without the need for concatenation or escape characters. Line breaks within the backticks are preserved in the resulting string.
4.Tagged Templates: Template literals can be "tagged" with a function, allowing for custom processing of the template. The tag function receives the template literal as an argument and can modify the string output based on custom logic.

# Q.7 What’s difference between map & forEach?

The map() and forEach() methods are both array iteration methods in JavaScript, but they differ in their behavior and the values they return. Here are the main differences between map() and forEach():

1.Return value:
map(): The map() method returns a new array by applying a provided function to each element of the original array. It creates a new array of the same length, with each element being the result of the callback function applied to the corresponding element of the original array. forEach(): The forEach() method does not return anything. It iterates over each element of the array and executes a provided callback function on each element.

2.Purpose:
map(): map() is typically used when you need to transform each element of an array and collect the transformed values into a new array. It is useful for creating a new array based on the original array. forEach(): forEach() is commonly used when you want to perform an action or execute a function for each element of the array without creating a new array. It is suitable for operations that do not require the creation of a new array.

3.Modification of the original array:
map(): The map() method does not modify the original array. Instead, it returns a new array containing the transformed values, leaving the original array unchanged. forEach(): The forEach() method does not create a new array. However, it allows you to modify the elements of the original array directly within the callback function. It is not intended for transforming array elements like map().

4.Handling the result:
map(): Since map() returns a new array, you can assign its result to a variable or use it directly in further operations.

const numbers = [1, 2, 3]; const doubledNumbers = numbers.map(num => num * 2); console.log(doubledNumbers); // Output: [2, 4, 6]

5.forEach(): As forEach() does not return anything, you cannot directly capture its result. It is primarily used for its side effects, such as logging or modifying array elements.

const numbers = [1, 2, 3]; numbers.forEach(num => console.log(num)); // Output: 1, 2, 3

# Q.8 How can you destructure objects and arrays in ES6?

Destructuring, which allows you to extract values from arrays and properties from objects in a concise manner. Destructuring is a powerful technique that improves code readability and simplifies working with complex data structures. Let's explore how to destructure objects and arrays:

1.Destructuring Objects: To destructure an object, you enclose the desired property names in curly braces ({}) on the left side of the assignment operator (=). The variable names on the left side should match the property names of the object you want to destructure.
const person = { name: 'Alice', age: 30 }; const { name, age } = person;

console.log(name); // Output: Alice console.log(age); // Output: 30

2.Destructuring Arrays: To destructure an array, you enclose the desired element positions in square brackets ([]) on the left side of the assignment operator (=). The variables on the left side will receive the values from the corresponding positions in the array.
const numbers = [1, 2, 3]; const [a, b, c] = numbers;

console.log(a); // Output: 1 console.log(b); // Output: 2 console.log(c); // Output: 3

We can also skip elements in the array by leaving an empty slot (using commas) without assigning it to a variable:

const numbers = [1, 2, 3, 4, 5]; const [a, , c] = numbers;

console.log(a); // Output: 1 console.log(c); // Output: 3

Additionally, the rest syntax (...) can be used to assign the remaining elements of an array to a new array:

const numbers = [1, 2, 3, 4, 5]; const [a, ...rest] = numbers;

console.log(a); // Output: 1 console.log(rest); // Output: [2, 3, 4, 5]

# Q.9 How can you define default parameter values in ES6 functions?

In ES6, you can define default parameter values for function parameters, which allows you to specify fallback values that will be used if an argument is not provided or is undefined. Here's how you can define default parameter values in ES6 functions:
the greet function has a parameter name with a default value of "Guest". If the name argument is not provided when calling the function or if it is undefined, the default value "Guest" will be used instead. When the greet function is called without an argument, it logs "Hello, Guest!" to the console. When called with the argument "John", it logs "Hello, John!".
In this updated example, the greet function has two parameters: name with a default value of "Guest" and age with a default value of 30. If any argument is not provided or is undefined, the corresponding default value will be used.
the getTimestamp function has a parameter date with a default value of new Date(). If no argument is provided, the current date and time are used as the default value. Calling getTimestamp() multiple times will log different timestamps because the default value expression is evaluated each time.

# Q.10 What is the purpose of the spread operator (...) in ES6?

The spread operator (...) in ES6 is a versatile feature that allows you to expand iterable objects, such as arrays or strings, into individual elements. It has several use cases and can greatly simplify array manipulation, function calls, and object creation. Here are some common purposes of the spread operator in ES6:

1.Array Manipulation: The spread operator can be used to create a new array by combining existing arrays or adding elements to an array.the spread operator is used to combine two arrays (arr1 and arr2) into a new array (combined). It is also used to add individual elements to the newArr array.
2.Function Calls: The spread operator can be used to pass an array as individual arguments to a function. the spread operator is used to pass the elements of the numbers array as individual arguments to the sum function.
3.Object Creation: The spread operator can be used to create a new object by combining properties from multiple objects or adding new properties.the spread operator is used to create a new object (personWithAddress) by combining the properties from the person and address objects.
4.Copying Arrays and Objects: The spread operator can be used to create a shallow copy of an array or an object.the spread operator is used to create a copy of the originalArray and originalObject, ensuring that modifications to the copy do not affect the original.
