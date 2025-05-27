/*
function echo <T extends number | string> (value: T): T {
    return value;
}

echo ('a');
echo (1);
//echo (true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
*/
class Person {
    constructor(public name: string) {}
}

class Customer extends Person{
}

function echo <T extends Person> (value: T): T {
    return value;
}

echo ({name: "Maaz"});
echo (new Person ('Maaz'));
echo (new Customer ('Maaz'));