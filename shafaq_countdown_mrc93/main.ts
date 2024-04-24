#! /usr/bin/env node 
//importing chalk and inquirer pakages
import inquirer from "inquirer";
import chalk from "chalk"

//display a colourfull Welcome message
console.log(chalk.bold.cyanBright("\n \t\t Code with Shafaq Anees - Word Counter"));
console.log("=".repeat(65));

//prompt the user to enter a sentence
let answer = await inquirer.prompt([

    {
        name:"sentence",
        type:"input",
        message:"Enter a Sentence",
    }
])
//Trimming the sentence and splitting into words based on "spaces"
let words = answer.sentence.trim().split(" ")

//Analysis of user input sentences
console.log("=".repeat(65));
console.log(chalk.bold(" - Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - word Count:${chalk.bold.red(words.length)}`));
console.log("=".repeat(65));