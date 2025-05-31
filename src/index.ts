type WacthedParameter = {
    methodName: string;
    parameterIdx: number;
}

const wacthedParameter: WacthedParameter[] = [];

function Watch (target: any, methodName: string, parameterIdx: number) {
    wacthedParameter.push({
        methodName,
        parameterIdx
    });
}

class Vehicle {
    move (@Watch speed: number) {}
}

console.log(wacthedParameter);
