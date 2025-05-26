class Person {
    constructor (
        public firstName: string, 
        public lastName: string
    ) {}

    get fullName () {
        return this.firstName + ' ' + this.lastName;
    }

    talk () {
        console.log("Talking");
    }

    walk () {
        console.log("Walking");
    }
}

class Student extends Person {
    constructor (
        public studentID: number,
        firstName: string,
        lastName: string
    ) {
        super(firstName, lastName);
    }

    takeTest () {
        console.log("Taking a test");
    }
}

class Teacher extends Person {
    override get fullName () {
        return 'Prof. ' + super.fullName;
    }
}

let teacher = new Teacher ('jhon', 'smith');
console.log(teacher.fullName);