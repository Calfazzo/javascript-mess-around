// First Javascript code
console.log('Hello World');

//this is an object
let dog = {
    name: 'Pip',
    age: 7
};

console.log(dog.name);

//this is an array
let colors = ['green', 'blue', 'red'];

console.log(colors);

//first function
function greet(firstName, lastName){
    console.log('Hello ' + firstName + ' ' + lastName);
}

greet('Bob', 'Bobsworth');

function square(number){
    return number * number;
}

console.log(square(4));

//ternary operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

let skilled = true;
let winner = skilled && type === 'gold';

console.log(winner);

//test to swap variables
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);