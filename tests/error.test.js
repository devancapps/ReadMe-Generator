const READMEGenerator = require('../readMe');

describe('READMEGenerator Property Handling', () => {
    let readmeGenerator;
  
    beforeAll(() => {
      readmeGenerator = new READMEGenerator();
    });
  
    it('should handle missing project title', async () => {
      readmeGenerator.title = '';
    
  
      await readmeGenerator.generateREADME()
        .catch((err) => {
          expect(err).toBe("Project title is required.");
        });
    });
  
    it('should handle missing project description', async () => {
      readmeGenerator.title = 'Test Project';
      readmeGenerator.description = '';
     
  
      await readmeGenerator.generateREADME()
        .catch((err) => {
          expect(err).toBe("Project description is required.");
        });
    });
  
    it('should handle missing installation instructions', async () => {
      readmeGenerator.title = 'Test Project';
      readmeGenerator.description = 'This is a test project';
      readmeGenerator.installation = ''; // Missing installation instructions
     
  
      await readmeGenerator.generateREADME()
        .catch((err) => {
          expect(err).toBe("Installation instructions are required.");
        });
    });
  
    it('should handle missing usage information', async () => {
      readmeGenerator.title = 'Test Project';
      readmeGenerator.description = 'This is a test project';
      readmeGenerator.installation = 'Installation instructions';
      readmeGenerator.usage = ''; // Missing usage information
     
  
      await readmeGenerator.generateREADME()
        .catch((err) => {
          expect(err).toBe("Usage information is required.");
        });
    });
  
  });
  
  