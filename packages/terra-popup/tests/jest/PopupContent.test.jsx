import PopupContent from '../../src/_PopupContent';

describe('the Opts object', () => {
  it('should match the snapshot', () => {
    expect(PopupContent.Opts).toMatchSnapshot();
  });
});
