import React from 'react';
import PropTypes from 'prop-types';
import List from '../../../doc/aggregator/common/placeholder-list/PlaceholderList';
import Item from '../../../doc/aggregator/common/placeholder-list/PlaceholderListItem';
import DisclosureComponent from './DisclosureComponent';

/* eslint-disable react/prop-types */
class AggregatorItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, key) {
    const { aggregatorDelegate, name } = this.props;

    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.selectedKey === key) {
      aggregatorDelegate.releaseFocus();
      return;
    }

    aggregatorDelegate.requestFocus({
      selectedKey: key,
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
      <List>
        <Item
          isSelected={key === 'test-key'}
          onSelect={event => this.handleSelection(event, 'test-key')}
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
/* eslint-enable react/prop-types */

export default AggregatorItem;
