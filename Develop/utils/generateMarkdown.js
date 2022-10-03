// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
};

// markdown constants for inquirer prompt answers

const generateMarkdown = ({license, title, description, installation, usage, contribution, test, github, email}) => 

// This is the README Template 

`
# ${title}

## Description

${description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}


## Usage

${usage}

## Credits

The success and completion of this project can be credited to ${contribution} 

## License

This applications utilizes the ${license} license. Seek license documentation for more information on licenses.

## Tests

${test}

## Questions

For more information about this project, please contact me at: ${email}
You can also visit my Github Page (https://github.com/${github}/) for my past, present, and future projects!

`;




module.exports = {
  generateMarkdown,
};
