jest.mock('fs-extra');

const fs = require('fs-extra');
const path = require('path');
const setupNPM = require('../../../../src/terra-cli/release/setupNPM');

describe('setupNPM', () => {
  it('sets up the .npmrc file with the appropriate credentials', async () => {
    const oldToken = process.env.NPM_TOKEN;
    process.env.NPM_TOKEN = 'TEST-TOKEN';

    await setupNPM();

    expect(fs.writeFile).toHaveBeenCalledWith(path.join(process.env.HOME, '.npmrc'), '//registry.npmjs.org/:_authToken=TEST-TOKEN', 'utf-8');

    process.env.NPM_TOKEN = oldToken;
  });
});
