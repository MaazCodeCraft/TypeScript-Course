"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a circle');
    }
}
let circle = new Circle(2.5, 'red');
//# sourceMappingURL=index.js.map