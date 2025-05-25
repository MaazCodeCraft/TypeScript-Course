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
        console.log("Taking a test");
    }
}
let student = new Student(1, 'Maaz', 'Ur Rahman');
console.log(student.fullName);
//# sourceMappingURL=index.js.map