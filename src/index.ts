//Q1
/*
class Logger {
    constructor (public logFile: string) {}
    
    log (message: string){}
} 
*/

//Q2
class Person {
    constructor(public firstName: string, public lastName: string) {}
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Q3
class Employee extends Person{
    constructor (
        public salary: number, 
        firstName: string, 
        lastName: string) {
        super (firstName, lastName);
    }
}

//Q4
interface Employee {
    name: string,
    salary: number,
}

interface address {
    street: string,
    city: string,
    zipCode: number
}