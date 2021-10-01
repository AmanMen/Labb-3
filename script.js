/*const chalk = require('chalk');


console.log(chalk.red('Hello world!'));
*/


let name = "Lina, Bob, Fred";


let number = 1;


let labb = false;


let fruit = ["apple", "orange","mango"];

function greet(name) {
    console.log('Hello ' + name);
  }

greet('hello','Bob');

let arrayLength = fruit.length;
for (let i = 0; i < arrayLength; i++){
    console.log(fruit[i]);
}

if (labb) {
    console.log("bob likes mango");
} else {
    console.log("bob doesn't like mango");
}