import React from 'react';
import PropTypes from 'prop-types';
import TestExample from 'terra-disclosure-manager/lib/terra-dev-site/test/common/TestExample';
import SelectableList from 'terra-list/lib/SelectableList';

class AggregatorItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, index) {
    const { aggregatorDelegate, name } = this.props;

    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState.index === index) {
      aggregatorDelegate.releaseFocus();
      return;
    }

    aggregatorDelegate.requestFocus({
      index,
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

    let selectedIndex;
    if (aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.index !== undefined) {
      selectedIndex = aggregatorDelegate.itemState.index;
    }

    return (
      <SelectableList
        isDivided
        selectedIndexes={selectedIndex !== undefined ? [selectedIndex] : []}
        onChange={this.handleSelection}
      >
        <SelectableList.Item
          content={
            <div id={targetId}>{name}</div>
          }
        />
      </SelectableList>
    );
  }
}

AggregatorItem.propTypes = {
  name: PropTypes.string,
  aggregatorDelegate: PropTypes.shape({}),
  targetId: PropTypes.string,
};

export default AggregatorItem;
