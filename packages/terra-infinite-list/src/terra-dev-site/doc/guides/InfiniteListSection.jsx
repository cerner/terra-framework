import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import InfiniteList, { Item, SectionHeader } from 'terra-infinite-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import mockData from './mock-data/mock-section';
import MyExampleContainer from './common/MyExampleContainer';

const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} style={{ height: '50px' }} />
  </Item>
);

const createSection = (sectionData) => {
  const section = [
    <SectionHeader
      key={sectionData.key}
      title={sectionData.title}
    />,
  ];
  const sectionItems = sectionData.childItems.map(childItem => createListItem(childItem));
  return section.concat(sectionItems);
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
