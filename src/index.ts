//Q1
type User = {
    name: string;
    age: number;
    occupation?: string;
};

//Given the data below, deﬁne a type alias for representing users.
let user : User[] = [
    {
        name: 'Jhon Smith',
        age: 30,
        occupation: 'Softwere Engineering'
    },
    {      
        name: 'Kate Müller',       
        age: 28   
    }
]

//Q2
//Birds ﬂy. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these 
type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

type pet = Bird | Fish;

//Q3
//Deﬁne a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

//Q4
//Simplify the following code snippets:
/*
let user = getUser(); 
console.log(user && user.address ? user.address.street : undefined); 
let x = foo !== null && foo !== undefined ? foo : bar(); 
*/

/* Answer
let user =  getUser ();
console.log(user?.address.?street);
let x = foo ?? bar();
*/

//Q5
// What is the problem in this piece of code?
/*
let value: unknown = 'a';
    console.log(value.toUpperCase());
*/


//Ans
let value: unknown = 'a';
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
