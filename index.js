const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?\n`
    },
    {
        type: 'input',
        name: 'installation',
        message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n`
    },
    {
        type: 'input',
        name: 'usage',
        message: `Provide instructions and examples for use.\n`
    },
    {
        type: 'input',
        name: 'credits',
        message: `List your collaborators, if any, with links to their GitHub profiles.

        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
        
        If you followed tutorials, include links to those here as well.\n`
    },
    {
        type: 'list',
        name: 'license',
        message: `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. Please choose a license from teh following list:\n`,
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense',
            'No License'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: `What is your GitHub username?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is your email?`
    },
    {
        type: 'input',
        name: 'tests',
        message: `Go the extra mile and write tests for your application. Then provide examples on how to run them here.\n`
    }
];

// initialize app
function init() {
    askQuestions();
}

const askQuestions = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            generateLicense(answers.license);
            writeToFile('README.md', markdown);

        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("Something else went wrong");
                console.log(error);
            }
        });
}

async function generateLicense(licenseName) {
    const license = await fs.promises.readFile(`./utils/licenses/${licenseName}.txt`, function (err) {
        if (err) throw err;
        console.log('File Read');
    });

    if (licenseName == 'The Unlicense')
        writeToFile('UNLICENSE', license)
    else
        writeToFile('LICENSE', license);
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./results/${fileName}`, data, function (err) {
        if (err) throw err;
        console.log('File Created in "results" folder');
    });
}

init();
