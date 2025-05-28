function Log (target: any, methodName: string, descriptor: PropertyDescriptor){
    const orignal = descriptor.value as Function;
    descriptor.value = function (...args: string) {
        console.log('Before');
        orignal.call(this, ...args);
        console.log('After');
    }
}

class Person {
    @Log
    say (message: string) {
        console.log('Person says ' + message);
    }
}

let peron = new Person ();
peron.say('Hello');