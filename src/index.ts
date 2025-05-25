//Unknown Type

function render (document: any){
    document.move();
    document.fly();
    document.whateverWeWant();
}

function renderUn (document: unknown){
    //Narrowing
    if (document instanceof WordDocument){
        document.toUpperCase();
    }
    document.move();
    document.fly();
    document.whateverWeWant();
}