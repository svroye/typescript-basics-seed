/*****************************************
 * ARROW FUNCTIONS
 ******************************************/

/** 
 
const pizzas = [ 
    {
        name: "pepperoni", toppings: ["pepperoni"]
    }
];

// old JS
const mappedPizzas = pizzas.map(function(pizza, index) {
    return index + ': ' + pizza.name.toUpperCase();
});

// TS
const mappedPizzasNew = pizzas.map((pizza, index) => index + ': ' + pizza.name.toUpperCase());

console.log(mappedPizzas);
console.log(mappedPizzasNew);

const pizza = {
    name: "Hawaii",
    getNameOld: function() {
        console.log(this);
    },
    getNameNew: () => pizza.name // no new scope, so 'this' does not exist here
    ,
    timeOutOld: function(){
        const self = this;
        setTimeout(function() {
            // we need to assign 'this' to a variable to access it inside this function
            console.log(self);
        }, 100);
    },
    timeOutNew: function(){
        setTimeout(() => {
            // with arrow functions, we can directly access 'this', because they don't introduce 
            // a new scope
            console.log(this)
        }, 100);     
    }
}

pizza.getNameOld();
pizza.getNameNew();
pizza.timeOutOld();
pizza.timeOutNew();
 */
