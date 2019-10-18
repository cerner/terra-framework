import React from 'react';
import Button from 'terra-button';
import SlidePanelManager from 'terra-slide-panel-manager';
import { withDisclosureManager } from 'terra-disclosure-manager';
import classNames from 'classnames/bind';
import styles from './AggregatorWithDisclosure.test.module.scss';

import Aggregator from '../../../Aggregator';
import AggregatorItem from '../common/AggregatorItem';

const cx = classNames.bind(styles);

const items = Object.freeze([{
  key: 'SECTION_0',
  component: <AggregatorItem name="Section 0" targetId="section0" />,
}, {
  key: 'SECTION_1',
  component: <AggregatorItem name="Section 1" targetId="section1" />,
}, {
  key: 'SECTION_2',
  component: <AggregatorItem name="Section 2" targetId="section2" />,
}, {
  key: 'SECTION_3',
  component: <AggregatorItem name="Section 3" targetId="section3" />,
}]);

const flippedItems = Object.freeze([{
  key: 'SECTION_4',
  component: <AggregatorItem name="Section 4" targetId="section4" />,
}, {
  key: 'SECTION_5',
  component: <AggregatorItem name="Section 5" targetId="section5" />,
}, {
  key: 'SECTION_6',
  component: <AggregatorItem name="Section 6" targetId="section6" />,
}, {
  key: 'SECTION_7',
  component: <AggregatorItem name="Section 7" targetId="section7" />,
}]);

const Wrapper = withDisclosureManager(({ itemsList, disclosureManager }) => (
  <Aggregator
    items={itemsList}
    disclose={disclosureManager.disclose}
  />
));

class AggregatorWithDisclosure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: false,
    };
  }

  render() {
    const body = (
      <div id="test-aggregator" role="main" className={cx('aggregator-with-disclosure-test')}>
        <Button id="flip-button" text="Flip Items" onClick={() => { this.setState(prevState => ({ flip: !prevState.flip })); }} />
        <SlidePanelManager>
          <Wrapper itemsList={this.state.flip ? flippedItems : items} />
        </SlidePanelManager>
      </div>
    );

    return body;
  }
}

export default AggregatorWithDisclosure;
