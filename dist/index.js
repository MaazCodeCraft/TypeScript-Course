"use strict";
class Store {
    _object = [];
    add(obj) {
        this._object.push(obj);
    }
    find(property, value) {
        return this._object.find(obj => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: 'a', price: 100 });
store.find('name', 'a');
store.find("price", 1);
//# sourceMappingURL=index.js.map