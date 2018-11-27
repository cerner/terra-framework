import React from 'react';
import PropTypes from 'prop-types';
import TestExample from 'terra-disclosure-manager/lib/terra-dev-site/test/common/TestExample';
import List, { Item } from 'terra-list';

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
              component: <TestExample identifier={`Disclosure for ${name}`} />,
            },
          });
        }
      });
  }

  render() {
    const { name, aggregatorDelegate, targetId } = this.props;

    let selectedKey;
    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.selectedKey !== undefined) {
      selectedKey = aggregatorDelegate.itemState.selectedKey;
    }

    return (
      <List
        isDivided
      >
        <Item
          isSelectable
          isSelected={selectedKey === 'test-key'}
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
