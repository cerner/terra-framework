jest.mock('@npmcli/promise-spawn');
jest.mock('fs-extra');
jest.mock('pacote');
jest.mock('../../../../src/terra-cli/release/setupNPM');
jest.mock('../../../../src/terra-cli/release/setupGit');

const spawn = require('@npmcli/promise-spawn');
const pacote = require('pacote');
const path = require('path');
const fs = require('fs-extra');

const setupNPM = require('../../../../src/terra-cli/release/setupNPM');
const setupGit = require('../../../../src/terra-cli/release/setupGit');
const releaseRepoHandler = require('../../../../src/terra-cli/release/releaseRepoHandler');

describe('releaseRepoHandler', () => {
  it('releases the repo if it is not already published', async () => {
    fs.readJSON.mockResolvedValueOnce({ name: 'package', version: '1.3.0' });
    pacote.packument.mockResolvedValueOnce({ versions: { '1.0.0': {}, '1.1.0': {}, '1.2.0': {} } });

    await releaseRepoHandler();

    expect(fs.readJSON).toHaveBeenCalledWith(path.resolve(process.cwd(), 'package.json'));
    expect(pacote.packument).toHaveBeenCalledWith('package', {
      registry: 'https://registry.npmjs.org/',
    });
    expect(setupNPM).toHaveBeenCalled();
    expect(spawn).toHaveBeenCalledWith('npm', ['publish'], { stdioString: true });
    expect(setupGit).toHaveBeenCalled();
    expect(spawn).toHaveBeenCalledWith('git', ['tag', '-a', 'v1.3.0', '-m', 'v1.3.0'], { stdioString: true });
    expect(spawn).toHaveBeenCalledWith('git', ['push', 'origin', '--tags'], { stdioString: true });
  });
});
