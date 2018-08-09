import React from 'react';
import PropTypes from 'prop-types';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';

import RoutingMenu from '../../../menu/RoutingMenu';

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);

    const items = [];

    if (props.includeNestedMenu) {
      items.push({
        text: 'Nested Menu',
        path: `${props.baseUrl}/nested`,
        hasSubMenu: true,
      });
    }

    for (let i = 0; i < 20; i += 1) {
      items.push({
        text: `Item ${i}`,
        path: `${props.baseUrl}/item_${i}`,
      });
    }

    const menuItems = items.map(item => ({
      key: item.path,
      text: item.text,
      path: item.path,
      hasSubMenu: item.hasSubMenu,
    }));

    this.state = {
      menuItems,
    };
  }

  render() {
    const { menuName, layoutConfig, routingStackDelegate } = this.props;
    const { menuItems } = this.state;

    return (
      <ContentContainer
        footer={(
          <div style={{ padding: '10px', borderTop: '1px solid lightgrey' }}>
            <Button
              text="Custom Event 1"
              isBlock
              onClick={() => {
                const evt = document.createEvent('CustomEvent');
                evt.initCustomEvent('applicationMenu.itemSelected', false, false, 'Custom Event 1');
                document.dispatchEvent(evt);

                if (layoutConfig && layoutConfig.toggleMenu) {
                  layoutConfig.toggleMenu();
                }
              }}
              style={{ marginBottom: '5px' }}
            />
            <Button
              text="Custom Event 2"
              isBlock
              onClick={() => {
                const evt = document.createEvent('CustomEvent');
                evt.initCustomEvent('applicationMenu.itemSelected', false, false, 'Custom Event 2');
                document.dispatchEvent(evt);

                if (layoutConfig && layoutConfig.toggleMenu) {
                  layoutConfig.toggleMenu();
                }
              }}
            />
          </div>
        )}
        fill
      >
        <RoutingMenu
          title={menuName}
          menuItems={menuItems}
          routingStackDelegate={routingStackDelegate}
          layoutConfig={layoutConfig}
        />
      </ContentContainer>
    );
  }
}

ApplicationMenu.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
  routingStackDelegate: RoutingStackDelegate.propType,
  includeNestedMenu: PropTypes.bool,
  menuName: PropTypes.string,
  baseUrl: PropTypes.string,
};

export default ApplicationMenu;
