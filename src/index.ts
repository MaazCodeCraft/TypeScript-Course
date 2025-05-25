class Account {
    nickName?: string; //optional

    constructor (
        public readonly id: number, 
        public owner: string, 
        private _balance: number ) {
    }

    deposit (amount: number) : void {
        // this.id = 0;
        if (amount <= 0){
            throw new Error ('Invalid Amount');
        }
        this._balance += amount;
    }

    /*
    private calculateTax () {
        
    }
    */
   
    getBalance (): number {
        return this._balance;
    }
}

let account = new Account (1, 'Maaz', 0);
// account.id = 0;
console.log(account.getBalance());