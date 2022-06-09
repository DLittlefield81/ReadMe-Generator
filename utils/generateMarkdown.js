// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if(license !== "None"){
//     return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   } else{
//     return;
//   }
//   }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string


function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return '[License: Apache](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'MIT') {
    return '[License: MIT License](https://opensource.org/licenses/MIT)'
  }
  if (license === 'GPL 3.0') {
    return '[License: GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)'
  }
  if (license === 'BSD 3') {
    return '[License: Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)'
  }

}

//TODO: Create a function that returns the license section of README
//If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "None"){
   return `## License
   This project is licenses under the ${license} license.`

 } else{
   return "";
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `
# ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation

Follow these steps to install this project on your local machine.

- Open Bash editor
- mkdir ${data.repoURL}
- cd ${data.repoURL}
- git clone https://github.com/${data.username}/${data.repoURL}

## Usage
${data.usageURL}

## Application

Link to Deployed Application: ${data.deployedURL}

- ![${data.title}](assets/images/${data.repoURL}.png)
- ![wireframe](assets/images/wireframe.png)

## Tests
${data.tests}

## Questions
- ${data.username} 
- https://github.com/${data.username}/
- Please contact me for additional questions ${data.email}

## Credits
${data.contributing}

## License
- ${renderLicenseLink(data.license)} 

##   (c) Copyright ${data.year} ${data.name} 
 `;


}
// This project is licenses under the license.
module.exports = generateMarkdown;
//${renderLicenseSection(data.license)}
