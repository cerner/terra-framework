jest.mock('prompts');
jest.mock('npmlog');
jest.mock('util');
jest.mock('fs-extra');
jest.mock('@npmcli/promise-spawn');
jest.mock('../../../../src/terra-cli/prepare-for-release/updateChangelogForPackage');
jest.mock('../../../../src/terra-cli/prepare-for-release/logReleasingPackages');

const prompts = require('prompts');
const path = require('path');
const log = require('npmlog');
const fs = require('fs-extra');
const spawn = require('@npmcli/promise-spawn');
const updateChangelogForPackage = require('../../../../src/terra-cli/prepare-for-release/updateChangelogForPackage');
const logReleasingPackages = require('../../../../src/terra-cli/prepare-for-release/logReleasingPackages');

const prepareForReleaseRepoHandler = require('../../../../src/terra-cli/prepare-for-release/prepareForReleaseRepoHandler');

describe('prepareForReleaseRepoHandler', () => {
  it('prompts for a version, updates the version, and updates the change log of the current repo for a patch version', async () => {
    prompts.mockResolvedValueOnce({ versionType: 'patch' });
    spawn.mockResolvedValueOnce({ stdout: 'v1.0.1' });
    fs.readJSON.mockResolvedValueOnce({ name: 'terra-test' });

    await prepareForReleaseRepoHandler();

    expect(log.pause).toHaveBeenCalled();
    expect(prompts).toHaveBeenCalledWith([
      {
        type: 'select',
        name: 'versionType',
        message: 'What type of release do you want to version for?',
        choices: [{ title: 'major', value: 'major' }, { title: 'minor', value: 'minor' }, { title: 'patch', value: 'patch' }],
        pageSize: 3,
      },
    ]);
    expect(log.resume).toHaveBeenCalled();
    expect(spawn).toHaveBeenCalledWith('npm', ['--no-git-tag-version', 'version', 'patch'], { stdioString: true });
    expect(updateChangelogForPackage).toHaveBeenCalledWith(process.cwd());
    expect(fs.readJSON).toHaveBeenCalledWith(path.join(process.cwd(), 'package.json'));
    expect(logReleasingPackages).toHaveBeenCalledWith(['terra-test@1.0.1']);
  });

  it('prompts for a version, updates the version, and updates the change log of the current repo for a minor version', async () => {
    prompts.mockResolvedValueOnce({ versionType: 'minor' });
    spawn.mockResolvedValueOnce({ stdout: 'v1.1.0' });
    fs.readJSON.mockResolvedValueOnce({ name: 'terra-test' });

    await prepareForReleaseRepoHandler();

    expect(log.pause).toHaveBeenCalled();
    expect(prompts).toHaveBeenCalledWith([
      {
        type: 'select',
        name: 'versionType',
        message: 'What type of release do you want to version for?',
        choices: [{ title: 'major', value: 'major' }, { title: 'minor', value: 'minor' }, { title: 'patch', value: 'patch' }],
        pageSize: 3,
      },
    ]);
    expect(log.resume).toHaveBeenCalled();
    expect(spawn).toHaveBeenCalledWith('npm', ['--no-git-tag-version', 'version', 'minor'], { stdioString: true });
    expect(updateChangelogForPackage).toHaveBeenCalledWith(process.cwd());
    expect(fs.readJSON).toHaveBeenCalledWith(path.join(process.cwd(), 'package.json'));
    expect(logReleasingPackages).toHaveBeenCalledWith(['terra-test@1.1.0']);
  });

  it('prompts for a version, updates the version, and updates the change log of the current repo for a major version', async () => {
    prompts.mockResolvedValueOnce({ versionType: 'major' });
    spawn.mockResolvedValueOnce({ stdout: 'v2.0.0' });
    fs.readJSON.mockResolvedValueOnce({ name: 'terra-test' });

    await prepareForReleaseRepoHandler();

    expect(log.pause).toHaveBeenCalled();
    expect(prompts).toHaveBeenCalledWith([
      {
        type: 'select',
        name: 'versionType',
        message: 'What type of release do you want to version for?',
        choices: [{ title: 'major', value: 'major' }, { title: 'minor', value: 'minor' }, { title: 'patch', value: 'patch' }],
        pageSize: 3,
      },
    ]);
    expect(log.resume).toHaveBeenCalled();
    expect(spawn).toHaveBeenCalledWith('npm', ['--no-git-tag-version', 'version', 'major'], { stdioString: true });
    expect(updateChangelogForPackage).toHaveBeenCalledWith(process.cwd());
    expect(fs.readJSON).toHaveBeenCalledWith(path.join(process.cwd(), 'package.json'));
    expect(logReleasingPackages).toHaveBeenCalledWith(['terra-test@2.0.0']);
  });
});
