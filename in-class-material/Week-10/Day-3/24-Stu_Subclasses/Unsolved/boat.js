// TODO: Import the parent class
const vehicle = require('./vehicle');
// TODO: Create a `Boat` class that extends the `Vehicle` class
class Boat extends vehicle {
  constructor(id, type, crew) {
    super(id, 0, 'bwom');
    this.type = type;
    this.crew = crew;
  }

}
const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();



// class Rectangle extends Shape {
//   constructor(sideA, sideB) {
//     const area = sideA * sideB;
//     const perimeter = sideA * 2 + sideB * 2;

//     super(area, perimeter);
//     this.sideA = sideA;
//     this.sideB = sideB;