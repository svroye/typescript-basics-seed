/**
 * type alias and assertions
 */

 // create your own type alias and assign it any value, e.g. string, number, union, ...

 /**
 type Size = 'small' | 'medium' | 'large';
 type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize = (size: Size) => {
    pizzaSize = size;
}

const selectSize2: Callback = x => pizzaSize = x;

selectSize('large');
console.log(pizzaSize);
selectSize2('medium');
console.log(pizzaSize);


// type assertions

type Pizza = {name: string, toppings: number};

const pizza: Pizza = {name: 'pepperoni', toppings: 5};

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string): Pizza {
    // old way
    //return (<Pizza>JSON.parse(obj));

    // new and preferred way
    return (JSON.parse(obj) as Pizza);
}

 */