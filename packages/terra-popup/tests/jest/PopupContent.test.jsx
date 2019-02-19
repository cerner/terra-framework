import * as PopupContent from '../../src/_PopupContent';

describe('PopupContent', () => {
  it('should match the snapshot', () => {
    expect(PopupContent).toMatchSnapshot();
  });
});
