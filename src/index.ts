// For each of these values, what type will the TypeScript compiler infer?
let a = 100;  
let b = 'Coffee';  
let c = [true, false, false];  
let d = {
    age: 5
}; 
let e = [3]; 
let f; 
let g = [];

// What are the compilation errors in each of the following code snippets?
let song: {    
    title: string,   
    // releaseYear: number 
} = { 
    title: 'My song' 
};

let prices = [100, 200, 300]; 
// prices[0] = '$100';

// function myFunc(a: number, b: number): number { } 