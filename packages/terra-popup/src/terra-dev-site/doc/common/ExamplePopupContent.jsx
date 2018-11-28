import React from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const propTypes = {
  onChange: PropTypes.func,
};

const createListItem = (onChange, index) => (
  <Item
    isSelectable
    onSelect={onChange}
    key={`item-${index}`}
  >
    <Placeholder title={`Example Value ${index}`} style={{ height: '50px' }} />
  </Item>
);

const ExamplePopupContent = ({
  onChange,
}) => {
  const listItems = [];
  for (let index = 0; index < 12; index += 1) {
    listItems.push(createListItem(onChange, index));
  }
  return (
    <List isDivided>
      {listItems}
    </List>
  );
};

ExamplePopupContent.propTypes = propTypes;

export default ExamplePopupContent;
