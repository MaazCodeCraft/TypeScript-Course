interface Product {
    name: string;
    price: number;
}

class Store <T> {
    protected _object: T[] = [];

    add (obj: T) : void {
        this._object.push(obj);
    }

    //T is Product
    //keyof T => 'name' .|. 'price'
    find (property: keyof T, value: unknown): T | undefined {
        return this._object.find(obj => obj[property] === value);
    }
}

let store = new Store<Product>();
store.add({name: 'a', price: 100});
store.find('name', 'a');
store.find("price", 1);
// store.find("nonExistingProperty", 1); //Argument of type '"nonExistingProperty"' is not assignable to parameter of type 'keyof Product'.