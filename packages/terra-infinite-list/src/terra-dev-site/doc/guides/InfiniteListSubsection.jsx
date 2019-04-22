import React from 'react';
/* eslint-disable import/no-unresolved, import/extensions */
import InfiniteList, { Item, SectionHeader, SubsectionHeader } from 'terra-infinite-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-unresolved, import/extensions */

import mockData from './mock-data/mock-subsection';
import MyExampleContainer from '../common/MyExampleContainer';

const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} style={{ height: '50px' }} />
  </Item>
);

const createSubSection = (subsectionData) => {
  const section = [
    <SubsectionHeader
      key={subsectionData.key}
      title={subsectionData.title}
    />,
  ];
  subsectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));
  return section;
};

const createSection = (sectionData) => {
  const section = [
    <SectionHeader
      key={sectionData.key}
      title={sectionData.title}
    />,
  ];
  sectionData.childItems.forEach(subsection => section.push(createSubSection(subsection)));
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
