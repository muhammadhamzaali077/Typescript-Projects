#! /usr/bin//env node

import inquirer from "inquirer";

const answer: {
  num1: number;
  num2: number;
  operator: string;
} = await inquirer.prompt([
  {
    message: "Enter your first number",
    type: "number",
    name: "num1",
  },
  {
    message: "Enter your second number",
    type: "number",
    name: "num2",
  },
  {
    message: "Select your operation",
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/"],
  },
]);

const { num1, num2, operator } = answer;
if (num1 && num2 && operator) {
  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  console.log(`your result is "${result}"`);
} else {
  console.log("Kindly select correct input");
}
