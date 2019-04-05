import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import PopupContent, * as PopupContentExports from '../../src/_PopupContent';

describe('PopupContent', () => {
  const requiredProps = {
    contentHeight: 640,
    contentWidth: 640,
    onRequestClose: jest.fn(),
    onResize: jest.fn(),
  };
  const children = <div>children node(s)</div>;

  describe('Prop Tests', () => {
    describe('with default props', () => {
      const subject = (
        <PopupContent {...requiredProps}>
          {children}
        </PopupContent>
      );
      const wrapper = shallowWithIntl(subject);

      it('matches the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
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
        const wrapper = shallowWithIntl(subject);
        expect(wrapper).toMatchSnapshot();
      });

      it('matches the mount snapshot', () => {
        const wrapper = mountWithIntl(subject);
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
