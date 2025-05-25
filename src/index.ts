class Account {
    nickName?: string; //optional

    constructor (
        public readonly id: number, 
        public owner: string, 
        private _balance: number ) {
    }

    deposit (amount: number) : void {
        if (amount <= 0){
            throw new Error ('Invalid Amount');
        }
        this._balance += amount;
    }
   
    get balance (): number {
        return this._balance;
    }
   
    set balance (value: number) {
        if (value < 0){
            throw new Error ("Invalid Value");
        }
        this._balance = value;
    }
}

let account = new Account (1, 'Maaz', 0);
account.balance = 1;