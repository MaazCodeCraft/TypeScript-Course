// abstract class Calculator {
//     constructor (public name: string) {}

//     abstract addEvents (): void
//     abstract removeEvents (): void
// }

interface Calender {
    name: string;
    addEvents (): void;
    removeEvents (): void;
}

interface CloudCalender extends Calender {
    sync () : void;
}

class GoogleCalender implements Calender{
    constructor (public name: string) {};
    addEvents(): void {
        throw new Error("Method not implemented.");
    }
    removeEvents(): void {
        throw new Error("Method not implemented.");
    }
 
}