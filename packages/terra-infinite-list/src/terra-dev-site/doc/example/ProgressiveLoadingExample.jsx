import React from 'react';
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import InfiniteList, { Item } from 'terra-infinite-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
/* eslint-enable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */

import MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';
import MyExampleContainer from '../common/MyExampleContainer';
import styles from './InfiniteListDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const ProgressiveLoadingExample = () => (
  <MyExampleContainer>
    <InfiniteList
      dividerStyle="standard"
      progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}
    >
      <Item key="item-1">
        <Placeholder title="Item 1" className={cx('placeholder')} />
      </Item>
    </InfiniteList>
  </MyExampleContainer>
);

export default ProgressiveLoadingExample;
