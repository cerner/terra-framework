import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import ApplicationMenuName from '../../../ApplicationMenuName';
import demoStyles from './demoStyles.module.scss';

const cx = classNames.bind(demoStyles);

export default () => (
  <div className={cx(['demo-background-color', 'demo-truncate-width'])}>
    <ApplicationMenuName
      id="wrapping"
      title="Title TitleTitleTitleTitleTitle Title Title Title Title Title"
      accessory={<Image alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-framework/raw/main/terra.png" className={cx('demo-image-container')} />}
    />
  </div>
);
