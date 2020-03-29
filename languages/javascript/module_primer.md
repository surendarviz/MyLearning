# Javascript Module Primer

## Module ?
A module is a reusable piece of code that encapsulates implementation details and exposes a public API so it can be easily loaded and used by other code.

## Need for Module
 - abstract code: to delegate functionality to specialised libraries so that we don't have to understand the complexity of their actual implementation
 - encapsulate code: to hide code inside the module if we don't want the code to be changed
 - reuse code: to avoid writing the same code over and over again
 - manage dependencies: to easily change dependencies without rewriting our code


## Module Patterns in ES5

 - **Invoked Function Expression (IIFE)** is an anonymous function that is invoked when it is declared.
 - **Revealing Module pattern** - similar to an IIFE, but we assign the return value to a variable


### IIFE
    - Abstracts code inside - variables declared inside don't pollute global namespace
```
// Immediately Invoked Function Expression
(function(){
  console.log('test');
})()

// => writes 'test' to the console and returns undefined

( function(){...} ) -> Function expression
( function(){...} )() -> Calling the function expression
```

### Revealing Module Pattern

#### *Type 1*
```
// Expose module as global variable
var greeter = function(){

  // Inner logic
  function sayHello(){
    console.log('Hello');
  }

  // Expose API
  return {
    sayHello: sayHello
  }
}()

// Access module functionality
greeter.sayHello();
// => Hello
```

#### *Type 2*

Other way of using this pattern is through constructor, for this we don't execute the function at declaration time

```
// Expose module as global variable
var Greeter = function(){

  // Inner logic
  function sayHello(){
    console.log('Hello');
  }

  // Expose API
  return {
    sayHello: sayHello
  }
}  // -->> *Notice here ,we are not executing*

// Access module functionality
var greeter = new Greeter();
greeter.sayHello
// => Hello
```

> Both the above patterns doesn't provide a solution for dependency management.


## Module Formats

 - Asynchronous Module Definition (AMD)
 - CommonJS
 - Universal Module Definition (UMD)
 - System.register
 - ES6 module format

### AMD
The AMD format is used in browsers and uses a define function to define modules:
```
//Calling define with a dependency array and a factory function

define(['dep1', 'dep2'], function (dep1, dep2) {

    //Define the module value by returning a value.
    return function () {};
});
```
### CommonJS
The CommonJS format is used in Node.js and uses require and module.exports to define dependencies and modules:

```
var dep1 = require('./dep1');
var dep2 = require('./dep2');

module.exports = function(){
  // ...
}
```

### UMD

The UMD (Universal Module Definition) pattern is used when our module needs to be imported by a number of different module loaders (e.g. AMD, CommonJS).

1. An IIFE (Immediately-Invoked Function Expression) that checks for the module loader that is being implemented by the user. This will take two arguments; root (a this reference to the global scope) and factory (the function where we declare our module).

2. An anonymous function that creates our module. This is passed as the second argument to the IIFE portion of the pattern. This function is passed any number of arguments to specify the dependencies of the module.

> In the below example we check for AMD, then CommonJS. If neither of those loaders are in use we fall back to making the module and its dependencies available globally.


```
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'b'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('b'));
    } else {
        // Browser globals
        factory((root.commonJsStrict = {}), root.b);
    }
}(this, function (exports, b) {
    //use b in some fashion.

    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
}));
```

### ES6 module format
As of ES6, JavaScript also supports a native module format.
It uses an export token to export a module's public API:

```
// lib.js

// Export the function
export function sayHello(){
  console.log('Hello');
}

// Do not export the function
function somePrivateFunction(){
  // ...
}
```
an import token to import parts that a module exports:
```
import { sayHello } from './lib';

sayHello();
// => Hello
```

using alias
```
import { sayHello as say } from './lib';

say();
// => Hello
```

load an entire module at once:
```
import * as lib from './lib';

lib.sayHello();
```
default exports:
```
// lib.js

// Export default function
export default function sayHello(){
  console.log('Hello');
}

// Export non-default function
export function sayGoodbye(){
  console.log('Goodbye');
}
```
import like...
```
import sayHello, { sayGoodbye } from './lib';

sayHello();
// => Hello

sayGoodbye();
// => Goodbye
```
>

## ***Facts and Misconceptions cleared***

> CommonJS and AMD are specifications (or formats) on how modules and their dependencies should be declared in javascript applications. ***RequireJS*** is a script loader library that is AMD compliant, ***curljs*** being another example.

