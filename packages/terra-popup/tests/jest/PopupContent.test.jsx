import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import PopupContent, * as PopupContentExports from '../../src/_PopupContent';

describe('PopupContent', () => {
  const requiredProps = {
    contentHeight: 640,
    contentWidth: 640,
    onRequestClose: jest.fn(),
    onResize: jest.fn(),
    isHeaderDisabled: false,
  };
  const children = <div>children node(s)</div>;

  describe('Prop Tests', () => {
    describe('with default props', () => {
      const subject = (
        <PopupContent {...requiredProps}>
          {children}
        </PopupContent>
      );
      const wrapper = enzymeIntl.shallowWithIntl(subject);

      it('matches the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('correctly applies the theme context className', () => {
        const result = enzymeIntl.mountWithIntl(
          <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
            {subject}
          </ThemeContextProvider>,
        );
        expect(result).toMatchSnapshot();
      });
    });

    describe('with header', () => {
      const extraProps = {
        contentHeightMax: 640,
        contentWidthMax: 640,
        refCallback: jest.fn(),
      };
      const subject = (
        <PopupContent {...requiredProps} {...extraProps}>
          {children}
        </PopupContent>
      );

      it('matches the shallow snapshot', () => {
        const wrapper = enzymeIntl.shallowWithIntl(subject);
        expect(wrapper).toMatchSnapshot();
      });

      it('matches the mount snapshot', () => {
        const wrapper = enzymeIntl.mountWithIntl(subject);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

describe('PopupContentExports', () => {
  it('should match the snapshot', () => {
    expect(PopupContentExports).toMatchSnapshot();
  });
});
