// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
  if (license !== 'No License') {
    return ``;
  }

  return "";

  const licenseImg = {

  // apache = 'Apache 2.0'
  // apachePath = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

  // mit = 'MIT'
  // mitPath = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

  // boost = 'Boost Software'
  // boostPath = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'

  // gnu = 'General Public v3.0'
  // gnuPath = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'

  // mozilla = 'Mozilla Public 2.0'
  // mozillaPath = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'


}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  boostLink = '(https://www.boost.org/LICENSE_1_0.txt)'

}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
