import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import ApplicationHeaderName from '../../../ApplicationHeaderName';
import demoStyles from './demoStyles.scss';

const cx = classNames.bind(demoStyles);

export default () => (
  <div className={cx(['demo-background-color', 'demo-truncate-width'])}>
    <ApplicationHeaderName
      id="truncated"
      title="TitleTitleTitleTitleTitleTitleTitle"
      accessory={<Image alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-framework/raw/master/terra.png" height="26px" width="26px" />}
    />
  </div>
);
