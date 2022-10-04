// returns a license badge based on which license is passed in
// If there is no license, return message stating no license was chosen

function renderLicenseBadge(license) {
  if (license === 'none') {
    return 'No licence has been applied';
  } else {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    return `- [License](#license)`;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License
    This project utilizes the ${license} license.`;
  }
}

// markdown constants for inquirer prompt answers

const generateMarkdown = ({license, title, description, installation, usage, contribution, test, github, email}) => 

// This is the README Template 

`
# ${title}

  ${renderLicenseBadge(license)}

## Description

${description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- ${renderLicenseLink(license)}
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}


## Usage

${usage}

## Credits

The success and completion of this project can be credited to ${contribution} 

${renderLicenseSection(license)}

## Tests

${test}

## Questions

For more information about this project, please contact me at: ${email}
You can also visit my Github Page (https://github.com/${github}/) for my past, present, and future projects!

`;




module.exports = {
  generateMarkdown,
};
