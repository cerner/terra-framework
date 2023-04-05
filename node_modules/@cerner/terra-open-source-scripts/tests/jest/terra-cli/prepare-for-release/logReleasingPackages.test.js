const logReleasingPackages = require('../../../../src/terra-cli/prepare-for-release/logReleasingPackages');

describe('logReleasingPackages', () => {
  it('Calls console.log with the appropriate release message', () => {
    const mockLog = jest.fn();
    // eslint-disable-next-line no-console
    const oldLog = console.log;

    // eslint-disable-next-line no-console
    console.log = mockLog;

    logReleasingPackages(['@cerner/terra-cli@1.0.0', '@cerner/terra-blah@3.0.0']);

    expect(mockLog).toHaveBeenCalledWith(`The following packages will be released:

  - @cerner/terra-cli@1.0.0
  - @cerner/terra-blah@3.0.0
`);

    // eslint-disable-next-line no-console
    console.log = oldLog;
  });
});
