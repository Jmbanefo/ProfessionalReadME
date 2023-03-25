// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./Develop/utils/generateMarkdown')
const fs = require('fs') 

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input', 
    message: "What is the project's title?", 
    name: 'title',
},

{ 
    type: 'input', 
    message: "Please provide a short description explaining the what, why, and how of the project:",
    name: 'description', 
},

{ 
    type: 'input',
    message: "Please describe the step-by-step instructions on how to install your project:", 
    name: "setup"
},

{
    type: 'input',
    message: 'Please provide instructions and examples of use for the project:',
    name: 'usage',
},

{
    type: 'input',
    message: 'Please provide links to collaborators, third-pary assets, and tutorials that contributed to the project:',
    name: 'credits'
},

{ 
    type: 'input',
    message: 'Please provide instructions on how to test the application:',
    name: 'testing',
},

{ 
    type: 'list', 
    message: "What license would you like to choose?", 
    name: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"],
},

{ 
    type: 'input', 
    message: 'Please provide your Github username:',
    name: 'username',

},

{
    type: 'input', 
    message: 'Please provide your email:',
    name: 'email', 
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, generateMarkdown(data), (err) =>
err? console.log(err) : console.log('Successfully written to file'))
}

// TODO: Create a function to initialize app WHY QUESTIONS WHYY answer WHY CAPITAL README
function init() {
inquirer.promt(questions)
    .then (answer => {
        console.log(answer)
        writeToFile(('READMEDRAFT.md', answer))
    })
}

// Function call to initialize app
init();
