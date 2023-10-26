import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.life = 100;
        this.name = name;
    }
    lifeDecrease() {
        let life = this.life - 20;
        this.life = life;
    }
    lifeIncrease() {
        this.life = 100;
    }
}
class Opponent extends Player {
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter Your Name",
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "Select",
    message: "Select Your Opponent:",
    choices: ["Serial Killer", "Zombie", "Murderer"],
});
let player1 = new Player(player.name);
let opponent1 = new Opponent(opponent.Select);
do {
    // Serial Killer
    if (opponent.Select === "Serial Killer") {
        let asking = await inquirer.prompt({
            type: "list",
            name: "option",
            message: `What yo wnat to do Against ${opponent.Select}?`,
            choices: ["Attack", "Drink Energy", "Run for your Life"],
        });
        if (asking.option === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                player1.lifeDecrease();
                console.log(chalk.bold.red(`${player1.name}'s life is ${player1.life}`));
                console.log(chalk.bold.green(`${opponent1.name} life is ${opponent1.life}`));
                if (player1.life <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."));
                    process.exit();
                }
            }
            if (number <= 0) {
                opponent1.lifeDecrease();
                console.log(chalk.bold.green(`${player1.name} life is ${player1.life}`));
                console.log(chalk.bold.red(`${opponent1.name}'s life is ${opponent1.life}`));
                if (opponent1.life <= 0) {
                    console.log(chalk.green.bold.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (asking.option == "Drink Energy") {
            player1.lifeIncrease();
            console.log(chalk.bold.italic.green(`${player1.name}'s life increased to ${player1.life}`));
        }
        if (asking.option == "Run for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."));
            process.exit();
        }
    }
    // Zombie
    if (opponent.Select === "Zombie") {
        let asking = await inquirer.prompt({
            type: "list",
            name: "option",
            message: `What yo wnat to do Against ${opponent.Select}?`,
            choices: ["Attack", "Drink Energy", "Run for your Life"],
        });
        if (asking.option === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                player1.lifeDecrease();
                console.log(chalk.bold.red(`${player1.name}'s life is ${player1.life}`));
                console.log(chalk.bold.green(`${opponent1.name} life is ${opponent1.life}`));
                if (player1.life <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."));
                    process.exit();
                }
            }
            if (number <= 0) {
                opponent1.lifeDecrease();
                console.log(chalk.bold.green(`${player1.name} life is ${player1.life}`));
                console.log(chalk.bold.red(`${opponent1.name}'s life is ${opponent1.life}`));
                if (opponent1.life <= 0) {
                    console.log(chalk.green.bold.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (asking.option == "Drink Energy") {
            player1.lifeIncrease();
            console.log(chalk.bold.italic.green(`${player1.name}'s life increased to ${player1.life}`));
        }
        if (asking.option == "Run for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."));
            process.exit();
        }
    }
    // Murderer
    if (opponent.Select === "Serial Killer") {
        let asking = await inquirer.prompt({
            type: "list",
            name: "option",
            message: `What yo wnat to do Against ${opponent.Select}?`,
            choices: ["Attack", "Drink Energy", "Run for your Life"],
        });
        if (asking.option === "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                player1.lifeDecrease();
                console.log(chalk.bold.red(`${player1.name}'s life is ${player1.life}`));
                console.log(chalk.bold.green(`${opponent1.name} life is ${opponent1.life}`));
                if (player1.life <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."));
                    process.exit();
                }
            }
            if (number <= 0) {
                opponent1.lifeDecrease();
                console.log(chalk.bold.green(`${player1.name} life is ${player1.life}`));
                console.log(chalk.bold.red(`${opponent1.name}'s life is ${opponent1.life}`));
                if (opponent1.life <= 0) {
                    console.log(chalk.green.bold.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (asking.option == "Drink Energy") {
            player1.lifeIncrease();
            console.log(chalk.bold.italic.green(`${player1.name}'s life increased to ${player1.life}`));
        }
        if (asking.option == "Run for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time."));
            process.exit();
        }
    }
} while (true);
