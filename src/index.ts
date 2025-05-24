function greet (name: string | null | undefined): void {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hola!");
    }
}

greet (null); //Hola!
greet (undefined); //Hola!
greet ("Maaz"); //MAAZ