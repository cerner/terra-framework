import React from 'react';
import classNames from 'classnames/bind';
import NavigationSideMenu from 'terra-navigation-side-menu';

import styles from './NavigationSideMenuExample.module.scss';

const cx = classNames.bind(styles);

class NavigationSideMenuDefault extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };
  }

  handleOnChange(event, changeData) {
    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });
  }

  render() {
    const content = (
      <NavigationSideMenu
        id="test-menu"
        menuItems={[
          { key: 'menu', text: 'Hospital Details', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },
          {
            key: 'submenu1', text: 'Hospital services', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',
          },
          { key: 'submenu2', text: 'Hospital events' },
          { key: 'submenu3', text: 'Hospital Accommodations' },
          { key: 'submenu4', text: 'Hospital Careers' },
          { key: 'subsubmenu1', text: 'Imaging', id: 'test-item-2' },
          { key: 'subsubmenu2', text: 'Laboratory' },
          { key: 'subsubmenu3', text: 'Rehabilitation services' },
        ]}
        onChange={this.handleOnChange}
        selectedMenuKey={this.state.selectedMenuKey}
        selectedChildKey={this.state.selectedChildKey}
        ariaLabel="Sub Menu List"
      />
    );

    return (
      <div className={cx('content-wrapper')}>
        {content}
      </div>
    );
  }
}

export default NavigationSideMenuDefault;
