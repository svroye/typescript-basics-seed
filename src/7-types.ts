/**
 * TYPES
 */

 
 // ******************************************
 // NUMBER
 // ******************************************

// type inferring
let pizzaCost = 15;

// specify the type yourself
let pizzaTopping: number = 5;

// for a function, you need to explicitly give the type
// the return type can either by explicitly given or is
// inferred by TS
function calculatePrice(cost: number, toppings: number): number {
    return cost + toppings * 1.5;
}

let cost: number = calculatePrice(pizzaCost, pizzaTopping);
// ES6 notation for variables inside a string
console.log(`Pizza costs ${cost}`);

// ******************************************
// STRING
// ******************************************

const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage);

// ******************************************
// BOOLEAN
// ******************************************
const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
    return orders >= 3;
}

if (offerDiscount(pizzas)){
    console.log(`You get a discount!`);
} else {
    console.log("No discount for you.")
}



// ******************************************
// ANY
// ******************************************

// inferred by default when no type is specified or when no value is assigned
// to the variable. Can also be specified yourself. Use as less as possible
let voucher: any;

voucher = 25;
voucher = '25';
voucher = true;



// Implicit vs Explicit
let implicitCoupon = 'pizza25';
let explicitCoupon: string = 'pizza25';

// ******************************************
// VOID
// ******************************************

let selectedTopping: string = 'pepperoni';

// only used for function return type
function selectTopping(topping: string): void {
    selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);


// ******************************************
// NEVER
// ******************************************

// telling TSC that the value will never occur
// used in functions when the return type actually never returns anything
// e.g. when an error is thrown


// ******************************************
// NULL, UNDEFINED
// ******************************************

// to allow a value to be a certain type and/or null/ undefined
// you need to specify this explicitly
let mess: string | null | undefined= "coupon";

function resetCoupon(){
    mess = undefined;
}


// ******************************************
// UNION AND LITERAL TYPE
// ******************************************

let pizzaSize: string = 'small';

// union specifies which values an argument can take
// also works for numbers, booleans and enums
function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('medium');

console.log(`Pizza size is ${pizzaSize}`);



// ******************************************
// FUNCTION TYPES
// ******************************************

// you can explicitly give the type Function to a variable
let functionInVariable: Function;

let arrayFunction: (price: number, quantity: number) => number; 

// named function.
function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

console.log(sumOrder(5,3));

// named function in variable
functionInVariable = function (price: number, quantity: number): number {
    return price * quantity;
}

console.log(functionInVariable(5,2));

// array function. Argument and return types can be ommitted since they were already defined above
arrayFunction = (price, quantity) =>  price * quantity;

console.log(arrayFunction(5, 4));


// ******************************************
// OBJECT 
// ******************************************

let pizza: {name: string, price: number, getName(): string} = {
    name: "pepperoni",
    price: 20,
    getName() {
        return this.name
    } 
};

console.log(pizza.getName());


// ******************************************
// Array types and generics
// ******************************************

// can be done for any data type: string, number, boolean, function, own object, ...
const sizes: string[] = ['small', 'medium', 'large'];

const numberSizes: number[] = [1, 2, 3];

let toppings: Array<string>;

toppings = ['pepperoni', 'tomato', 'bacon'];


// a tuple allows us to suggest to TS that we have some kind of data structure in an array which
// is made up of different types

// order needs to match!
let otherPizzas: [string, number, boolean]  = ['Pepperoni', 20, true];





















