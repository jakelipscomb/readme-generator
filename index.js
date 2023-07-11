// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./Develop/utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
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
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description on the purpose and functionality of your project.',
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What license are you using for your project?',
        choices: ['Apache_2.0', 'GPLv3', 'MIT', 'Boost_1.0', 'MPL_2.0', 'No License'],
    },
    {
        type: 'input',
        name: 'require',
        message: 'List any project dependencies that are being used.'
    },
    {
        type: 'input',
        name: 'languages',
        message: 'What langauges and/or technologies are you using in this project?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List any contributors that worked on this project using GitHub usernames. If none, type "none".'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide a short walkthrough of required tests used for this project. If none, type "none".'
    },

];

//Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log("Creating README.md file in docs folder...");
        writeToFile("./Develop/docs/README.md", generateMarkdown(res))
    })
    .catch((err) => {
        console.log(err);
    });
}

init();
