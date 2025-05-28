interface Product {
    name: string;
    price: number;
}

type ReadOnly<T> = {
    //Type Mapping
    readonly [K in keyof T]: T[K];
}

type Optional<T> = {
    [K in keyof T]?: T[K];
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
}

let product: ReadOnly <Product> = {
    name: 'a',
    price: 100
}

// product.name = 'a'; //Cannot assign to 'name' because it is a read-only property.