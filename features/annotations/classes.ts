class Vehicle {

  // The first argument provided to construtor, will be assigned as an instance variable to the Vehicle that we are instantiating. 
  constructor(public color: string) { };
  protected honk(): void {
    console.groupCollapsed(`Beep Beep!`)
  }
};

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
    // A super() call to the parent class must be invoked inside the child class' contructor.
    // The super() method must accept the same argument that are required by the parent constructor.   
    super(color); 
  };
  private drive(): void {
    console.log(`Vroom!!`);
  };
  startDrive(): void {
    this.drive();
    this.honk();
  }
};

const vehicle = new Car(4, 'orange');
vehicle.startDrive();
