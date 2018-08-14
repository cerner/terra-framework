import React from 'react';
import Base from 'terra-base';
import NavigationSideMenu from '../../../NavigationSideMenu';

class NavigationSideMenuDefault extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.resetMenuState = this.resetMenuState.bind(this);
    this.fakeRoutingBack = this.fakeRoutingBack.bind(this);

    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };
  }

  handleOnChange(event, changeData) {
    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });
  }

  resetMenuState() {
    this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined });
  }

  fakeRoutingBack() {
    this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined });
  }

  render() {
    let content;
    if (this.state.selectedMenuKey === 'fake-parent') {
      content = (
        <div style={{
          height: '100%', width: '100%', position: 'relative', backgroundColor: 'pink',
        }}
        >
          <button type="button" onClick={this.resetMenuState}>
            Child Route
          </button>
          <p>Parent Route</p>
        </div>
      );
    } else {
      content = (
        <NavigationSideMenu
          id="test-menu"
          menuItems={[
            {
              key: 'menu', text: 'Menu', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'], isRootMenu: true,
            },
            {
              key: 'submenu1', text: 'Sub Menu 1', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',
            },
            { key: 'submenu2', text: 'Sub Menu 2' },
            { key: 'submenu3', text: 'Sub Menu 3' },
            { key: 'submenu4', text: 'Sub Menu 4' },
            { key: 'subsubmenu1', text: 'Sub-Sub Menu 1', id: 'test-item-2' },
            { key: 'subsubmenu2', text: 'Sub-Sub Menu 2' },
            { key: 'subsubmenu3', text: 'Sub-Sub Menu 3' },
          ]}
          onChange={this.handleOnChange}
          selectedMenuKey={this.state.selectedMenuKey}
          selectedChildKey={this.state.selectedChildKey}
        />
      );
    }

    return (
      <Base>
        <div style={{ height: '768px', width: '300px', position: 'relative' }}>
          {content}
        </div>
      </Base>
    );
  }
}

export default NavigationSideMenuDefault;
