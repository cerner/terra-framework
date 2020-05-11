import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import NotificationIcon from '../../src/_NotificationIcon';

describe('Notification Icon', () => {
  it('shallow renders alert icon', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="alert" />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('shallow renders error icon', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="error" />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('shallow renders warning icon', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="warning" />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('shallow renders info icon', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="info" />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('shallow renders custom icon container', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="custom" />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('shallow renders custom icon container', () => {
    const icon = shallowWithIntl(
      <NotificationIcon
        variant="custom"
        iconClassName="my-icon-class"
      />,
    );

    expect(icon.find('.my-icon-class')).toHaveLength(1);
    expect(icon).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });

    const icon = shallowWithIntl(
      <NotificationIcon variant="alert" />,
    );

    expect(icon).toMatchSnapshot();
  });
});
