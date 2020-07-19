import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
/* eslint-disable import/no-unresolved, import/extensions */
import Tabs, { Tab, TabBar } from 'terra-tabs/lib/index';
import TabContentTemplate from 'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate';
/* eslint-enable import/no-unresolved, import/extensions */
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  tabFill: PropTypes.bool,
};

const TabsTemplate = (props) => {
  const [currentTab, setCurrentTab] = useState('apples');

  function handleSelect(metaData) {
    setCurrentTab(metaData.key);
  }

  return (
    <div className={cx('content-wrapper')}>
      <Tabs
        tabFill={props.tabFill}
        tabData={[
          {
            id: 'tab-apples',
            associatedPaneId: 'tab-apples-pane',
            label: 'Apples',
            key: 'apples-tab',
            onSelect: handleSelect,
            metaData: { key: 'apples' },
            isSelected: currentTab === 'apples',
          },
          {
            id: 'tab-oranges',
            associatedPaneId: 'tab-oranges-pane',
            label: 'Oranges',
            icon: <IconBriefcase />,
            key: 'oranges-tab',
            onSelect: handleSelect,
            metaData: { key: 'oranges' },
            isSelected: currentTab === 'oranges',
          },
          {
            id: 'tab-strawberries',
            associatedPaneId: 'tab-strawberries-pane',
            label: 'Strawberries',
            key: 'strawberries-tab',
            onSelect: handleSelect,
            metaData: { key: 'strawberries' },
            isSelected: currentTab === 'strawberries',
          },
          {
            id: 'tab-fruit-salad',
            associatedPaneId: 'tab-fruit-salad-pane',
            label: 'Too many fruits to name combined into a bowl',
            key: 'fruit-salad-tab',
            onSelect: handleSelect,
            metaData: { key: 'fruit-salad' },
            isSelected: currentTab === 'fruit-salad',
          },
          {
            id: 'tab-pineapples',
            associatedPaneId: 'tab-pineapples-pane',
            label: 'Pineapples',
            key: 'pineapples-tab"',
            onSelect: handleSelect,
            metaData: { key: 'pineapples' },
            isSelected: currentTab === 'pineapples',
          },
          {
            id: 'tab-lemons',
            associatedPaneId: 'tab-lemons-pane',
            label: 'Lemons',
            key: 'lemons-tab',
            onSelect: handleSelect,
            metaData: { key: 'lemons' },
            isSelected: currentTab === 'lemons',
          },
          {
            id: 'tab-kiwis',
            associatedPaneId: 'tab-kiwis-pane',
            label: 'Kiwis',
            key: 'kiwis-tab',
            onSelect: handleSelect,
            metaData: { key: 'kiwis' },
            isSelected: currentTab === 'kiwis',
          },
          {
            id: 'tab-bananas',
            associatedPaneId: 'tab-bananas-pane',
            label: 'Bananas',
            key: 'bananas-tab',
            onSelect: handleSelect,
            metaData: { key: 'bananas' },
            isSelected: currentTab === 'bananas',
          },
          {
            id: 'tab-grapes',
            associatedPaneId: 'tab-grapes-pane',
            label: 'Grapes',
            key: 'grapes-tab',
            onSelect: handleSelect,
            metaData: { key: 'grapes' },
            isSelected: currentTab === 'grapes',
          },
        ]}
      >
        <TabContentTemplate keyValue={currentTab} />
      </Tabs>
    </div>
  );
};

// const TabsTemplate = (props) => {
//   return (
//     <select>
//       <optgroup label="text">
//         <option value="waffle">Waffle</option>
//       </optgroup>
//       <optgroup label="text">
//         <option value="waffle">Waffle</option>
//       </optgroup>
//       <optgroup label="text">
//         <option value="waffle">Waffle</option>
//       </optgroup>
//     </select>
//   );
// };

TabsTemplate.propTypes = propTypes;
export default TabsTemplate;
