#! /usr/bin/env node

import * as readline from "readline";

interface GameOptions {
  minRange: number;
  maxRange: number;
  maxAttempts: number;
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGuessTheNumberGame(options: GameOptions): void {
  const secretNumber = generateRandomNumber(options.minRange, options.maxRange);
  let attempts = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(`Welcome to the Guess the Number game!`);
  console.log(
    `I'm thinking of a number between ${options.minRange} and ${options.maxRange}.`
  );

  rl.on("line", (input) => {
    const guess = parseInt(input);

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
    } else {
      attempts++;

      if (guess === secretNumber) {
        console.log(
          `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`
        );
        rl.close();
      } else if (attempts === options.maxAttempts) {
        console.log(
          `Sorry, you've reached the maximum number of attempts. The secret number was ${secretNumber}.`
        );
        rl.close();
      } else if (guess < secretNumber) {
        console.log("Try a higher number.");
      } else {
        console.log("Try a lower number.");
      }
    }
  });
}

const gameOptions: GameOptions = {
  minRange: 1,
  maxRange: 100,
  maxAttempts: 10,
};

playGuessTheNumberGame(gameOptions);
