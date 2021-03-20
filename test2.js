function Vehicle(name, speed) {
    this.name = name;
    this.speed = speed;
}

Vehicle.prototype.drive = function () {
    console.log(this.name + ' run at ' + this.speed);
}

var tico = new Vehicle('tico', 50);
tico.drive();

function Sedan(name, speed, maxSpeed) {
    Vehicle.apply(this, arguments);
    this.maxSpeed = maxSpeed;
}

Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.boost = function () {
    console.log(this.name + ' boost its speed at ' + this.maxSpeed);
}

var sonata = new Sedan('sonato', 100, 200);
sonata.drive();
sonata.boost();