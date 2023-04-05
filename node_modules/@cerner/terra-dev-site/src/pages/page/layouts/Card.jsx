import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const Card = ({
  children,
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx('card', theme.className)}>
      <div className={cx('card-body')}>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
