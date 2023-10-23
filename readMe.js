const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");

class READMEGenerator {
  constructor() {
    this.title = "";
    this.description = "";
    this.installation = "";
    this.usage = "";
    this.license = "";
    this.contributing = "";
    this.tests = "";
    this.githubUsername = "";
    this.email = "";
  }

  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "Enter the project title:",
        },
        {
          type: "input",
          name: "description",
          message: "Enter a project description:",
        },
        {
          type: "input",
          name: "installation",
          message: "Enter installation instructions:",
        },
        {
          type: "input",
          name: "usage",
          message: "Enter usage information:",
        },
        {
          type: "list",
          name: "license",
          message: "Choose a license:",
          choices: ["MIT", "Apache", "GPL", "Other"],
        },
        {
          type: "input",
          name: "contributing",
          message: "Enter contribution guidelines:",
        },
        {
          type: "input",
          name: "tests",
          message: "Enter test instructions:",
        },
        {
          type: "input",
          name: "githubUsername",
          message: "Enter your GitHub username:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter your email address:",
        },
      ])
      .then((answers) => {
        this.title = answers.title;
        this.description = answers.description;
        this.installation = answers.installation;
        this.usage = answers.usage;
        this.license = answers.license;
        this.contributing = answers.contributing;
        this.tests = answers.tests;
        this.githubUsername = answers.githubUsername;
        this.email = answers.email;

        this.generateREADME();
      })
      .catch((err) => {
        console.error("An error occurred:", err);
      });
  }

  async generateREADME() {
    console.log("generateREADME is executing");
    const readmeContent = `
# ${this.title}

## Description
${this.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${this.installation}

## Usage
${this.usage}

## License
This project is licensed under the ${this.license} license.

## Contributing
${this.contributing}

## Tests
${this.tests}

## Questions
GitHub: [${this.githubUsername}](https://github.com/${this.githubUsername})
Email: ${this.email}
    `;

    await writeFile("README.md", readmeContent)
      .then(() => {
        console.log("README.md generated successfully.");
      })
      .catch((err) => {
        console.error("An error occurred while generating README:", err);
      });
  }
}

const readmeGenerator = new READMEGenerator();
readmeGenerator.run();

module.exports = READMEGenerator;
