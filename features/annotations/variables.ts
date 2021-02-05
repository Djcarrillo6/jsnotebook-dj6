// Type Annotation Variable Examples

// Only 'numbers' can be assigned to the var apples
let apples: number = 5;

// Only 'stings' can be assigned to the var speed
let speed: string = 'fast';

// Null has a annotation that is the same as it's type.
let nothingMuch: null = null;

// Undefined also has an annotation that is the same as it's type.
let nothing: undefined = undefined;


// Built-in Objects
let now: Date = new Date();

// Array annotation
let colors: string[] = ['blue', 'red', 'green'];

// Array of numbers
let myNumbers: number[] = [1,2,3];

// Array of booleans
let truths: boolean[] = [true, true, false];

// Classes - A variable class annotation begins with a capital letter of the class
class Car {

};
// A lower case variable usually references an instance of the class
let car: Car = new Car();

// Object literal annoation 
let point: { x:number; y:number; } = {
  x: 10,
  y: 20
};

// Function annotations
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. Function that returns the `any` type
const json = '{"x": 10, "y": 20}';
const coordinates: { x:number, y:number } = JSON.parse(json);
console.log(coordinates);

// 2. When we delcare a variable on one line, and intialize it later. 
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i of words) {
  if(words[i] === 'green') {
    foundWord = true;
  }
};

// 3. Variable whose type cannot be inferred correctly.
let numbers = [-10, -1, 12];
// Var can be either a boolean OR a number.
let numberAboveZero: boolean | number = false;

for(let i of numbers) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
  };
};