import React from 'react';
import PopupContent, * as PopupContentExports from '../../src/_PopupContent';
import { shallowContext, mountContext } from './intl-context-setup';

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
      const wrapper = shallow(subject, shallowContext);

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
        const wrapper = shallow(subject, shallowContext);
        expect(wrapper).toMatchSnapshot();
      });

      it('matches the mount snapshot', () => {
        const wrapper = mount(subject, mountContext);
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
