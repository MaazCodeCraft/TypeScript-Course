function kgToLbs (weight: number | string): number {
    //narrowing
    if (typeof weight === "number"){
        // weight.toFixed();
        return weight * 2.2;
    } else {
        // weight.toLocaleLowerCase();
        return parseInt(weight) * 2.2
    }
}

console.log(kgToLbs (10)); //22
console.log(kgToLbs ('10kg')); //22