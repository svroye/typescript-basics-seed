class Sizes {

    // protected means that the variable can only be accessed in this class and its subclasses
    constructor(protected sizes: string[]){}

    // setter; always public
    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    // getter; always public
    get availableSizes(){
        return this.sizes;
    }
}



// classes can also extend other classes
class Pizza extends Sizes {

    // class variables, can be private or public. Default is public
    name: string;
    toppings: string[];

    // initiate an object of this class
    // super() has to be called with correct arguments
    // sizes, without a keyword public or private, points to the class variable of the super class
    constructor(name: string, sizes: string[]) {
        super(sizes);
        this.name = name;
        this.toppings = [];
    }

    // methods of this object, can be private or public. Default is public
    addTopping(topping: string) {
        this.toppings.push(topping);
    }

    updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}



class Pizza2 {

    // short way of initializing a class variable
    // readonly variable cannot be changed
    constructor(readonly name: string){}
}


// example of getters and setters
const sizes = new Sizes(['small', 'medium']);
sizes.availableSizes = ['medium', 'large'];
console.log(sizes.availableSizes);

// create instance of a class that extends from another class
const pizza = new Pizza('Pepperoni', sizes.availableSizes);
pizza.addTopping('bacon');
console.log(pizza);



// abstract class; cannot be initiated
abstract class Sizes2 {
    constructor(public sizes: string[]){}
}



// implementing an interface
interface SizesInterface {
    // points to the getter and setter OR to the variable
    availableSizes: string[];

    // points to a function
    numberOfSizes(): number;
}

// interfaces can extend other interfaces
interface AdvancedSizesInterface extends SizesInterface {
    description: string;
}


class newSizes implements SizesInterface {
    
    // you cannot add protected and private variables to the interface
    constructor(protected sizes: string[]){}

    // availableSizes from the interface points here to the setter and getter
    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }

    get availableSizes(){
        return this.sizes;
    }

    numberOfSizes(){
        return this.sizes.length;
    }
}

class MoreSizes implements AdvancedSizesInterface {

    // availableSizes from the interface points here to the variable
    constructor(public description: string, public availableSizes: string[]){}

    numberOfSizes() {
        return this.availableSizes.length;
    }

}




// static properties and methods, belong to the class, not to an instance of it
class Coupon {

    // static member
    static allowed = ['Pepperoni', 'Hawaii'];

    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

Coupon.create(20);