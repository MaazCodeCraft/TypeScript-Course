"use strict";
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    talk() {
        console.log("Talking");
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    studentID;
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        this.walk();
        console.log("Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Prof. ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
printNames([
    new Student(1, 'Maaz', 'Ur Rahman'),
    new Teacher('Jhon', 'Smith'),
    new Principal('Mery', 'Smith')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map