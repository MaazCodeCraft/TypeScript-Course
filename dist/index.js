"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
echo({ name: "Maaz" });
echo(new Person('Maaz'));
echo(new Customer('Maaz'));
//# sourceMappingURL=index.js.map