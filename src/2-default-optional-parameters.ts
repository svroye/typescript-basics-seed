
/*************************************
 * Default and optional function parameters
 ***************************************/

/**
function multiply(a: number, b = 25) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5,2));


// optional arguments are denoted with a '?'
function optionalArguments(x: number, y?: number): number {
    if (y) {
        return x * y;
    }
    return x;
}

console.log(optionalArguments(5));
console.log(optionalArguments(5,10));
 */