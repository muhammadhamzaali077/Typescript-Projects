import chalk from "chalk";
import inquirer from "inquirer";
let apiLink = "https://v6.exchangerate-api.com/v6/9d4613ccf6c58bc3aed47e15/latest/PKR";
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let response = await fetchData.json();
    return response.conversion_rates;
};
let data = await fetchData(apiLink);
let countries = Object.keys(data);
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting From:",
    choices: countries,
});
let userMoney = await inquirer.prompt({
    type: "number",
    name: "money",
    message: `Please enter the amount in ${chalk.bold.greenBright(firstCountry.name)}:`,
});
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting To:",
    choices: countries,
});
let cnv = `https://v6.exchangerate-api.com/v6/9d4613ccf6c58bc3aed47e15/pair/${firstCountry.name}/${secondCountry.name}`;
let cnvData = async (data) => {
    let cnvData = await fetch(data);
    let response = await cnvData.json();
    return response.conversion_rate;
};
let conversionRate = await cnvData(cnv);
let convertedRates = userMoney.money * conversionRate;
console.log(`Your ${chalk.bold.blueBright(firstCountry.name)} ${chalk.bold.blueBright(userMoney.money)} in ${chalk.bold.blueBright(secondCountry.name)} is ${chalk.bold.blueBright(convertedRates)}:`);
