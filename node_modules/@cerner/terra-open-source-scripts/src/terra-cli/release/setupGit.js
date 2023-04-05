const spawn = require('@npmcli/promise-spawn');

/**
 * Sets up git for travis CI using the GITHUB_TOKEN environment variable
 */
module.exports = async () => {
  const travis = process.env.TRAVIS;

  if (travis) {
    await spawn('git', ['config', '--global', 'user.email', 'travis@travis-ci.org'], { stdioString: true });
    await spawn('git', ['config', '--global', 'user.name', 'Travis CI'], { stdioString: true });
    const remoteUrl = (await spawn('git', ['config', '--get', 'remote.origin.url'], { stdioString: true })).stdout.trim();
    const token = process.env.GITHUB_TOKEN;
    const newUrl = remoteUrl.replace('https://', `https://${token}@`);
    await spawn('git', ['remote', 'set-url', 'origin', newUrl], { stdio: 'ignore', stdioString: true });
  }
};
