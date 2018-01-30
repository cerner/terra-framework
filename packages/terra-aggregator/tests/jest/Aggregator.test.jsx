import React from 'react';
import PropTypes from 'prop-types';

import Aggregator from '../../src/Aggregator';

const AggregatorItem = ({ aggregatorDelegate, ...customProps }) => (
  <div {...customProps} />
);

AggregatorItem.propTypes = {
  aggregatorDelegate: PropTypes.shape({}),
};

describe('Aggregator', () => {
  it('should render an Aggregator without optional props', () => {
    const result = shallow((
      <Aggregator />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render an Aggregator with items', () => {
    const items = [{
      key: '1',
      component: <AggregatorItem key="1" />,
    }, {
      key: '2',
      component: <AggregatorItem key="2" />,
    }, {
      key: '3',
      component: <AggregatorItem key="3" />,
    }];

    const result = shallow((
      <Aggregator
        items={items}
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render an Aggregator items with a custom render function', () => {
    const items = [{
      key: '1',
      component: <AggregatorItem key="1" />,
    }, {
      key: '2',
      component: <AggregatorItem key="2" />,
    }, {
      key: '3',
      component: <AggregatorItem key="3" />,
    }];

    const result = shallow((
      <Aggregator
        items={items}
        render={renderData => (
          <div id="custom">
            <div id="render">
              <div id="wrappers">
                {renderData.items}
              </div>
            </div>
          </div>
          )}
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should provide a working requestFocus implementation', () => {
    const items = [{
      key: '1',
      component: <AggregatorItem key="1" />,
    }, {
      key: '2',
      component: <AggregatorItem key="2" />,
    }, {
      key: '3',
      component: <AggregatorItem key="3" />,
    }];

    const result = mount((
      <Aggregator
        items={items}
      />
    ));

    const renderedItems = result.find(AggregatorItem);
    const firstItem = renderedItems.nodes[0];
    const secondItem = renderedItems.nodes[1];

    return Promise.resolve()
    .then(() => {
      expect(result.state().focusedItemId).toBe(undefined);
      expect(result.state().focusedItemState).toBe(undefined);
    })
    .then(() => firstItem.props.aggregatorDelegate.requestFocus({ item1State: 'testState' }))
    .then(({ disclose }) => {
      expect(result.state().focusedItemId).toBe('1');
      expect(result.state().focusedItemState).toEqual({ item1State: 'testState' });

      // No disclose function was provided to the Aggregator, so one is not provided to the AggregatorItems.
      expect(disclose).toBe(undefined);

      expect(firstItem.props.aggregatorDelegate.hasFocus).toBe(true);
      expect(firstItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.releaseFocus).not.toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.itemState).toEqual({ item1State: 'testState' });
    })
    .then(() => secondItem.props.aggregatorDelegate.requestFocus({ item2State: 'differentState' }))
    .then(() => {
      expect(result.state().focusedItemId).toBe('2');
      expect(result.state().focusedItemState).toEqual({ item2State: 'differentState' });

      expect(firstItem.props.aggregatorDelegate.hasFocus).toBe(false);
      expect(firstItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.releaseFocus).toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.itemState).toBe(undefined);

      expect(secondItem.props.aggregatorDelegate.hasFocus).toBe(true);
      expect(secondItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
      expect(secondItem.props.aggregatorDelegate.releaseFocus).not.toBe(undefined);
      expect(secondItem.props.aggregatorDelegate.itemState).toEqual({ item2State: 'differentState' });
    });
  });

  it('should provide a working requestFocus implementation with disclose function', () => {
    const items = [{
      key: '1',
      component: <AggregatorItem key="1" />,
    }, {
      key: '2',
      component: <AggregatorItem key="2" />,
    }, {
      key: '3',
      component: <AggregatorItem key="3" />,
    }];

    const result = mount((
      <Aggregator
        items={items}
        disclose={() => {
          // IM A DISCLOSE FUNCTION WOOHOO
        }}
      />
    ));

    const firstItem = result.find(AggregatorItem).nodes[0];

    return Promise.resolve()
    .then(() => {
      expect(result.state().focusedItemId).toBe(undefined);
      expect(result.state().focusedItemState).toBe(undefined);
    })
    .then(() => firstItem.props.aggregatorDelegate.requestFocus({ item1State: 'testState' }))
    .then(({ disclose }) => {
      expect(result.state().focusedItemId).toBe('1');
      expect(result.state().focusedItemState).toEqual({ item1State: 'testState' });

      expect(disclose).not.toBe(undefined);

      expect(firstItem.props.aggregatorDelegate.hasFocus).toBe(true);
      expect(firstItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.releaseFocus).not.toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.itemState).toEqual({ item1State: 'testState' });
    });
  });

  it('should provide a working releaseFocus implementation', () => {
    const items = [{
      key: '1',
      component: <AggregatorItem key="1" />,
    }, {
      key: '2',
      component: <AggregatorItem key="2" />,
    }, {
      key: '3',
      component: <AggregatorItem key="3" />,
    }];

    const result = mount((
      <Aggregator
        items={items}
      />
    ));

    const firstItem = result.find(AggregatorItem).nodes[0];

    return Promise.resolve()
    .then(() => {
      expect(result.state().focusedItemId).toBe(undefined);
      expect(result.state().focusedItemState).toBe(undefined);
    })
    .then(() => firstItem.props.aggregatorDelegate.requestFocus({ item1State: 'testState' }))
    .then(() => {
      expect(result.state().focusedItemId).toBe('1');
      expect(result.state().focusedItemState).toEqual({ item1State: 'testState' });

      expect(firstItem.props.aggregatorDelegate.hasFocus).toBe(true);
      expect(firstItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.releaseFocus).not.toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.itemState).toEqual({ item1State: 'testState' });
    })
    .then(() => firstItem.props.aggregatorDelegate.releaseFocus())
    .then(() => {
      expect(result.state().focusedItemId).toBe(undefined);
      expect(result.state().focusedItemState).toEqual(undefined);

      expect(firstItem.props.aggregatorDelegate.hasFocus).toBe(false);
      expect(firstItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.releaseFocus).toBe(undefined);
      expect(firstItem.props.aggregatorDelegate.itemState).toEqual(undefined);
    });
  });
});
