type Employees = {
    readonly id: number,
    name: string,
    dateFunc: (date: Date) => void 
}

let employee: Employees = {
    id: 1,
    name: "Maaz",
    dateFunc: (date: Date) => {
        console.log(date);
    }
};