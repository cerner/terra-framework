import React from 'react';
import classNames from 'classnames/bind';
import Hookshot from 'terra-hookshot';
import styles from './HookshotTestDocCommon.module.scss';

const cx = classNames.bind(styles);

const HookshotContent = props => (
  <Hookshot.Content
    {...props}
  >
    <div className={cx('hookshot-content-wrapper')}>Hookshot</div>
  </Hookshot.Content>
);

export default HookshotContent;
