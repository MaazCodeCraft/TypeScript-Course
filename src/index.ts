class KeyValuePair {
    constructor (public key: number | string, public value: string) {}
}

class StringKeyValuePair {
    constructor (public key: string, public value: string){}
}

let pair = new StringKeyValuePair ('1', 'Apple');
// pair.key.toUpperCase ();