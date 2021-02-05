// Interfaces - Creates a new type, describing the property names and values of an object.
// We can use the interface to refer to multiple objects containing different properties.  
interface Reportable {
  summary(): string;
};

const oldCivic = {
  name: 'civic',
  year: 200,
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  } 
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 23,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// Becase of the object interface Reportable, of which both `oldCivic` & `drink` are both matching types, we can call the function `printSummary()` on variables that share the same interface, but have different properties. 
// Now we have an interface object that can be used on any type of object that satisfies the `Reportable` interface. 
printSummary(oldCivic);
printSummary(drink);