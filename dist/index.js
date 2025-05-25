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
//# sourceMappingURL=index.js.map