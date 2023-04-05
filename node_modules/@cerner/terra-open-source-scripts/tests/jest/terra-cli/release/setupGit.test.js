jest.mock('fs-extra');
jest.mock('@npmcli/promise-spawn');

const spawn = require('@npmcli/promise-spawn');
const setupGit = require('../../../../src/terra-cli/release/setupGit');

describe('setupGit', () => {
  it('sets up git with the appropriate credentials', async () => {
    const oldTravis = process.env.TRAVIS;
    process.env.TRAVIS = true;
    const oldGithubToken = process.env.GITHUB_TOKEN;
    process.env.GITHUB_TOKEN = 'token';

    spawn.mockResolvedValueOnce();
    spawn.mockResolvedValueOnce();
    spawn.mockResolvedValueOnce({ stdout: '    https://remote-url   ' });
    spawn.mockResolvedValueOnce();

    await setupGit();

    expect(spawn).toHaveBeenCalledWith('git', ['config', '--global', 'user.email', 'travis@travis-ci.org'], { stdioString: true });
    expect(spawn).toHaveBeenCalledWith('git', ['config', '--global', 'user.name', 'Travis CI'], { stdioString: true });
    expect(spawn).toHaveBeenCalledWith('git', ['config', '--get', 'remote.origin.url'], { stdioString: true });
    expect(spawn).toHaveBeenCalledWith('git', ['remote', 'set-url', 'origin', 'https://token@remote-url'], { stdio: 'ignore', stdioString: true });

    process.env.TRAVIS = oldTravis;
    process.env.GITHUB_TOKEN = oldGithubToken;
  });
});
