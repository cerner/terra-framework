jest.mock('util');
jest.mock('@npmcli/promise-spawn');
jest.mock('@cerner/terra-cli/lib/utils/Logger');
jest.mock('../../../../src/terra-cli/release/setupNPM');
jest.mock('../../../../src/terra-cli/release/setupGit');

const spawn = require('@npmcli/promise-spawn');

const setupNPM = require('../../../../src/terra-cli/release/setupNPM');
const setupGit = require('../../../../src/terra-cli/release/setupGit');
const releaseMonoRepoHandler = require('../../../../src/terra-cli/release/releaseMonoRepoHandler');

describe('releaseMonoRepoHandler', () => {
  it('releases the mono repo if there is something to release', async () => {
    spawn.mockResolvedValueOnce({
      stdout: `Found 3 packages to publish:
 - terra-clinical-data-grid => 2.29.0
 - terra-clinical-detail-view => 3.24.0
 - terra-clinical-header => 3.21.0
Successfully published:
 - terra-clinical-data-grid@2.29.0
 - terra-clinical-detail-view@3.24.0
 - terra-clinical-header@3.21.0`,
    });

    await releaseMonoRepoHandler();

    expect(setupNPM).toHaveBeenCalled();
    expect(spawn).toHaveBeenCalledWith('npx', ['lerna', 'publish', 'from-package', '--yes'], { stdioString: true });
    expect(setupGit).toHaveBeenCalled();
    expect(spawn).toHaveBeenCalledWith('git', ['tag', '-a', 'terra-clinical-data-grid@2.29.0', '-m', 'terra-clinical-data-grid@2.29.0'], { stdioString: true });
    expect(spawn).toHaveBeenCalledWith('git', ['tag', '-a', 'terra-clinical-detail-view@3.24.0', '-m', 'terra-clinical-detail-view@3.24.0'], { stdioString: true });
    expect(spawn).toHaveBeenCalledWith('git', ['tag', '-a', 'terra-clinical-header@3.21.0', '-m', 'terra-clinical-header@3.21.0'], { stdioString: true });
    expect(spawn).toHaveBeenCalledWith('git', ['push', 'origin', '--tags'], { stdioString: true });
  });

  it('does not release or tag if nothing to release', async () => {
    spawn.mockResolvedValueOnce({
      stdout: 'Found no packages to publish',
    });

    await releaseMonoRepoHandler();

    expect(setupNPM).toHaveBeenCalled();
    expect(spawn).toHaveBeenCalledWith('npx', ['lerna', 'publish', 'from-package', '--yes'], { stdioString: true });
    expect(setupGit).not.toHaveBeenCalled();
  });
});
