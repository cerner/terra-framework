import React from 'react';
import NavigationSideMenu from '../../lib/NavigationSideMenu';

class NavigationSideMenuExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedKey: 'submenu1' };
  }

  handleOnChange(event, key) {
    this.setState({ selectedKey: key });
  }

  render() {
    return (
      <div>
        <p>{`Selected Key: ${this.state.selectedKey}`}</p>
        <div style={{ height: '450px', width: '300px', border: '1px solid gray' }}>
          <NavigationSideMenu
            menuItems={[
              { key: 'menu', title: 'Menu', children: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },
              { key: 'submenu1', title: 'Sub Menu 1', children: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'] },
              { key: 'submenu2', title: 'Sub Menu 2' },
              { key: 'submenu3', title: 'Sub Menu 3' },
              { key: 'submenu4', title: 'Sub Menu 4' },
              { key: 'subsubmenu1', title: 'Sub-Sub Menu 1' },
              { key: 'subsubmenu2', title: 'Sub-Sub Menu 2' },
              { key: 'subsubmenu3', title: 'Sub-Sub Menu 3' },
            ]}
            onChange={this.handleOnChange}
            routingStackDelegate={{ showParent: () => {} }}
            initialSelectedKey="menu"
          />
        </div>
      </div>
    );
  }
}

export default NavigationSideMenuExample;
