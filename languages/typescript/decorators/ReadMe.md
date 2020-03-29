# Typescript Decorators

Decrators provide a way to add both annotation and a meta-prograamming syntax for class declarations and members.
Decorators are available as an experimental feature of typescript

### Example
```
@controller("/api")
class APIServer {

    @log("Route added to API Server")
    public addRoute(path:string, action;Action){
        this.app.addRoute(path,action);
    }
}
```

## Cross - cutting  concerns
#
[Authorization, Logging, Validation]
- Service Layer
- Business Rules & Logic Layer
- Data Access & Storage Layer

> AOP is a programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns


### Annotations & Decorator
#
Annotations are limited to setting metadata

Decorators are functions that can modify what they describe when executed

Traceur (from Google) provides support for annotations within Javascript

Typescript provides experimental support for decorators

### Types of decorators
#

- Class
  > Applied to class constructors for observing, modifying, or replacing class definition
- Method
   > Applied to method property decriptor for observing, modifying, or replacing method definition
- Property
  > Can only be leveraged to observe that a property has been declared for a class
- Parameter
  >Applied to method declaration for observing that a parameter has been defined on a method

### Creating Decorators
#

Typescript defines specific function signatures for ach of the four differnt decorator types. As this is an experimental feature, these signatures have changed over time.

#### Approaches
  - Decorator Function - function with a specific signature evaluated at runtime - must implement specific signatures based on use
  - Decorator Factory - Function that returns a decorator function that can optionally receive parameters - can receive parameters and construct the decorator

> dec caled runtim

#### Multiple Decorators

Multiple decorators can be applied in any of the four decorator types

Decorator expressions are evaluated in from top to bottom

Results pf ex[ressions are called as functions from bottom to top

envision them as neted fucntion

### Hands on - Visual Code

#### Enable Decorator support in Typscript

  *In **tsconfig.json** add below config*
```
...
 "experimentalDecorators": true,
 "emitDecoratorMetadata": true
...
 ```
*Sample Decorator Implementation*
```
function logClass(message: string): ClassDecorator {
    console.log(`${message} evaluated`);
    return function(constructor: Function): void {
        console.log(`${message} called`);
    }
}

function logProperty(message: string): PropertyDecorator {
    console.log(`${message} evaluated`);
    return function(target: Object,propertyKey: string){
        console.log(`${message } called`);
    }
}

function logMethod(message: string) : MethodDecorator {
    console.log(`${message} evaluated`);
    return function(target: Object,propertyKey: string, descriptor: PropertyDescriptor){
        console.log(`${message } called`);
    }
}

function logParameter(message: string): PropertyDecorator {
    console.log(`${message} evaluated`);
    return function(target:Object, propertyKey: string, parameterIndex: number){
        console.log(`${message} called`);
    }
}

@logClass("Class Decorator")
class Person {

    private _directReports: Person[];

    @logProperty("Property Decorator")
    public emailAddress: string;

    constructor(public firstName:string, public lastName:string){
        this._directReports = [];
    }

    public addDirectReport(@logParameter("Parameter Decorator") person: Person) {
        this._directReports.push(person);
    }
}

const person = new Person("David", "Tucker");

```

### Types of Decorators

- Action Decorators - Performa an action where they are defined
- Desription Decorators - Simply describe and item for future use by the project








