import React from 'react';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './ThemedComponent.module.scss';

const cx = classNames.bind(styles);

const Themed = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={cx('themed', theme.className)}>
      <h1>
        {`Theme Name: ${theme.name}`}
      </h1>
      <div className={cx('themed-block')} />
    </div>
  );
};

export default Themed;
