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
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Maaz', 0);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map