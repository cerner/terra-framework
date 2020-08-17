import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames';
import ThemeContext from 'terra-theme-context';
import classNamesBind from 'classnames/bind';
import ApplicationHeaderName from '../../../ApplicationHeaderName';
import demoStyles from './demoStyles.module.scss';

const cx = classNamesBind.bind(demoStyles);

export default () => {
  const theme = React.useContext(ThemeContext);
  const demoClassName = classNames(cx(
    'demo-background-color',
    theme.className,
  ));
  return (
    <div className={demoClassName}>
      <ApplicationHeaderName
        id="default"
        title="Title"
        accessory={<Image alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-framework/raw/main/terra.png" className={cx('demo-image-container')} />}
      />
    </div>
  );
};
