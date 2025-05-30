"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Capitalize(target, methodName, descriptor) {
    const orignal = descriptor.get;
    descriptor.get = function () {
        const result = orignal?.call(this);
        return (typeof result === "string") ? result.toUpperCase() : result;
    };
}
function lowerCase(target, methodName, descriptor) {
    const orignal = descriptor.get;
    descriptor.get = function () {
        const result = orignal?.call(this);
        return (typeof result === "string") ? result.toLowerCase() : result;
    };
}
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    lowerCase
], Person.prototype, "fullName", null);
class Student extends Person {
    rollNo;
    constructor(rollNo, firstName, lastName) {
        super(firstName, lastName);
        this.rollNo = rollNo;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Student.prototype, "fullName", null);
class Teacher extends Person {
    id;
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    get fullName() {
        return `Prof. ${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Teacher.prototype, "fullName", null);
let person = new Person('Maaz', 'ur Rahman');
let student = new Student(5, 'Maaz', 'ur Rahman');
let teacher = new Teacher(5, 'Maaz', 'ur Rahman');
console.log(person.fullName);
console.log(student.fullName);
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map