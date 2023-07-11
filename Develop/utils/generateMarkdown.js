// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No License") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}
// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== "No License") {
    return `* [License](#license)\n`;
  }
  return "";
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `## License
      This Project is using the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  by ${data.name}
  ${renderLicenseBadge(data.licenses)}
  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contact-Info](#contact-info)
  * [Contributors](#contributors)
  * [Testing](#testing)
${renderLicenseLink(data.licenses)}
## Description
${data.description}
## Requirements
${data.require}
## Usage
${data.languages}
## Contact-Info
* Username: ${data.username} (https://github.com/${data.username}/)
* Email: ${data.email}
## Contributors
${data.contributors}
## Testing
\n
${data.testing}
\n
${renderLicenseSection(data.licenses)}
`;
}

module.exports = generateMarkdown;
