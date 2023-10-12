const inquirer = require('inquirer');
const fs = require('fs');

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
            message: 'Please provide a Table of Contents for your project.',
            name: 'table-of-contents',
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
            message: 'Please provide questions for your project.',
            name: 'questions',
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
  function generateFile(answers) {
    return `
    ${answers.title}
    ${answers.description}
    ${answers.tableofcontents}
    ${answers.installation}
    ${answers.usage}
    ${answers.license}
    ${answers.contributing}
    ${answers.tests}
    ${answers.questions}
    Link to GitHub Profile: https://github.com/${answers.github}
    For any more questions, you can reach me at ${answers.email}
    `;
}

receiveInputs()
    .then(generateFile)
    .then((readMeContent) => {
        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });