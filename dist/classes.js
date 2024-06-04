"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return '${this.name} is now registred';
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'shawn', 'Developer');
console.log(emp.name);
const brand = new Person(1, 'Sugira Prince');
console.log(brand);
console.log(brand.register());
