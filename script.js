// const chalk = require('chalk');


// console.log(chalk.red('Hello world!'));


let name = "Lina, Bob, Fred";


let number = 1;


let labb = false;


let fruit = ["apple", "orange","mango"];

function greet(name, _question) {
    console.log('Hello', name + _question);
  }

greet('Bob', ' how are you');


let arrayLength = fruit.length;
for (let i = 0; i < arrayLength; i++){
    console.log(fruit[i]);
}

if (labb) {
    console.log("Bob likes mango");
} else {
    console.log("Bob doesn't like mango");
}