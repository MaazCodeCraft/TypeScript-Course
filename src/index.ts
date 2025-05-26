class KeyValuePair <K, V> {
    constructor (public key: K, public value: V) {}
}
//Beauty of genric Classes
let pair = new KeyValuePair ('1', 'Apple');
pair.key.toLocaleLowerCase ();
pair.value.toUpperCase();