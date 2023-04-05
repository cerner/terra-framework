jest.mock('fs-extra');

const fs = require('fs-extra');
const path = require('path');
const isMonoRepo = require('../../../src/utils/isMonoRepo');

describe('isMonoRepo', () => {
  it('returns true if there is a lerna file', async () => {
    fs.pathExists.mockResolvedValueOnce(true);

    const actualIsMonoRepo = await isMonoRepo();
    expect(actualIsMonoRepo).toBeTruthy();

    expect(fs.pathExists).toHaveBeenCalledWith(path.join(process.cwd(), 'lerna.json'));
  });

  it('returns false if there is no lerna file', async () => {
    fs.pathExists.mockResolvedValueOnce(false);

    const actualIsMonoRepo = await isMonoRepo();
    expect(actualIsMonoRepo).toBeFalsy();

    expect(fs.pathExists).toHaveBeenCalledWith(path.join(process.cwd(), 'lerna.json'));
  });
});
