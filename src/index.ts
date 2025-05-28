interface Product {
    name: string;
    price: number;
}

class Store <T> {
    protected _object: T[] = [];

    add (obj: T) : void {
        this._object.push(obj);
    }
}

//Pass on the generic type perameter 
class CompressibleStore<T> extends Store <T>{
    compress () {}
}

//Restrict the generic type perameter 
class SearchableStore<T extends { name: string }> extends Store <T> {
    find (name: string): T | undefined {
        return this._object.find (obj => obj.name === name);
    }
}

//Fiz the generic type perameter
class ProductStore extends Store <Product> {
    filterByCategory (category: string): Product [] {
        return [];
    }   
}

let store = new CompressibleStore<Product>();
store.compress();