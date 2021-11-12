import React from 'react';
import classNames from 'classnames/bind';
import Image from 'terra-image';
import ApplicationMenuName from '../../../ApplicationMenuName';
import demoStyles from './demoStyles.module.scss';
import img from './terra.png';

const cx = classNames.bind(demoStyles);

export default () => (
  <div className={cx('content-wrapper')}>
    <ApplicationMenuName
      id="default"
      title="Title"
      accessory={<Image alt="terra accessory" variant="rounded" src={img} className={cx('demo-image-container')} />}
    />
  </div>
);
