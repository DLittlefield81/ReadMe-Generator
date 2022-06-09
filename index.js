// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [

   {
    message: "NAME - Please enter your full name:",
    type: "input",
    name: "name",
  },
  {
    message: "EMAIL - Pleaes enter your email address:",
    type: "input",
    name: "email",
  },
  {
    message: "USERNAME - Please enter your GitHub Username:",
    type: "input",
    name: "username",
  },
  {
    message: "TITLE - Please enter the project title:",
    type: "input",
    name: "title",
  },
  {
    message: "REPOSITORY NAME - What is the GitHub repository name for this project? (No Spaces)",
    type: "input",
    name: "repoName",
  },
  {
    message: "GIT PAGES - What is the 'GitHub Pages' URL for the deployed project? '(http(s)://)'",
    type: "input",
    name: "deployedURL",
  },
  {
    message: "INSTALLATION - What should the user do after cloning the repository?",
    type: "input",
    name: "install",
  },
  {
    message: "IMAGES - Would you like to display any images in your repo?",
    type: "list",
    choices: ['Screenshot PNG', 'Screenshot GIF', 'Screenshot PNG with Wireframe', 'Screenshot GIF with Wireframe', 'None'],
    name: "images",
  },
  {
    message: "DESCRIPTION - Please enter a brief description of the project:",
    type: "input",
    name: "description",
  },
  {
    message: "USAGE - Enter how to use the project:",
    type: "input",
    name: "usage",
  },
  {
    message: "LICENSE - Choose the license that applies to the project?",
    type: "list",
    choices: ['MIT', 'Apache 2.0 License', 'General Public License v3.0', 'BSD 3-Clause License', 'None'],
    name: "license",
  },
  {
    message: "CONTRIBUTING - If a user wants to contribute what should they do?",
    type: "input",
    name: "contributing",
  },
  {
    message: "TESTING - Enter any test instructions for the project:",
    type: "input",
    name: "tests",
  },
  {
    message: "COPYRIGHT - What is the copyright year?",
    type: "input",
    name: "year",
  },

];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {

    if (err) {
      return console.log(err)
    } else {
      console.log("Your README.md file was successfully written")
    }
  })
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (response) {
      writeFile("README.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();

