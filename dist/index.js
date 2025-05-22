"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(10_000, 2029));
//# sourceMappingURL=index.js.map