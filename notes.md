# React and TypeScript from Stephen Grider - Course Notes - 2/3/2021

**_Typescript Overview_**

# The TS Type System

- Helps developers catch errors during development.
- Uses 'type annotations', provided by the developer, to analyze our code.
  - Typescript ---> TS Compiler ---> Standard JS code ---> Executed by Browser/Node/ etc...
- Only active during development.
  - Typescript never makes it to either the browser, or Node.js. Stricly development use ONLY.
  - The Typescript will be compiled into usable JS, before the JS is executed in the browser.
- Doesn't provide any performance optimization.

_Installed `ts-node` library which allows for execution of Typescript in the terminal_
_Installed `parcel-bundler` library which allows us to run Typescript in the browser_

- To compile a Typescript file into JS, run the command: `ts-node`.
  - This command will first generate a compiled version of the TS file, then upon sucessfully compilation, it will execute the newly generated JS file in Node.js

# Types

- In TS, a type is an easy way to refer to the different properties & functions that a value has.
- There are two groups of types:
  - Primitive Types: number, boolean, void, undefined, string, null, symbol.
  - Object Types: functions, arrays, classes, objects.
- Types are used by the Typescript Compiler to analyze our code for errors.
- Types allow the other engineers to understand what values are flowing around our codebase.

# Type Annotations & Type Inferences

- Type annotations are pieces of code we add to tell Typescript what type of value a variable has.
- Type inferences are cases in which Typescript will infer/guess a varible's type on it's own, usually because no annotation was provided for the variable.

* If a variable's declaration & initialization are on the same line, Typescript will figure out the type of the variable on it's own!

**When to use Type annotations**

1. When a function returns the type `any` and we need to clarify the value.
   - `any` is a type, just like a string or boolean.
   - When the `any` annotation is used, it means TS can't check for correct property references, the TS compiler has no idea what the var's type is.
   # Avoid variables with the `any` annotations at all costs!
2. When we declare a variable on one line, then initiliaze a value to it later.
3. When we want a variable to have a type that can't be inferred.

# Type inferences can be used almost ANY time other than the 3 cases above do not apply!

# Interfaces & Reusable Code Strategy

- The general strategy for reusable-code in TS has 2 parts:
  1. Create functions that accept arguments that are typed with interfaces.
  2. Objects/classes can decide to 'implement' a given interface to work with a function.

# TS Classes

- In TS, we use classes to BOTH create instances, AND to reference a specific "type".
- Typescript classes contain 'modifiers', which are keywords that we place on different methods and properties inside of a class:
  - public: this method can be called anywhere and anytime. (Default if no modifies are added)
  - private: this method can ONLY be called by other methods in THIS class.
  - protected: this method can be called by other methods in THIS class, or by other methods in child classes.

# TS Interfaces

- TS can use interfaces to restrict access

# Type Definition Files & Importing

- Type Definition Files are files that Typescript requires as adapters to third party libraries, in order to import and use them inside of TS files.
- When utilizing a JS library in an application, if the library itself does not already come with a Type Definition File, then it must be installed manually.

* `npm install @types/[moduleName]`

* Any file that ends with the extension: `.d.ts` references a Type Definition File.
