function Sauce(sauce: string) {
    return(constructor: Function) => {
        constructor.prototype.sauce = sauce;
    }
}

@Sauce('pesto') 
class Pizza {
} 