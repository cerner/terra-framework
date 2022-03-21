import React from 'react';
import InfiniteList, { Item } from 'terra-infinite-list';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';

import MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';
import MyExampleContainer from '../common/MyExampleContainer';
import styles from './InfiniteListDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const ProgressiveLoadingExample = () => (
  <MyExampleContainer>
    <InfiniteList
      dividerStyle="standard"
      ariaLabel="Progressive Loading"
      progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}
    >
      <Item key="item-1">
        <Placeholder title="Item 1" className={cx('placeholder')} />
      </Item>
    </InfiniteList>
  </MyExampleContainer>
);

export default ProgressiveLoadingExample;
