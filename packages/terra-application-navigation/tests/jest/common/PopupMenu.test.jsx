import React from 'react';
import PopupMenu from '../../../src/common/_PopupMenu';

//   /**
//    * A configuration object with information pertaining to the application's user.
//    */
//   userConfig: userConfigPropType,
//   /**
//    * An array of selectable items to be displayed within the popup.
//    */
//   menuItems: PropTypes.arrayOf(PropTypes.shape({
//     /**
//      * Icon to be rendered
//      */
//     icon: PropTypes.element,
//     /**
//      * Key used as react key, and returned in the onSelect
//      */
//     key: PropTypes.string.isRequired,
//     /**
//      * Object to be returned in the onSelect
//      */
//     metaData: PropTypes.object,
//     /**
//      * Text display and/or aria-label
//      */
//     text: PropTypes.string.isRequired,
//     /**
//      * Whether or not this item is the active item.
//      */
//     isActive: PropTypes.bool,
//     /**
//      * The number value representing the notification count.
//      */
//     notificationCount: PropTypes.number,
//   })),
//   /**
//    * Function callback for selection of the menu item. Returns (key, metaData).
//    */
//   onSelectMenuItem: PropTypes.func,
//   /**
//    * Whehther or not content is be constrained vertically.
//    */
//   isHeightBounded: PropTypes.bool,
//   /**
//    * Whehther or not selected states should display on the menu item.
//    */
//   showSelections: PropTypes.bool,

describe('PopupMenu', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <PopupMenu />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <PopupMenu
        header={<div>my-header</div>}
        footer={<div>my-footer</div>}
        customContent={<div>my-custom-content</div>}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        menuItems={[
          {
            text: 'test-text',
            icon: <span>my icon</span>,
            key: 'my-test-key',
            isActive: true,
            metaData: { test: 'test-data' },
            notificationCount: 2,
          },
        ]}
        onSelectMenuItem={jest.fn()}
        showSelections
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with height bounded', () => {
    const shallowComponent = shallow(
      <PopupMenu
        header={<div>my-header</div>}
        footer={<div>my-footer</div>}
        isHeightBounded
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
