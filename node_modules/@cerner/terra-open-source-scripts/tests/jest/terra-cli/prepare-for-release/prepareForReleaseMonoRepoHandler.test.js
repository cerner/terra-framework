jest.mock('fs-extra');
jest.mock('child_process');
jest.mock('@cerner/terra-cli/lib/utils/Logger');
jest.mock('../../../../src/terra-cli/prepare-for-release/updateChangelogForPackage');
jest.mock('../../../../src/terra-cli/prepare-for-release/logReleasingPackages');

const childProcess = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const updateChangelogForPackage = require('../../../../src/terra-cli/prepare-for-release/updateChangelogForPackage');
const logReleasingPackages = require('../../../../src/terra-cli/prepare-for-release/logReleasingPackages');
const prepareForReleaseMonoRepoHandler = require('../../../../src/terra-cli/prepare-for-release/prepareForReleaseMonoRepoHandler');

const VERSION_OUTPUT_PATH = path.join(process.cwd(), 'tmp', 'version-output.txt');

describe('prepareForReleaseMonoRepoHandler', () => {
  it('prompts for versions, updates the versions, and updates the change log of all the repos in the monorepo', async () => {
    fs.readFile.mockResolvedValueOnce(`Changes:
 - @cerner/terra-toolkit-docs: 1.0.0 => 2.0.0
 - @cerner/terra-cli: 1.0.0 => 1.0.1

? Are you sure you want to create these versions? (ynH) ? Are you sure you want to create these versions? (ynH) y
>> Yes? Are you sure you want to create these versions? Yes
lerna info execute Skipping git tag/commit
lerna info execute Skipping git push
lerna info execute Skipping releases
[0m[37;40mlerna[0m [0m[32;1msuccess[0m [0m[35mversion[0m finished`);

    await prepareForReleaseMonoRepoHandler();

    expect(fs.ensureFile).toHaveBeenCalledWith(VERSION_OUTPUT_PATH);
    expect(childProcess.execSync).toHaveBeenCalledWith(`script -q ${VERSION_OUTPUT_PATH} lerna version --no-git-tag-version`, { stdio: 'inherit' });
    expect(updateChangelogForPackage).toHaveBeenCalledWith('packages/terra-toolkit-docs');
    expect(updateChangelogForPackage).toHaveBeenCalledWith('packages/terra-cli');
    expect(logReleasingPackages).toHaveBeenCalledWith(['@cerner/terra-toolkit-docs@2.0.0', '@cerner/terra-cli@1.0.1']);
    expect(fs.remove).toHaveBeenCalledWith(VERSION_OUTPUT_PATH);
  });

  it('does not update versions or change logs when lerna could not successfully version', async () => {
    fs.readFile.mockResolvedValueOnce('random text');

    await prepareForReleaseMonoRepoHandler();

    expect(fs.ensureFile).toHaveBeenCalledWith(VERSION_OUTPUT_PATH);
    expect(childProcess.execSync).toHaveBeenCalledWith(`script -q ${VERSION_OUTPUT_PATH} lerna version --no-git-tag-version`, { stdio: 'inherit' });
    expect(updateChangelogForPackage).not.toHaveBeenCalled();
    expect(logReleasingPackages).not.toHaveBeenCalled();
    expect(fs.remove).toHaveBeenCalledWith(VERSION_OUTPUT_PATH);
  });
});
