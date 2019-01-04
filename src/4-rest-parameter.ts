/**
 * REST PARAMETER
 */

/**
 function sumAllOld(arr: number[]) {
    return arr.reduce( (prev, next) => prev + next);
 }

 // the rest parameter (...) will take all the arguments passed in to the function call
 // and puts them in a single array
 function sumAllNew(message: string, ...arr: number[]){
     console.log(message);
    return arr.reduce( (prev, next) => prev + next);
 }

 const sumOld = sumAllOld([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 const sumNew = sumAllNew("Hello", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

 console.log(sumOld);
 console.log(sumNew);

 */