import React from 'react';
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

const Wrapper = withDisclosureManager(({ disclosureManager }) => (
  <Aggregator
    items={items}
    disclose={disclosureManager.disclose}
  />
));

const AggregatorWithDisclosure = () => (
  <div id="test-aggregator" role="main" className={cx('aggregator-with-disclosure-test')}>
    <SlidePanelManager>
      <Wrapper />
    </SlidePanelManager>
  </div>
);

export default AggregatorWithDisclosure;
