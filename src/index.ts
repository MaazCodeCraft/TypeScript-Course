class ArrayUtils  {
    static wrapInArray <T> (value: T) {
        return [value];
    }
}

let numbers = ArrayUtils.wrapInArray (1); //let numbers: number[] 
let number2 = ArrayUtils.wrapInArray ('1'); //let number2: string[]