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

    protected walk () {
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
        this.walk ();
        console.log("Taking a test");
    }
}

class Teacher extends Person {
    override get fullName () {
        return 'Prof. ' + super.fullName;
    }
}

class Principal extends Person {
    override get fullName () {
        return 'Principal ' + super.fullName;
    }
}

printNames ([
    new Student(1, 'Maaz', 'Ur Rahman'),
    new Teacher ('Jhon', 'Smith'),
    new Principal ('Mery', 'Smith')
])

function printNames (people: Person []) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
