import React from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);
let i = -1;
const hiddenTabs = [];
class IconOnlyTabs extends React.Component {
  constructor(props) {
    super(props);
    hiddenTabs.push(
      <Tabs.Pane label="Search" icon={<IconSearch />} isIconOnly key="Search">
        <TabContent label="Search" />
      </Tabs.Pane>,
    );

    hiddenTabs.push(
      <Tabs.Pane label="Briefcase" icon={<IconBriefcase />} isIconOnly key="Briefcase">
        <TabContent label="Briefcase" />
      </Tabs.Pane>,
    );

    hiddenTabs.push(
      <Tabs.Pane label="Bookmark" icon={<IconBookmark />} isIconOnly key="Bookmark">
        <TabContent label="Bookmark" />
      </Tabs.Pane>,
    );

    hiddenTabs.push(
      <Tabs.Pane label="Calendar" icon={<IconCalendar />} isIconOnly key="Calendar">
        <TabContent label="Calendar" />
      </Tabs.Pane>,
    );
    this.state = {
      tabKeys: hiddenTabs,
      activeKey: 'Bookmark',
    };

    this.addMoreTabPanes = this.addMoreTabPanes.bind(this);
  }

  createTabPanes() {
    const tabPanes = this.state.tabKeys.map((tabKey) => (
      tabKey
    ));

    return tabPanes;
  }

  addMoreTabPanes() {
    i += 1;
    hiddenTabs.push(
      <Tabs.Pane label={`Tab_${i}`} icon={<IconCalendar />} isIconOnly key={`Tab_${i}`} id={`Tab_${i}`} isActive>
        <TabContent label={`Tab_${i}`} id={`TabContent_${i}`} />
      </Tabs.Pane>,
    );
    this.setState({
      tabKeys: hiddenTabs,
      activeKey: `Tab_${i}`,
    });
  }

  render() {
    // eslint-disable-next-line no-nested-ternary
    return (
      <div className={cx('content-wrapper')}>
        <Tabs activeKey={this.state.activeKey} onSelectAddButton={this.addMoreTabPanes(this.state.activeKey)} ariaLabelAddTab="Add Tab">
          {this.state.tabKeys}
        </Tabs>
      </div>
    );
  }
}

export default IconOnlyTabs;
