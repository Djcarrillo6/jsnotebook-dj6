// Typed Arrays - Arrays where each element is some consistent value.

const carMakers = ['ford', 'chevy', 'toyota'];

const dates = [new Date(), new Date()];

// Two-Dimensional Array in TS
const carsByMake = [
  ['F-150'],
  ['corrola'],
  ['camaro']
];

// - TS can do type inference when extracting values from an array.
const car = carMakers[0];
const myCar = carMakers.pop();

// - TS can prevent us from adding incompatiable values to the array.
// carMakers.push(100);

// - We can get help with 'map', 'forEach', 'reduce' functions. 
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// - Flexibile Types - array can still contain multiple different types.
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');

// When to use typed arrays?
  // -  Any time we need to represent a collection of records with some arbitrary sort order.
