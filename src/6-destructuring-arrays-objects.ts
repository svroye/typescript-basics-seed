/**
 * DESTRUCTURING ARRAYS AND OBJECTS
 */

 /** 
const pizza = {
    name: 'pepperoni',
    toppings: ['pepperoni']
};

// object destructuring in function argument
function order( {name: pizzaName , toppings: pizzaTopping} : any ){
    console.log(pizzaName, pizzaTopping)
    return {pizzaName, pizzaTopping};
}

// object destructuring
let {pizzaName, pizzaTopping } = order(pizza);
console.log(pizzaName, pizzaTopping);


const toppingsPizza = ['pepperoni', 'bacon', 'chili'];

// array destructuring in function argument
function logTop( [first, second, third]: any) {
    console.log(first, second, third);
}

// array destructuring
const [first, second, third] = toppingsPizza;
console.log(first, second, third);
logTop(toppingsPizza);

*/