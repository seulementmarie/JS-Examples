//create class Car
function Car(color, wheels, engine) {
    this.color = color;
    this.wheels = wheels;
    this.engine = engine;
};

var audi = new Car("red", 4, {volume: 2.0, power: 225});
var bmw = new Car("white", 4, {volume: 2.0, power: 194});
