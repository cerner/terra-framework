import React from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list2';
import DisclosureComponent from './DisclosureComponent';

class AggregatorItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, metaData) {
    const { aggregatorDelegate, name } = this.props;

    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.selectedKey === metaData.key) {
      aggregatorDelegate.releaseFocus();
      return;
    }

    aggregatorDelegate.requestFocus({
      selectedKey: metaData.key,
    })
      .then(({ disclose }) => {
        if (disclose) {
          disclose({
            preferredType: 'panel',
            size: 'small',
            content: {
              key: `Disclosure for ${name}`,
              component: <DisclosureComponent identifier={`Disclosure for ${name}`} />,
            },
          });
        }
      });
  }

  render() {
    const { name, aggregatorDelegate, targetId } = this.props;

    let key;
    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.selectedKey !== undefined) {
      key = aggregatorDelegate.itemState.selectedKey;
    }

    return (
      <List
        isDivided
        role="listbox"
      >
        <Item
          isSelectable
          isSelected={key === 'test-key'}
          onSelect={this.handleSelection}
          metaData={{ key: 'test-key' }}
        >
          <div id={targetId}>{name}</div>
        </Item>
      </List>
    );
  }
}

AggregatorItem.propTypes = {
  name: PropTypes.string,
  aggregatorDelegate: PropTypes.shape({}),
  targetId: PropTypes.string,
};

export default AggregatorItem;
