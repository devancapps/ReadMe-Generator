const READMEGenerator = require('../readMe');  

jest.mock("fs/promises", ()=> ({
  writeFile: jest.fn(()=> Promise.resolve()),
}))

const fsPromises = require("fs/promises")
describe('READMEGenerator README Generation', () => {
    let readmeGenerator;
  
    beforeAll(() => {
      readmeGenerator = new READMEGenerator();
    });
  
    it('should generate a valid README', async () => {
      readmeGenerator.title = 'Test Project';
      readmeGenerator.description = 'This is a test project.';
      readmeGenerator.installation = 'Installation instructions';
      readmeGenerator.usage = 'Usage information';
      readmeGenerator.license = 'MIT';
      readmeGenerator.contributing = 'Contribution guidelines';
      readmeGenerator.tests = 'Test instructions';
      readmeGenerator.githubUsername = 'testuser';
      readmeGenerator.email = 'test@example.com';
  
      const expectedREADME = `
# Test Project

## Description
This is a test project.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Installation instructions

## Usage
Usage information

## License
This project is licensed under the MIT license.

## Contributing
Contribution guidelines

## Tests
Test instructions

## Questions
GitHub: [testuser](https://github.com/testuser)
Email: test@example.com
    `;
     await readmeGenerator.generateREADME();
      expect(fsPromises.writeFile).toHaveBeenCalledWith("README.md", expectedREADME);
    });
  });
  