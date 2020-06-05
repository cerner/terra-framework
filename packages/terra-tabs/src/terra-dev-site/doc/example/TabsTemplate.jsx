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
  label: 'Tab with label',
  icon: 'Tab with icon',
  custom: 'Custom display',
  long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  last: 'Last Tab',
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
            label: 'Tab with label',
            key: 'LabelTab',
            onSelect: handleSelect,
            metaData: { key: 'label' },
            isSelected: currentTab === 'label',
          },
          {
            id: 'tab-icon',
            associatedPaneId: 'tab-icon-pane',
            label: 'Tab with icon',
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
                Custom display
              </div>
            ),
            label: 'Custom display',
            key: 'CustomTab',
            onSelect: handleSelect,
            metaData: { key: 'custom' },
            isSelected: currentTab === 'custom',
          },
          {
            id: 'tab-lorem',
            associatedPaneId: 'tab-lorem-pane',
            label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            key: 'longLabel',
            onSelect: handleSelect,
            metaData: { key: 'long' },
            isSelected: currentTab === 'long',
          },
          {
            id: 'tab-super',
            associatedPaneId: 'tab-super-pane',
            label: 'Super Tab',
            icon: <IconSearch />,
            key: 'SuperTab"',
            onSelect: handleSelect,
            metaData: { key: 'super' },
            isSelected: currentTab === 'super',
          },
          {
            id: 'tab-last',
            associatedPaneId: 'tab-last-pane',
            label: 'Last Tab',
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
