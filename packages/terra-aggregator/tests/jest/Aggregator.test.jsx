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
      <Aggregator.WrappedComponent />
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
      <Aggregator.WrappedComponent
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
      <Aggregator.WrappedComponent
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

    const wrapper = shallow((
      <Aggregator.WrappedComponent
        items={items}
      />
    ));

    return Promise.resolve()
      .then(() => {
        expect(wrapper.state().focusedItemId).toBe(undefined);
        expect(wrapper.state().focusedItemState).toBe(undefined);
      })
      .then(() => wrapper.find(AggregatorItem).getElements()[0].props.aggregatorDelegate.requestFocus({ item1State: 'testState' }))
      .then(({ disclose }) => {
        wrapper.update();

        expect(wrapper.state().focusedItemId).toBe('1');
        expect(wrapper.state().focusedItemState).toEqual({ item1State: 'testState' });

        expect(disclose).toBe(undefined);

        const firstItem = wrapper.find(AggregatorItem).getElements()[0];

        expect(firstItem.props.aggregatorDelegate.hasFocus).toBe(true);
        expect(firstItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
        expect(firstItem.props.aggregatorDelegate.releaseFocus).not.toBe(undefined);
        expect(firstItem.props.aggregatorDelegate.itemState).toEqual({ item1State: 'testState' });
      })
      .then(() => wrapper.find(AggregatorItem).getElements()[1].props.aggregatorDelegate.requestFocus({ item2State: 'differentState' }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().focusedItemId).toBe('2');
        expect(wrapper.state().focusedItemState).toEqual({ item2State: 'differentState' });

        const firstItem = wrapper.find(AggregatorItem).getElements()[0];
        const secondItem = wrapper.find(AggregatorItem).getElements()[1];

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

    const wrapper = shallow((
      <Aggregator.WrappedComponent
        items={items}
        disclosureManager={{
          disclose: () => {},
        }}
      />
    ));

    return Promise.resolve()
      .then(() => {
        expect(wrapper.state().focusedItemId).toBe(undefined);
        expect(wrapper.state().focusedItemState).toBe(undefined);
      })
      .then(() => wrapper.find(AggregatorItem).getElements()[0].props.aggregatorDelegate.requestFocus({ item1State: 'testState' }))
      .then(({ disclose }) => {
        wrapper.update();

        expect(wrapper.state().focusedItemId).toBe('1');
        expect(wrapper.state().focusedItemState).toEqual({ item1State: 'testState' });

        expect(disclose).not.toBe(undefined);

        const firstItem = wrapper.find(AggregatorItem).getElements()[0];

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

    const wrapper = mount((
      <Aggregator.WrappedComponent
        items={items}
      />
    ));

    return Promise.resolve()
      .then(() => {
        expect(wrapper.state().focusedItemId).toBe(undefined);
        expect(wrapper.state().focusedItemState).toBe(undefined);
      })
      .then(() => wrapper.find(AggregatorItem).getElements()[0].props.aggregatorDelegate.requestFocus({ item1State: 'testState' }))
      .then(() => {
        wrapper.update();

        expect(wrapper.state().focusedItemId).toBe('1');
        expect(wrapper.state().focusedItemState).toEqual({ item1State: 'testState' });

        const firstItem = wrapper.find(AggregatorItem).getElements()[0];

        expect(firstItem.props.aggregatorDelegate.hasFocus).toBe(true);
        expect(firstItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
        expect(firstItem.props.aggregatorDelegate.releaseFocus).not.toBe(undefined);
        expect(firstItem.props.aggregatorDelegate.itemState).toEqual({ item1State: 'testState' });
      })
      .then(() => wrapper.find(AggregatorItem).getElements()[0].props.aggregatorDelegate.releaseFocus())
      .then(() => {
        wrapper.update();

        expect(wrapper.state().focusedItemId).toBe(undefined);
        expect(wrapper.state().focusedItemState).toEqual(undefined);

        const firstItem = wrapper.find(AggregatorItem).getElements()[0];

        expect(firstItem.props.aggregatorDelegate.hasFocus).toBe(false);
        expect(firstItem.props.aggregatorDelegate.requestFocus).not.toBe(undefined);
        expect(firstItem.props.aggregatorDelegate.releaseFocus).toBe(undefined);
        expect(firstItem.props.aggregatorDelegate.itemState).toEqual(undefined);
      });
  });
});
