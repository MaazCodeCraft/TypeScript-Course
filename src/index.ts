type ComponentOptions = {
    selector: string;

}

// Decorator Factory
function Component (options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component Decorator Called');
        constructor.prototype.option = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting in the DOM');
        }
    }
}


@Component({selector: '#my-profile'})
class ProfileComponent {
}