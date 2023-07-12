# Q.1 What’s Constructor And Its Purpose?

A constructor is a special method in object-oriented programming that is used for initializing objects of a class. It is called automatically when an object is created and is responsible for setting initial values to the object's attributes or performing any other necessary setup operations.
The purpose of a constructor is to ensure that the newly created object is in a valid state and ready to be used. It allows you to initialize the object with specific values or perform any necessary actions before the object is used. Constructors are often used to assign initial values to the object's attributes or to establish connections with other objects or resources.
In many programming languages, including Java, C++, and Python, constructors have the same name as the class and are typically defined as special methods without a return type. They can be overloaded, which means a class can have multiple constructors with different parameter lists, allowing you to create objects with different initial states.
By using constructors, you can encapsulate the object creation process and ensure that objects are properly initialized, promoting code reusability and maintainability. Constructors play a crucial role in object-oriented programming by facilitating the creation of objects and ensuring they are ready for use.

# Q.2 Explain This Keyword and Its Purpose?

The this keyword refers to the current object in a method or constructor. The most common use of the this keyword is to eliminate the confusion between class attributes and parameters with the same name (because a class attribute is shadowed by a method or constructor parameter).

Current object reference: When a method is called on an object, the this keyword within that method refers to the object itself. This enables the method to interact with and modify the object's properties, as well as invoke other associated methods.

Dynamic resolution: The value of the this keyword is dynamically resolved during runtime, depending on how the method is invoked. This flexibility allows the same method to operate on different objects, adapting its behavior based on the specific calling context.

Usage in constructor functions: In JavaScript, the this keyword is widely utilized within constructor functions to refer to the newly created object. It enables the constructor to assign values to the object's properties and execute necessary initialization steps.

# Q.3 What’s Call Apply Bind Method & Difference Between them.

The call, apply, and bind are methods available in JavaScript that allow you to control the execution context of a function. They are used to explicitly set the value of this inside a function and provide arguments if needed. While they serve a similar purpose, there are differences in how they are used and how arguments are passed.

1.call: The call method is used to invoke a function immediately with a specified this value and individual arguments. It takes the context object as the first parameter, followed by the arguments to be passed to the function.

Syntax: functionName.call(thisValue, arg1, arg2, ...)

2.apply: The apply method is similar to call, but it accepts arguments as an array or an array-like object instead of individual arguments. It is useful when you have an array of values that need to be passed as arguments.

Syntax: functionName.apply(thisValue, [arg1, arg2, ...])

3.bind: The bind method creates a new function with a specified this value and, if provided, initial arguments. It allows you to create a partially applied function or preserve the context of a function for later execution. Unlike call and apply, bind does not immediately invoke the function.

Syntax: functionName.bind(thisValue, arg1, arg2, ...).

# Q.4 Explain OOPS ? 

OOPS stands for Object-Oriented Programming (OOP). It is a programming paradigm that organizes software design around objects, which are instances of classes. OOP focuses on encapsulating data (attributes or properties) and behavior (methods or functions) into objects, allowing for modular, reusable, and maintainable code.

The fundamental concepts of OOP are:

1.Class: A class is a blueprint or a template that defines the structure and behavior of objects. It encapsulates the data (in the form of attributes) and the operations that can be performed on that data (in the form of methods). Objects are instances of classes.

2.Object: An object is a specific instance of a class. It represents a real-world entity or concept and contains its own state and behavior. Objects can interact with each other through method invocations and can access and modify their own attributes.

3.Encapsulation: Encapsulation is the principle of bundling data and methods together within a class. It hides the internal details of an object and provides a public interface for interacting with the object. This helps in achieving data abstraction, data security, and code organization.

4.Inheritance: Inheritance allows the creation of a new class (called a derived or child class) based on an existing class (called a base or parent class). The derived class inherits the properties and methods of the base class, allowing code reuse and the creation of hierarchical relationships.

5.Polymorphism: Polymorphism means the ability of an object to take on many forms. It allows objects of different classes to be treated as objects of a common superclass. Polymorphism enables the use of a single interface to represent different types of objects, providing flexibility and extensibility.

6.Abstraction: Abstraction is the process of simplifying complex systems by breaking them down into smaller, more manageable components. It involves identifying the essential characteristics and behavior of an object or a group of objects and representing them through abstract classes, interfaces, and methods.

# Q.5 Whats Abstraction and Its Purpose?

Abstraction is a fundamental concept in object-oriented programming (OOP) that allows you to represent complex systems by simplifying them into manageable and understandable components. It involves identifying the essential characteristics and behavior of an object or a group of objects while hiding the unnecessary details.

The purpose of abstraction is to provide a high-level, simplified view of an object or system, focusing on what is relevant and hiding the implementation details. It allows you to:

Focus on the essential: Abstraction helps you concentrate on the key aspects of an object or system, abstracting away the non-essential or implementation-specific details. It allows you to define the essential properties and behaviors that are necessary to interact with an object, without worrying about how those properties are implemented.

Reduce complexity: By abstracting complex systems into simpler components, abstraction helps manage and reduce complexity in software development. It breaks down a system into modular and understandable parts, making it easier to design, implement, and maintain.

Encapsulate complexity: Abstraction enables you to encapsulate the complexity of a system behind well-defined interfaces and classes. The internal workings and implementation details are hidden, and users can interact with the system through the provided abstractions. This promotes information hiding and protects the internal integrity of the system.

Promote code reusability: Abstraction allows you to create abstract classes and interfaces that define common behaviors and attributes shared by multiple objects. These abstractions can be inherited by other classes, enabling code reuse and providing a consistent way to interact with different objects.

# Q.6 Whats Polymorphism and Purpose of it?

Polymorphism is a concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass or interface. It enables a single interface to represent multiple types of objects, providing flexibility and extensibility in software design.

The purpose of polymorphism is to:

Simplify code: Polymorphism simplifies code by allowing you to write general-purpose code that can work with objects of different types.

Enable code reuse: Polymorphism promotes code reuse by allowing objects of different classes to be treated uniformly through a common interface or superclass.

Achieve flexibility and extensibility: Polymorphism provides flexibility and extensibility in software design. New classes can be added as subclasses of a common superclass or interface, and the existing code can still operate on them as long as they adhere to the common interface.

Support method overriding: Polymorphism enables method overriding, where a subclass can provide its own implementation of a method defined in the superclass. When the overridden method is invoked on an object of the subclass, the subclass's implementation is executed. This allows for specialized behavior in different subclasses while maintaining a common interface.

Enable dynamic binding: Polymorphism supports dynamic binding, which means the specific implementation of a method is determined at runtime based on the actual type of the object. This allows for late binding of methods, where the appropriate method implementation is resolved dynamically based on the actual object being used.

Facilitate code abstraction: Polymorphism helps in achieving code abstraction by allowing you to work with objects at a higher level of abstraction, focusing on their common behavior and ignoring the specific details of their types. This promotes modularity and reduces dependencies on specific implementations.

# Q.7  Whats Inheritance and Purpose of it?

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class to be created based on an existing class. It enables the creation of a hierarchical relationship between classes, where the new class (derived or child class) inherits the properties and methods of an existing class (base or parent class).

The purpose of inheritance is to:

Promote code reuse: Inheritance allows you to reuse code by deriving new classes from existing ones. The derived class inherits the attributes and behaviors of the base class, eliminating the need to rewrite common code. This promotes modularity, reduces redundancy, and enhances code efficiency.

Create hierarchical relationships: Inheritance enables the creation of hierarchical relationships between classes. The derived class can add its specific attributes and behaviors while inheriting and extending the functionalities of the base class. This helps in modeling real-world relationships, organizing code, and achieving a more structured design.

Enable specialization and generalization: Inheritance allows for specialization and generalization of classes. The derived class can specialize or refine the behavior of the base class by adding new features or overriding inherited methods.

Facilitate polymorphism: Inheritance is closely tied to the concept of polymorphism. By creating a common superclass or interface, inheritance allows objects of different derived classes to be treated uniformly through a common interface.

Support code organization and maintenance: Inheritance helps in organizing code by creating a hierarchical structure. The base class contains common properties and methods, while derived classes add specific functionalities. This makes the code more readable, maintainable, and modular.

# Q.8 Whats Encapsulation and Purpose of it ?

Encapsulation is a crucial concept in object-oriented programming (OOP) that involves bundling data and related methods within a single entity called an object. It focuses on data protection and controlled access by limiting direct interaction with the internal state of an object. The primary purpose of encapsulation is to enhance code maintainability, promote information hiding, and ensure data integrity.

Data protection: Encapsulation shields the internal state of an object from unauthorized access or modification. By encapsulating data, it prevents direct manipulation and ensures that data is accessed and modified only through well-defined methods.

Interfaces for interaction: Encapsulation provides public interfaces, typically methods, through which external code can interact with an object. These interfaces serve as controlled access points to manipulate the encapsulated data, enforcing validation and maintaining consistency.

Information hiding: Encapsulation hides the internal implementation details of an object, exposing only the necessary information and functionality. It separates the external interface from the internal workings, reducing dependencies and improving code maintainability.

Code organization and modularity: Encapsulation promotes code organization by grouping related data and behavior into cohesive objects. It enables modular design, allowing objects to be developed and modified independently. This enhances code reusability, scalability, and facilitates collaborative development.

Levels of encapsulation: Encapsulation can involve different levels of access control, such as public, private, and protected. Public members are accessible from anywhere, private members are restricted to the object itself, and protected members are accessible within the object and its subclasses.

Connection to OOP principles: Encapsulation is closely tied to other OOP principles like abstraction, inheritance, and polymorphism. It supports abstraction by hiding unnecessary details, enables proper inheritance by controlling access to superclass members, and ensures consistent behavior for polymorphic objects.

# Q.9 Explain Class in JavaScript?

In JavaScript, a class is a blueprint for creating objects that share similar properties and behaviors. It is a way to define a user-defined data type that encapsulates data (in the form of properties) and functions (in the form of methods) that operate on that data.

Prior to the introduction of ES6 (ECMAScript 2015), JavaScript did not have built-in class syntax like some other programming languages. However, JavaScript still had the concept of prototypes that allowed objects to inherit properties and methods from other objects.

With the introduction of ES6, JavaScript introduced a more familiar syntax for creating classes, which simplified the creation and usage of objects with shared properties and methods. The class syntax in JavaScript provides syntactic sugar over the prototype-based inheritance model.

# Q.10 What’s Super Keyword & What it does?

In JavaScript, the super keyword is used to call functions or access properties on an object's parent or superclass. It is primarily used within the context of classes and inheritance. When a class extends another class, the super keyword allows you to refer to the parent class and access its methods and properties.

The super keyword can be used in two ways:

1. Accessing the parent's properties and methods: By using super within a derived class's method, you can access the corresponding method or property of the parent class. This allows you to override methods in the derived class while still having access to the parent class's implementation.
2. Calling the parent's constructor: When a derived class has its own constructor, the super keyword can be used to call the constructor of the parent class and pass any required arguments. This ensures that the parent class's initialization logic is executed before the derived class's own initialization.

In both cases, the super keyword allows you to reference and invoke the parent class's methods or constructor. It helps in maintaining the inheritance chain and accessing the functionalities of the parent class from the derived class.