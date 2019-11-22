import React, { useState } from 'react';
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
}]);

const flippedItems = Object.freeze([{
  key: 'SECTION_2',
  component: <AggregatorItem name="Section 2" targetId="section2" />,
}, {
  key: 'SECTION_3',
  component: <AggregatorItem name="Section 3" targetId="section3" />,
}]);

const Wrapper = withDisclosureManager(({ itemsList, disclosureManager }) => (
  <Aggregator
    items={itemsList}
    disclose={disclosureManager.disclose}
  />
));

function AggregatorWithDisclosure() {
  const [flip, setFlip] = useState(false);

  return (
    <div id="test-aggregator" role="main" className={cx('aggregator-with-disclosure-test')}>
      <Button id="flip-button" text="Flip Items" onClick={() => setFlip(!flip)} />
      <SlidePanelManager>
        <Wrapper itemsList={flip ? flippedItems : items} />
      </SlidePanelManager>
    </div>
  );
}

export default AggregatorWithDisclosure;
