import React from 'react';
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import InfiniteList, { Item, SectionHeader } from 'terra-infinite-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
/* eslint-enable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */

import mockData from './mock-data/mock-section';
import MyExampleContainer from '../common/MyExampleContainer';
import styles from '../example/InfiniteListDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} className={cx('placeholder')} />
  </Item>
);

const createSection = (sectionData) => {
  const section = [
    <SectionHeader
      key={sectionData.key}
      title={sectionData.title}
    />,
  ];
  sectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));
  return section;
};

const createSections = data => data.map(section => createSection(section));

const InfiniteListSection = () => (
  <MyExampleContainer>
    <InfiniteList
      dividerStyle="standard"
      isFinishedLoading
    >
      {createSections(mockData)}
    </InfiniteList>
  </MyExampleContainer>
);

export default InfiniteListSection;
