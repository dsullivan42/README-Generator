const inquirer = require('inquirer');
const fs = require('fs');

inquirer
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
            message: 'Please provide Licending information for your project.',
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
        }
    ])
    .then(((details) => {
        console.log(details);
        fs.writeFile('README.md', JSON.stringify(details, null, '\t'), function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });
    }));