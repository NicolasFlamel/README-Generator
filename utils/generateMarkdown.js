// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badgeLink;

  switch (license) {
    case 'GNU AGPLv3':
      badgeLink = 'https://img.shields.io/badge/license-GNU_AGPLv3-green'
      break;
    case 'GNU GPLv3':
      badgeLink = 'https://img.shields.io/badge/license-GNU_GPLv3-green/'
      break;
    case 'GNU LGPLv3':
      badgeLink = 'https://img.shields.io/badge/license-GNU_LGPLv3-greenl'
      break;
    case 'Mozilla Public License 2.0':
      badgeLink = 'https://img.shields.io/badge/license-MPL_2.0-green'
      break;
    case 'Apache License 2.0':
      badgeLink = 'https://img.shields.io/badge/license-Apache_2.0-green'
      break;
    case 'MIT License':
      badgeLink = 'https://img.shields.io/badge/license-MIT-green'
      break;
    case 'Boost Software License 1.0':
      badgeLink = 'https://img.shields.io/badge/license-BSL_1.0-green'
      break;
    case 'The Unlicense':
      badgeLink = 'https://img.shields.io/badge/license-Unlicense-green'
      break;
    default:
      badgeLink = 'error'
  }

  return badgeLink;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  let link;

  switch (license) {
    case 'GNU AGPLv3':
      link = 'https://choosealicense.com/licenses/agpl-3.0/'
      break;
    case 'GNU GPLv3':
      link = 'https://choosealicense.com/licenses/gpl-3.0/'
      break;
    case 'GNU LGPLv3':
      link = 'https://choosealicense.com/licenses/lgpl-3.0/'
      break;
    case 'Mozilla Public License 2.0':
      link = 'https://choosealicense.com/licenses/mpl-2.0/'
      break;
    case 'Apache License 2.0':
      link = 'https://choosealicense.com/licenses/apache-2.0/'
      break;
    case 'MIT License':
      link = 'https://choosealicense.com/licenses/mit/'
      break;
    case 'Boost Software License 1.0':
      link = 'https://choosealicense.com/licenses/bsl-1.0/'
      break;
    case 'The Unlicense':
      link = 'https://choosealicense.com/licenses/unlicense/'
      break;
    default:
      link = 'error'
  }

  return link;
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'No License') {
    return 'N/A'
  }

  const link = renderLicenseLink(license)
  return `This project is available under the ${license} license. Please see the [LICENSE file](./LICENSE). For more information please visit [${license} information page](${link})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const badgeLink = renderLicenseBadge(data.license);

  return `# ${data.title}
  ![badge](${badgeLink})

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${licenseSection}

  ## Tests

  ${data.tests}

  ## Questions

  Link to my GitHub Account: [${data.github}](https://github.com/${data.github}). If you have any further questions please email me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
