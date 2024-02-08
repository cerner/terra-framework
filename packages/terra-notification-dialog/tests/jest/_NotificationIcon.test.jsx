import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import NotificationIcon from '../../src/_NotificationIcon';

describe('Notification Icon', () => {
  it('shallow renders hazard-high icon', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="hazard-high" />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('shallow renders hazard-medium icon', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="hazard-high" />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('shallow renders hazard-low icon', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="hazard-low" />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('shallow renders error icon', () => {
    const icon = shallowWithIntl(
      <NotificationIcon variant="error" />,
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
      <NotificationIcon variant="hazard-high" />,
    );

    expect(icon).toMatchSnapshot();
  });
});
