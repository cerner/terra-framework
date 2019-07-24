import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import UtilityMenuHeaderButton from '../../../src/utility-menu/_UtilityMenuHeaderButton';

describe('UtilityMenuHeaderButton', () => {
  it('should render default element', () => {
    const mountComponent = mountWithIntl(
      <UtilityMenuHeaderButton />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const mountComponent = mountWithIntl(
      <UtilityMenuHeaderButton
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        popupAnchorRef={React.createRef()}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with click callback', () => {
    const mockCallBack = jest.fn();

    const mountComponent = mountWithIntl(
      <UtilityMenuHeaderButton
        onClick={mockCallBack}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
    mountComponent.find('.utility-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
