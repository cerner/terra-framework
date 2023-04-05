jest.mock('../../../../src/utils/isMonoRepo');
jest.mock('../../../../src/terra-cli/prepare-for-release/prepareForReleaseRepoHandler');
jest.mock('../../../../src/terra-cli/prepare-for-release/prepareForReleaseMonoRepoHandler');

const yargs = require('yargs');
const isMonoRepo = require('../../../../src/utils/isMonoRepo');
const prepareForReleaseRepoHandler = require('../../../../src/terra-cli/prepare-for-release/prepareForReleaseRepoHandler');
const prepareForReleaseMonoRepoHandler = require('../../../../src/terra-cli/prepare-for-release/prepareForReleaseMonoRepoHandler');
const PrepareForReleaseCommand = require('../../../../src/terra-cli/prepare-for-release');

describe('prepare-for-release', () => {
  it('declares the prepare-for-release terra-cli command with proper top level help', async () => {
    const parser = yargs.command(PrepareForReleaseCommand).scriptName('terra').help();
    const helpOutput = await new Promise((resolve) => {
      parser.parse('--help', (err, argv, output) => {
        resolve(output);
      });
    });
    expect(helpOutput).toMatchSnapshot();
  });

  it('declares the prepare-for-release terra-cli command with proper command level help', async () => {
    const parser = yargs.command(PrepareForReleaseCommand).scriptName('terra').help();
    const helpOutput = await new Promise((resolve) => {
      parser.parse('prepare-for-release --help', (err, argv, output) => {
        resolve(output);
      });
    });
    expect(helpOutput).toMatchSnapshot();
  });

  it('uses the appropriate handler when calling prepare-for-release in a non mono repo', async () => {
    isMonoRepo.mockResolvedValueOnce(false);
    await PrepareForReleaseCommand.handler();
    expect(isMonoRepo).toHaveBeenCalled();
    expect(prepareForReleaseRepoHandler).toHaveBeenCalled();
  });

  it('uses the appropriate handler when calling prepare-for-release in a mono repo', async () => {
    isMonoRepo.mockResolvedValueOnce(true);
    await PrepareForReleaseCommand.handler();
    expect(isMonoRepo).toHaveBeenCalled();
    expect(prepareForReleaseMonoRepoHandler).toHaveBeenCalled();
  });
});
