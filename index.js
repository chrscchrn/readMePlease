// variables to initialize program
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


// objects of questions for user
function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What's the title of the project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Enter the desctiption of the project."
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter installation instructions?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What's the usage information?"
    },
    {
        type: "input",
        name: "License",
        message: "What licenses did you use?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Enter contribution guidlines"
    },
    {
        type: "input",
        name: "Tests",
        message: "Enter test instructions."
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email where you wish to be contacted."
    }
    ]);
}


// function to write README file`
function generateREADME(answers) {
    return `
# ${answers.Title}

    
## Github
    https://github.com/${answers.github}

## Questions
    ${answers.email}

### Description
    ${answers.Description}

### Installation
    ${answers.Installation}

### Usage
    ${answers.Usage}

### License
    ${answers.License}

### Contributing
    ${answers.Contributing}

### Test
    ${answers.Tests}

### Screenshots


### Link to Website
       
`;
}


// function call to initialize program
promptUser()
    .then(function(answers) {
        const md = generateREADME(answers);
        return writeFileAsync("README.md", md);
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
        console.log(err);
    });
