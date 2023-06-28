// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Git username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What license are you using for your project?',
        choices: ['Apache 2.0', 'GNU General Public v3.0', 'MIT', 'Boost Software', 'Mozilla Public 2.0', 'No License'],
    },
    // {
    //     type: 'input',
    //     name: 'name',
    //     message: 'What is your name?'
    // },
    // {
    //     type: 'checkbox',
    //     name: 'languages',
    //     message: 'What langauges do you know?',
    //     choices: ['html', 'CSS', 'JavaScript', 'MySQL']
    // },
    // {
    //     type: 'list',
    //     name: 'contact',
    //     message: 'What is your preferred method of communication?',
    //     choices: ['email', 'phone', 'telekinesis'],
    // },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join());

}

// TODO: Create a function to initialize app
function init() {
    // .prompt(questions)
}

// Function call to initialize app
init();
