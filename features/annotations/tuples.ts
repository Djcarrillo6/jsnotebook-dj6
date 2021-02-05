// Tupples are array like data structure, in which the order of the elements in the tuple is critical to what is referneces. 

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// A tuple annotation after 'pepsi', which delcares the order required for the tuple's types. 1st - string, 2nd - bool, 3rd - number

// 'type' is used prior to the variable, which instructs TS that a Drink's tuple order is defined by the types in their correct order in the tuple. 
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 55];
const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['brown', false, 24];