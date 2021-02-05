// Adding annotation to functions
// The arguments of a function, as well as it's return type, ALL need to be annotated! 
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b:number): number {
  return a/b;
};

const multiply = function(a:number, b:number): number {
  return a*b;
};


// Void Returns - When a function does not need to return any value. 
const logger = (message: string): void => {
  console.log(message);
};

// Never Returns  - When we never expect a function to return a value
const throwError = (message: string): never => {
  throw new Error(message);
};


// Destrucring w/Functions

/* Whenever we want to destructure properties directly from the arugument annotation list, we just replace the variable itself with the actual destructuring statement. */

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

// ( { Destrcutre Statement }: {argument list annotations} ): return type
const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};


// Annotations around Objects
const profile = {
  name: 'DJ',
  age: 33,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

// Desctrucring Objects 

/* When using destructuring is TS, annotating the object structure from which you are destructuring is required. In this case, I am destructuring 'age' from profile, which has a data structure of an object, which contains a property of type 'number'. */

const { age }: { age: number } = profile;

const { coords : { lat, lng} }: { coords: { lat: number; lng: number; } } = profile;

