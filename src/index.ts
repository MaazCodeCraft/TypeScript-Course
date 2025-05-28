function Component (constructor: Function){
    console.log('Component Decorator Called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting in the DOM');
    }
}

@Component
class ProfileComponent {
}