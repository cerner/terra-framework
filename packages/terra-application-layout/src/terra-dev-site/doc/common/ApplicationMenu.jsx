import React from 'react';
import PropTypes from 'prop-types';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';
import styles from './ApplicationMenu.module.scss';

import RoutingMenu from '../../../menu/RoutingMenu';

const cx = classNames.bind(styles);

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);

    const items = [];

    for (let i = 0; i < 20; i += 1) {
      items.push({
        text: `Item ${i}`,
        path: `${props.baseUrl}/item_${i}`,
      });
    }

    if (props.includeNestedMenu) {
      items.push({
        text: 'Nested Menu',
        path: `${props.baseUrl}/nested`,
        hasSubMenu: true,
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
          <div className={cx('footer')}>
            <Button
              text="Layouts"
              isBlock
              onClick={() => {
                const evt = document.createEvent('CustomEvent');
                evt.initCustomEvent('applicationMenu.itemSelected', false, false, 'Layouts');
                document.dispatchEvent(evt);

                if (layoutConfig && layoutConfig.toggleMenu) {
                  layoutConfig.toggleMenu();
                }
              }}
              className={cx('custom-event-button')}
            />
            <Button
              text="Themes"
              isBlock
              onClick={() => {
                const evt = document.createEvent('CustomEvent');
                evt.initCustomEvent('applicationMenu.itemSelected', false, false, 'Themes');
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
