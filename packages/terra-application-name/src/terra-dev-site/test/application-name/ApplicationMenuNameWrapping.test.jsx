import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames';
import ThemeContext from 'terra-theme-context';
import classNamesBind from 'classnames/bind';
import ApplicationMenuName from '../../../ApplicationMenuName';
import demoStyles from './demoStyles.module.scss';
import img from './terra.png';

const cx = classNamesBind.bind(demoStyles);

export default () => {
  const theme = React.useContext(ThemeContext);
  const demoClassName = classNames(cx(
    'demo-background-color',
    'demo-truncate-width',
    theme.className,
  ));
  return (
    <div className={demoClassName}>
      <ApplicationMenuName
        id="wrapping"
        title="Title TitleTitleTitleTitleTitle Title Title Title Title Title"
        accessory={<Image alt="terra accessory" variant="rounded" src={img} className={cx('demo-image-container')} />}
      />
    </div>
  );
};
