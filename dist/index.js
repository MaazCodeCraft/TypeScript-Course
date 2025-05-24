"use strict";
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
}
greet(null);
greet(undefined);
greet("Maaz");
//# sourceMappingURL=index.js.map