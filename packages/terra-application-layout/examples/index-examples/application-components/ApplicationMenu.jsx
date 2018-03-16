import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import NavigationSideMenu from 'terra-navigation-side-menu';

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuChange = this.handleMenuChange.bind(this);

    const items = [];

    if (props.includeNestedMenu) {
      items.push({
        text: 'Nested Menu',
        path: '/nested',
        hasSubMenu: true,
      });
    }

    for (let i = 0; i < 20; i += 1) {
      items.push({
        text: `Item ${i}`,
        path: `/item_${i}`,
      });
    }

    const menuItems = [{ key: 'menu', text: props.menuName, childKeys: items.map(item => item.path) }];
    items.forEach((item) => {
      menuItems.push({
        key: item.path,
        text: item.text,
        hasSubMenu: item.hasSubMenu,
        metaData: {
          url: item.path,
          hasSubMenu: item.hasSubMenu,
        },
      });
    });

    let selectedChildKey;
    items.forEach((item) => {
      if (matchPath(props.location.pathname, { path: `${props.baseUrl}${item.path}` })) {
        selectedChildKey = item.path;
      }
    });

    this.state = {
      selectedMenuKey: 'menu',
      selectedChildKey,
      menuItems,
    };
  }

  handleMenuChange(event, data) {
    const { routingStackDelegate, layoutConfig, baseUrl } = this.props;

    if (!data.metaData.hasSubMenu && layoutConfig.toggleMenu) {
      layoutConfig.toggleMenu().then(() => {
        routingStackDelegate.show({ path: `${baseUrl}${data.metaData.url}` });
      });
    } else {
      routingStackDelegate.show({ path: `${baseUrl}${data.metaData.url}` });
    }

    this.setState({ selectedMenuKey: data.selectedMenuKey, selectedChildKey: data.selectedChildKey });
  }

  render() {
    const { layoutConfig, routingStackDelegate } = this.props;
    const { menuItems } = this.state;

    return (
      <ContentContainer
        footer={(
          <div style={{ padding: '10px', borderTop: '1px solid lightgrey' }}>
            <Button
              text="Custom Event 1" isBlock onClick={() => {
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
              text="Custom Event 2" isBlock onClick={() => {
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
        <NavigationSideMenu
          key="PageSections"
          menuItems={menuItems}
          onChange={this.handleMenuChange}
          routingStackBack={routingStackDelegate.showParent}
          selectedMenuKey={this.state.selectedMenuKey}
          selectedChildKey={this.state.selectedChildKey}
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  menuName: PropTypes.string,
  baseUrl: PropTypes.string,
};

export default withRouter(ApplicationMenu);
