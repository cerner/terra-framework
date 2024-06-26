import React from 'react';
import classNames from 'classnames/bind';
import NavigationSideMenu, { VARIANTS } from 'terra-navigation-side-menu';
import { IconHospital } from 'terra-icon';
import styles from './NavigationSideMenuDocCommon.module.scss';

const cx = classNames.bind(styles);

const data = [
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
    key: 'submenu3', text: 'Hospital Accommodations',
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
  {
    key: 'rehab2', text: 'Rehabilitation services 2', childKeys: [], isLoading: true, customStatusDisplay: <span>Loading...</span>,
  },
  { key: 'rehab3', text: 'Rehabilitation services 3', childKeys: [] },
];
class DrillInExample extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.resetMenuState = this.resetMenuState.bind(this);
    this.fakeRoutingBack = this.fakeRoutingBack.bind(this);

    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined, data };
  }

  handleOnChange(event, changeData) {
    if (changeData.selectedMenuKey === 'rehab2') {
      this.setState({ selectedMenuKey: changeData.selectedMenuKey });
      setTimeout(() => {
        const modifiedData = [
          {
            key: 'rehab2', text: 'Rehabilitation services 2', childKeys: ['rehab1sub'], isLoading: false,
          },
          { key: 'rehab1sub', text: 'Rehabilitation services submenu', childKeys: [] },
        ];
        this.setState({ data: modifiedData, selectedMenuKey: 'rehab2' });
      }, 1000);
    }
    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });
  }

  resetMenuState() {
    this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined, data });
  }

  fakeRoutingBack() {
    this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined, data });
  }

  render() {
    let content;
    if (this.state.selectedMenuKey === 'fake-parent') {
      content = (
        <div className={cx('content')}>
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
          menuItems={this.state.data}
          onChange={this.handleOnChange}
          routingStackBack={this.fakeRoutingBack}
          selectedMenuKey={this.state.selectedMenuKey}
          selectedChildKey={this.state.selectedChildKey}
          variant={VARIANTS.DRILL_IN}
        />
      );
    }

    return (
      <div className={cx('content-wrapper')}>
        {content}
      </div>
    );
  }
}

export default DrillInExample;
