"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
let log = null;
console.log(log?.('a'));
//# sourceMappingURL=index.js.map