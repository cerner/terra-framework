import React from 'react';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';

class AdditionalTabsTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabKeys: [...Array(5).keys()],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tabKeys: [...Array(20).keys()],
      });
    }, 3000);
  }

  createTabPanes() {
    const tabPanes = this.state.tabKeys.map((tabKey) => (
      <Tabs.Pane label={`Tab ${tabKey}`} key={tabKey} id={tabKey}>
        <TabContent label={`Tab ${tabKey}`} id={`Tab ${tabKey}`} />
      </Tabs.Pane>
    ));

    return tabPanes;
  }

  render() {
    // eslint-disable-next-line no-nested-ternary
    const tabsWrapperId = (this.state.tabKeys.length === 5) ? 'tabsWrapper-5' : (this.state.tabKeys.length === 20) ? 'tabsWrapper-20' : 'tabsWrapper';
    return (
      <Tabs id={tabsWrapperId}>
        {this.createTabPanes()}
      </Tabs>
    );
  }
}

export default AdditionalTabsTest;
