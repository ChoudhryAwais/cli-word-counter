#! /usr/bin/env node
import inquirer from "inquirer";
let para = await inquirer.prompt([
    {
        name: "para",
        message: "Enter the paragraph:",
        type: "string",
    },
]);
const totalWords = para.para.split(" ");
const totalCharacters = totalWords.join("");
console.log("Total Words in paragraph:", totalWords.length);
console.log("Total Characters in paragraph:", totalCharacters.length);
