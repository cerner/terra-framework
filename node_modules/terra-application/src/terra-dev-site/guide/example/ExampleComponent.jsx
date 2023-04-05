import React from 'react';
import classNames from 'classnames/bind';
import { ThemeContext } from 'terra-application/lib/theme';
import styles from './ExampleComponent.module.scss';

const cx = classNames.bind(styles);

const ExampleComponent = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx('example-component', theme.className)}>
      This is an example component.
    </div>
  );
};

export default ExampleComponent;
