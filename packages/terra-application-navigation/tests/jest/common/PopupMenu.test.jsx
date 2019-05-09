import React from 'react';
import PopupMenu from '../../../src/common/_PopupMenu';

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
