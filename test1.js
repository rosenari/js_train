function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

Person.prototype.sayHello = function () {
    console.log(this.name + ": " + "무야호~");
}

var jangsoon = new Person("Jangsoon", "m");
var nari = new Person("Nari", "w");

jangsoon.sayHello();
nari.sayHello();

console.log("Person.prototype.constructor === Person");
console.log(Person.prototype.constructor === Person);
console.log("Person.prototype === new Person().__proto__");
console.log(Person.prototype === new Person().__proto__);
console.log("new Person().__proto__.constructor === Person");
console.log(new Person().__proto__.constructor === Person);
