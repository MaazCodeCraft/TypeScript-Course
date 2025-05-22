let employee: {
    readonly id: number,
    name: string,
    dateFunc: (date: Date) => void
} = {
    id: 1,
    name: "Maaz",
    dateFunc: (date: Date) => {
        console.log(date);
    }
};