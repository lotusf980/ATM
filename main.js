#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter user ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your pin",
    },
    {
        type: "list",
        name: "accountType",
        message: "select your account type",
        choices: ["current", "saving", "fixed"],
    },
    {
        type: "list",
        name: "transactionType",
        message: "select your transaction",
        choices: ["check balance", "withdraw cash", "Fast cash"],
    },
    {
        type: "list",
        name: "amount",
        message: "select your amount",
        choices: ["5,000", "10,000", "20,000"],
        when(userInput) {
            return userInput.transactionType === "Fast cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter amount  you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "withdraw cash";
        }
    },
]);
// making variables of user input data
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredAmount = userInput.amount;
if ((userID && userPin) && userInput.transactionType === "check balance") {
    const userBalance = Math.floor(Math.random() * 50000);
    console.log(`your current balance is Rs ${userBalance}\n`);
}
else if (userID && userPin) {
    const userBalance2 = Math.floor(Math.random() * 50000);
    if (userBalance2 > enteredAmount) {
        console.log(`your account has been debited with Rs ${enteredAmount} and your remaing balance is ${userBalance2 - enteredAmount}`);
    }
    else {
        console.log(`\n insufficient Balance`);
    }
}
