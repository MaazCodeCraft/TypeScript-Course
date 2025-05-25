"use strict";
class Account {
    id;
    owner;
    balance;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid Amount');
        }
        this.balance += amount;
    }
}
let account = new Account(1, 'Maaz', 0);
//# sourceMappingURL=index.js.map