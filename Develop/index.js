// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const { generateMarkdown } = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
inquirer.prompt([

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description for your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are some key notes and functionality features for your projects usage?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a licensing package for your project. If unsure or do not want to use one at this time, select none.',
        choices: ["MIT", "APACHE", "GPL", "BSD", "NONE"]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide input on any collaboration efforts toward your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Add specific instructions for testing your project. ',
    },

])
    


// function for creating the readme file

.then((answers) => {
    const readMeInput = generateMarkdown(answers);
    fs.writeFile('NewREADME.md', readMeInput, (err) => 
    err ? console.log(err) : console.log('Your file was created!')
    );
});


