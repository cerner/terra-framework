import React from 'react';
import classNames from 'classnames/bind';
import NavigationSideMenu, { VARIANTS } from 'terra-navigation-side-menu';
import { IconHospital } from 'terra-icon';

import styles from './NavigationSideMenuExample.module.scss';

const cx = classNames.bind(styles);

class DrillInDefault extends React.Component {
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
          {
            key: 'menu', text: 'Hospital Details', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4', 'submenu5'],
          },
          {
            key: 'submenu1',
            text: 'Hospital services',
            childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'],
            id: 'test-item-1',
          },
          { key: 'submenu2', text: 'Hospital events' },
          {
            key: 'submenu3', text: 'Hospital Accommodations', isDisabled: true,
          },
          { key: 'submenu4', text: 'Hospital Careers' },
          {
            key: 'submenu5',
            text: 'Hospital Info',
            childKeys: [],
            customStatusDisplay: <span>No results for Hospital Info</span>,
          },
          {
            key: 'subsubmenu1', text: 'Imaging', id: 'test-item-2',
          },
          { key: 'subsubmenu2', text: 'Laboratory' },
          {
            key: 'subsubmenu3', text: 'Rehabilitation services', childKeys: ['rehab1', 'rehab2', 'rehab3'], icon: <IconHospital />,
          },
          { key: 'rehab1', text: 'Rehabilitation services 1' },
          { key: 'rehab2', text: 'Rehabilitation services 2' },
          { key: 'rehab3', text: 'Rehabilitation services 3', childKeys: [] },
        ]}
        onChange={this.handleOnChange}
        selectedMenuKey={this.state.selectedMenuKey}
        selectedChildKey={this.state.selectedChildKey}
        ariaLabel="Sub Menu List"
        variant={VARIANTS.DRILL_IN}
      />
    );

    return (
      <div className={cx('content-wrapper')}>
        {content}
      </div>
    );
  }
}

export default DrillInDefault;
