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

const textMapping = {
  label: 'Apples',
  icon: 'Oranges',
  custom: 'Strawberries',
  long: 'Too many fruits to name combined into a bowl',
  super: 'Pineapples',
  last: 'Lemons',
};

const TabsTemplate = (props) => {
  const [currentTab, setCurrentTab] = useState('label');

  function handleSelect(metaData) {
    setCurrentTab(metaData.key);
  }

  return (
    <div className={cx('content-wrapper')}>
      <Tabs
        tabFill={props.tabFill}
        tabData={[
          {
            id: 'tab-label',
            associatedPaneId: 'tab-label-pane',
            label: 'Apples',
            key: 'LabelTab',
            onSelect: handleSelect,
            metaData: { key: 'label' },
            isSelected: currentTab === 'label',
          },
          {
            id: 'tab-icon',
            associatedPaneId: 'tab-icon-pane',
            label: 'Oranges',
            icon: <IconBriefcase />,
            key: 'IconTab',
            onSelect: handleSelect,
            metaData: { key: 'icon' },
            isSelected: currentTab === 'icon',
          },
          {
            id: 'tab-custom',
            associatedPaneId: 'tab-custom-pane',
            customDisplay: (
              <div className={cx('custom-display')}>
                Strawberries
              </div>
            ),
            label: 'Strawberries',
            key: 'CustomTab',
            onSelect: handleSelect,
            metaData: { key: 'custom' },
            isSelected: currentTab === 'custom',
          },
          {
            id: 'tab-lorem',
            associatedPaneId: 'tab-lorem-pane',
            label: 'Too many fruits to name combined into a bowl',
            key: 'longLabel',
            onSelect: handleSelect,
            metaData: { key: 'long' },
            isSelected: currentTab === 'long',
          },
          {
            id: 'tab-super',
            associatedPaneId: 'tab-super-pane',
            label: 'Pineapples',
            icon: <IconSearch />,
            key: 'SuperTab"',
            onSelect: handleSelect,
            metaData: { key: 'super' },
            isSelected: currentTab === 'super',
          },
          {
            id: 'tab-last',
            associatedPaneId: 'tab-last-pane',
            label: 'Lemons',
            key: 'lastTab',
            onSelect: handleSelect,
            metaData: { key: 'last' },
            isSelected: currentTab === 'last',
          },
        ]}
      >
        <TabContentTemplate label={textMapping[currentTab]} />
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
