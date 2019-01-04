/**
 * INTERFACES
 */

// preferred over the type alias

interface Sizes {
    sizes: string[];
}

// interfaces can extend other interfaces
// and can define optional parameters with a '?'
interface Pizza extends Sizes{
    name: string;
    toppings?: number;
    getAvailableSizes(): string[];
    [key: number]: string;
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name, 
        sizes, 
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza("pepperoni", ["small", "medium", "large"]);
pizza.toppings = 1;
pizza[1] = "xyz";