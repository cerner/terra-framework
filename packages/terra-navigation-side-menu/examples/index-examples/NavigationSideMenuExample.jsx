import React from 'react';
import Base from 'terra-base';
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
      <Base>
        <div>
          <p>{`Selected Key: ${this.state.selectedKey}`}</p>
          <div style={{ height: '450px', width: '300px', border: '1px solid gray' }}>
            <NavigationSideMenu
              menuItems={[
                { key: 'submenu1', text: 'Sub Menu 1' },
                { key: 'submenu2', text: 'Sub Menu 2' },
                { key: 'submenu3', text: 'Sub Menu 3' },
                { key: 'submenu4', text: 'Sub Menu 4' },
              ]}
              onChange={this.handleOnChange}
              routingStackDelegate={{ showParent: () => {} }}
              selectedKey={this.state.selectedKey}
              title="Menu"
            />
          </div>
        </div>
      </Base>
    );
  }
}

export default NavigationSideMenuExample;
