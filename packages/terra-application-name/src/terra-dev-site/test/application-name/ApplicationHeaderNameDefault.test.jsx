import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import ApplicationHeaderName from '../../../ApplicationHeaderName';
import demoStyles from './demoStyles.module.scss';

const cx = classNames.bind(demoStyles);

export default () => (
  <div className={cx(['demo-background-color'])}>
    <ApplicationHeaderName
      id="default"
      title="Title"
      accessory={<Image alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-framework/raw/main/terra.png" className={cx('demo-image-container')} />}
    />
  </div>
);
