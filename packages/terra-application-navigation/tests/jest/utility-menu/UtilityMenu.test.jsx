import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import UtilityMenu from '../../../src/utility-menu/_UtilityMenu';

// userConfig: userConfigPropType,
//   /**
//    * An element to render within the Header's utility menu.
//    */
//   hero: PropTypes.element,
//   /**
//    * A function to be executed upon the selection of the Settings utility item.
//    * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
//    * Ex: `onSelectSettings()`
//    */
//   onSelectSettings: PropTypes.func,
//   /**
//    * A function to be executed upon the selection of the Help utility item.
//    * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
//    * Ex: `onSelectLogout()`
//    */
//   onSelectHelp: PropTypes.func,
//   /**
//    * A function to be executed upon the selection of the Logout action button.
//    * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
//    * Ex: `onSelectLogout()`
//    */
//   onSelectLogout: PropTypes.func,
//   /**
//    * An array of configuration objects with information specifying the creation of additional utility menu items.
//    * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
//    */
//   utilityItems: utilityItemsPropType,
//   /**
//    * A function to be executed upon the selection of a custom utility item.
//    * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
//    */
//   onSelectUtilityItem: PropTypes.func,
//   /**
//    * Whehther or not content is be constrained vertically.
//    */
//   isHeightBounded: PropTypes.bool,

describe('UtilityMenu', () => {
  it('should render default element', () => {
    const mountComponent = mountWithIntl(
      <UtilityMenu />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const mountComponent = mountWithIntl(
      <UtilityMenu
        hero={<div>my test hero</div>}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        utilityItems={[{ text: 'test-text-2', key: 'my-test-key-2', icon: <span>my icon</span> }]}
        onSelectUtilityItem={jest.fn()}
        onSelectSettings={jest.fn()}
        onSelectHelp={jest.fn()}
        onSelectLogout={jest.fn()}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with skip callback', () => {
    const mockCallBack = jest.fn();

    const mountComponent = mountWithIntl(
      <UtilityMenu
        onSelectLogout={mockCallBack}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
    mountComponent.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
