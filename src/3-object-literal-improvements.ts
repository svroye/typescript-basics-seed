/**
 * OBJECT LITERAL IMPROVEMENTS
 */


/**
const pizzaPepperoni = {
    name:'Pepperoni',
    price: 15,
    // short way of introducing a getter in an object in ES6
    getName() {
        return this.name;
    }
};

console.log(pizzaPepperoni.getName());
const toppings = ['pepperoni'];

// old notation
const orderOld = {
    pizza: pizzaPepperoni,
    toppings: toppings
};

// new notation for creating new object based on other objects
const orderNew = {pizzaPepperoni, toppings};
console.log(orderOld);
console.log(orderNew);
*/