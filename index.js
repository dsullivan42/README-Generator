const inquirer = require('inquirer');
const fs = require('fs');


//function where user is prompted for inputs
function receiveInputs(){
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions for your project.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide usage information for your project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please provide Licensing information for your project.',
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines for your project.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please provide test instructions for your project.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please provide your GitHub username.',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please provide your email address.',
            name: 'email',
        },
    ]);
}
// function to generate and format the README file using the user inputs
  function generateFile(answers) {
    return `
    # ${answers.title}
    ----------------------------
    
        ## Description
            ${answers.description}
        ---------------------------------

        ## Table of Contents
        - installation
        - usage
        - license
        - contributing
        - tests
        - questions
        ---------------------------------

        ## Installation
            ${answers.installation}
        ---------------------------------

        ## Usage
            ${answers.usage}
        ---------------------------------

        ## License
            ${answers.license}
        ---------------------------------

        ## Contributing
            ${answers.contributing}
        ---------------------------------

        ## Tests
            ${answers.tests}
        ---------------------------------

        ## Questions
    
               - Link to GitHub Profile: https://github.com/${answers.github}
    
               - For any more questions, you can reach me at ${answers.email}
    `;
}
//calls the generateFile function and writes the README file
receiveInputs()
    .then(generateFile)
    .then((readMeContent) => {
        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });