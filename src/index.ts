function Capitalize (target: any, methodName: string, descriptor: PropertyDescriptor){
    const orignal = descriptor.get;
    descriptor.get = function () {
        const result = orignal?.call(this);
        return (typeof result === "string")? result.toUpperCase() : result;
    }
} 

function lowerCase (target: any, methodName: string, descriptor: PropertyDescriptor){
    const orignal = descriptor.get;
    descriptor.get = function () {
        const result = orignal?.call(this);
        return (typeof result === "string")? result.toLowerCase() : result;
    }
} 

class Person {
    constructor(public firstName: string, public lastName: string) {}

    @lowerCase
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person{
    constructor(public rollNo: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    @Capitalize
    override get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Teacher extends Person{
    constructor(public id: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    @Capitalize
    override get fullName () {
        return `Prof. ${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('Maaz', 'ur Rahman');
let student = new Student(5, 'Maaz', 'ur Rahman');
let teacher = new Teacher(5, 'Maaz', 'ur Rahman');
console.log(person.fullName);
console.log(student.fullName);
console.log(teacher.fullName);
