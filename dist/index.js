"use strict";
class Account {
    id;
    owner;
    _balance;
    nickName;
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid Amount');
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid Value");
        }
        this._balance = value;
    }
}
let account = new Account(1, 'Maaz', 0);
account.balance = 1;
//# sourceMappingURL=index.js.map