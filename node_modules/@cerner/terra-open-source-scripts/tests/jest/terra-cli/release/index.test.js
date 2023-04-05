jest.mock('../../../../src/utils/isMonoRepo');
jest.mock('../../../../src/terra-cli/release/releaseRepoHandler');
jest.mock('../../../../src/terra-cli/release/releaseMonoRepoHandler');

const yargs = require('yargs');
const isMonoRepo = require('../../../../src/utils/isMonoRepo');
const releaseRepoHandler = require('../../../../src/terra-cli/release/releaseRepoHandler');
const releaseMonoRepoHandler = require('../../../../src/terra-cli/release/releaseMonoRepoHandler');
const ReleaseCommand = require('../../../../src/terra-cli/release');

describe('release', () => {
  it('declares the release terra-cli command with proper top level help', async () => {
    const parser = yargs.command(ReleaseCommand).scriptName('terra').help();
    const helpOutput = await new Promise((resolve) => {
      parser.parse('--help', (err, argv, output) => {
        resolve(output);
      });
    });
    expect(helpOutput).toMatchSnapshot();
  });

  it('declares the release terra-cli command with proper command level help', async () => {
    const parser = yargs.command(ReleaseCommand).scriptName('terra').help();
    const helpOutput = await new Promise((resolve) => {
      parser.parse('release --help', (err, argv, output) => {
        resolve(output);
      });
    });
    expect(helpOutput).toMatchSnapshot();
  });

  it('uses the appropriate handler when calling release in a non mono repo', async () => {
    isMonoRepo.mockResolvedValueOnce(false);
    await ReleaseCommand.handler();
    expect(isMonoRepo).toHaveBeenCalled();
    expect(releaseRepoHandler).toHaveBeenCalled();
  });

  it('uses the appropriate handler when calling release in a mono repo', async () => {
    isMonoRepo.mockResolvedValueOnce(true);
    await ReleaseCommand.handler();
    expect(isMonoRepo).toHaveBeenCalled();
    expect(releaseMonoRepoHandler).toHaveBeenCalled();
  });
});
